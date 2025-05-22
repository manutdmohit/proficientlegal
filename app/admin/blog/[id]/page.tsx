'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';
import QuillEditor from '@/components/QuillEditor';
import Image from 'next/image';
import { toast } from 'sonner';

interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  published: boolean;
  featuredImage: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export default function BlogPostEditor() {
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();
  const id = params.id as string;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [post, setPost] = useState<Partial<Post>>({
    title: '',
    content: '',
    excerpt: '',
    published: false,
    featuredImage: '',
    tags: [],
    seo: {
      title: '',
      description: '',
      keywords: [],
    },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (id !== 'new') {
      fetchPost();
    } else {
      setLoading(false);
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/posts/${id}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        console.error('Error fetching post');
        toast.error('Failed to fetch post');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Failed to fetch post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setPost({ ...post, featuredImage: data.url });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await handleImageUpload(file);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!post.title?.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!post.content?.trim()) {
      newErrors.content = 'Content is required';
    }
    if (!post.excerpt?.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }
    if (!post.featuredImage) {
      newErrors.featuredImage = 'Featured image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(
        `/api/blog/posts${id === 'new' ? '' : `/${id}`}`,
        {
          method: id === 'new' ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(post),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success('Post saved successfully');
        router.push('/admin/blog');
      } else {
        const error = await response.json();
        toast.error(error.error || 'Error saving post');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Error saving post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center space-x-4 mb-6">
        <Link href="/admin/blog">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">
          {id === 'new' ? 'New Post' : 'Edit Post'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                required
                className={errors.title ? 'border-red-500' : ''}
              />
              {errors.title && (
                <p className="text-sm text-red-500 mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                required
                className={errors.excerpt ? 'border-red-500' : ''}
              />
              {errors.excerpt && (
                <p className="text-sm text-red-500 mt-1">{errors.excerpt}</p>
              )}
            </div>

            <div>
              <Label>Featured Image *</Label>
              <div className="mt-2">
                {post.featuredImage ? (
                  <div className="relative w-full h-48 mb-2">
                    <Image
                      src={post.featuredImage}
                      alt="Featured"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setPost({ ...post, featuredImage: '' })}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-primary ${
                      errors.featuredImage ? 'border-red-500' : ''
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">
                      Click to upload featured image
                    </p>
                  </div>
                )}
                {errors.featuredImage && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.featuredImage}
                  </p>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={post.tags?.join(', ')}
                onChange={(e) =>
                  setPost({
                    ...post,
                    tags: e.target.value.split(',').map((tag) => tag.trim()),
                  })
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={post.published}
                onCheckedChange={(checked) =>
                  setPost({ ...post, published: checked })
                }
              />
              <Label htmlFor="published">Published</Label>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h3 className="font-semibold">SEO Settings</h3>
              <div>
                <Label htmlFor="seoTitle">SEO Title</Label>
                <Input
                  id="seoTitle"
                  value={post.seo?.title}
                  onChange={(e) =>
                    setPost({
                      ...post,
                      seo: {
                        title: e.target.value,
                        description: post.seo?.description || '',
                        keywords: post.seo?.keywords || [],
                      },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="seoDescription">SEO Description</Label>
                <Textarea
                  id="seoDescription"
                  value={post.seo?.description}
                  onChange={(e) =>
                    setPost({
                      ...post,
                      seo: {
                        title: post.seo?.title || '',
                        description: e.target.value,
                        keywords: post.seo?.keywords || [],
                      },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="seoKeywords">
                  SEO Keywords (comma-separated)
                </Label>
                <Input
                  id="seoKeywords"
                  value={post.seo?.keywords?.join(', ')}
                  onChange={(e) =>
                    setPost({
                      ...post,
                      seo: {
                        title: post.seo?.title || '',
                        description: post.seo?.description || '',
                        keywords: e.target.value
                          .split(',')
                          .map((k) => k.trim()),
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="content">Content *</Label>
            <div className="h-[500px]">
              <QuillEditor
                value={post.content || ''}
                onChange={(content: string) => setPost({ ...post, content })}
              />
            </div>
            {errors.content && (
              <p className="text-sm text-red-500 mt-1">{errors.content}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={saving || uploading}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save Post'}
          </Button>
        </div>
      </form>
    </div>
  );
}

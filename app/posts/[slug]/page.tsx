import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import { notFound } from 'next/navigation';
import ArticleSchema from '@/app/components/ArticleSchema';
import PostPageClient from './PostPageClient';
import Post from '@/app/models/Post';
import connectDB from '@/app/config/database';

interface Comment {
  name: string;
  email: string;
  comment: string;
  createdAt: string;
}

interface PostType {
  _id: string;
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  postImage?: string;
  tags?: string[];
  published?: boolean;
  comments?: Comment[];
  author?: {
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  await connectDB();
  const post = (await Post.findOne({
    slug: params.slug,
  }).lean()) as PostType | null;

  if (!post) return { title: 'Post Not Found | Proficient Legal' };

  const cleanContent =
    post.content?.replace(/<[^>]+>/g, '').slice(0, 150) || '';

  return {
    title: `${post.title} | Proficient Legal`,
    description: cleanContent,
    openGraph: {
      title: post.title,
      description: cleanContent,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/posts/${params.slug}`,
      images: [
        {
          url:
            post.featuredImage ||
            post.postImage ||
            '/images/teams/darren-ho.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: cleanContent,
      images: [
        post.featuredImage || post.postImage || '/images/teams/darren-ho.jpg',
      ],
    },
  };
}

// Server component for the page
export default async function PostSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  await connectDB();
  const post = (await Post.findOne({
    slug: params.slug,
  }).lean()) as PostType | null;

  if (!post) notFound();

  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/posts/${params.slug}`;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.content?.replace(/<[^>]+>/g, '').slice(0, 150) || ''}
        image={
          post.featuredImage || post.postImage || '/images/teams/darren-ho.jpg'
        }
        datePublished={
          post.createdAt?.toISOString() || new Date().toISOString()
        }
        dateModified={post.updatedAt?.toISOString() || new Date().toISOString()}
        authorName={post.author?.name || 'Proficient Legal'}
        url={shareUrl}
      />
      <Header />
      <PostPageClient post={post} shareUrl={shareUrl} />
      <ContactSection />
    </>
  );
}

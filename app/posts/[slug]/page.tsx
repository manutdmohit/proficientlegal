import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import { notFound } from 'next/navigation';
import ArticleSchema from '@/app/components/ArticleSchema';
import PostPageClient from './PostPageClient';

interface Comment {
  name: string;
  email: string;
  comment: string;
  createdAt: string;
}

interface Post {
  _id: string;
  title: string;
  content: string;
  comments: Comment[];
  date?: string;
  heroImage?: string;
  author?: {
    name: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Fetch post data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${params.slug}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return { title: 'Post Not Found | Proficient Legal' };

  const post = (await res.json()) as Post;

  // Clean content for description
  const cleanContent =
    post.content?.replace(/<[^>]+>/g, '').slice(0, 150) || '';

  return {
    title: `${post.title} | Proficient Legal`,
    description: cleanContent,
    openGraph: {
      title: post.title,
      description: cleanContent,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${params.slug}`,
      images: [
        {
          url: post.heroImage || '/visa-approved.jpg',
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
      images: [post.heroImage || '/visa-approved.jpg'],
    },
  };
}

// Server component for the page
export default async function PostSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch post data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${params.slug}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) notFound();

  const post = (await res.json()) as Post;
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${params.slug}`;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.content?.replace(/<[^>]+>/g, '').slice(0, 150) || ''}
        image={post.heroImage || '/visa-approved.jpg'}
        datePublished={post.date || new Date().toISOString()}
        dateModified={post.date || new Date().toISOString()}
        authorName={post.author?.name || 'Proficient Legal'}
        url={shareUrl}
      />
      <Header />
      <PostPageClient post={post} shareUrl={shareUrl} />
      <ContactSection />
    </>
  );
}

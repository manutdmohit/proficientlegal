'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useSession } from 'next-auth/react';

interface Comment {
  _id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
  parent?: string;
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

export default function CommentSection({
  postId,
  comments,
}: CommentSectionProps) {
  const { data: session } = useSession();
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [localComments, setLocalComments] = useState(comments);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) {
      // Redirect to login or show login modal
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/blog/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newComment,
          postId,
          parentId: replyTo,
        }),
      });

      if (response.ok) {
        const comment = await response.json();
        setLocalComments([comment, ...localComments]);
        setNewComment('');
        setReplyTo(null);
      } else {
        console.error('Error posting comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderComment = (comment: Comment, level = 0) => {
    const replies = localComments.filter((c) => c.parent === comment._id);

    return (
      <div key={comment._id} className={`${level > 0 ? 'ml-8 mt-4' : 'mt-6'}`}>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="font-medium">{comment.author.name}</span>
            <span className="mx-2">•</span>
            <time dateTime={comment.createdAt}>
              {format(new Date(comment.createdAt), 'MMM d, yyyy')}
            </time>
          </div>
          <p className="text-gray-700">{comment.content}</p>
          {session?.user && (
            <button
              onClick={() => setReplyTo(comment._id)}
              className="text-sm text-primary hover:underline mt-2"
            >
              Reply
            </button>
          )}
        </div>
        {replies.map((reply) => renderComment(reply, level + 1))}
      </div>
    );
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {session?.user ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={replyTo ? 'Write a reply...' : 'Write a comment...'}
            className="mb-4"
            required
          />
          <div className="flex justify-between items-center">
            <Button type="submit" disabled={loading}>
              {loading ? 'Posting...' : replyTo ? 'Post Reply' : 'Post Comment'}
            </Button>
            {replyTo && (
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel Reply
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <p className="text-gray-600">
            Please{' '}
            <a href="/login" className="text-primary hover:underline">
              log in
            </a>{' '}
            to leave a comment.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {localComments
          .filter((comment) => !comment.parent)
          .map((comment) => renderComment(comment))}
      </div>
    </div>
  );
}

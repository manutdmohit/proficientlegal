'use client';
import { useState } from 'react';

interface AddCommentProps {
  postId: string;
  onCommentAdded?: () => void;
}

export default function AddComment({
  postId,
  onCommentAdded,
}: AddCommentProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!name.trim() || !email.trim() || !comment.trim()) {
      setError('All fields are required.');
      return;
    }
    setSubmitting(true);
    const res = await fetch(`/api/post`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, comment, postId }),
    });
    if (res.ok) {
      setSuccess(true);
      setName('');
      setEmail('');
      setComment('');
      if (onCommentAdded) onCommentAdded();
    } else {
      setError('Failed to add comment.');
    }
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056a8]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056a8]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Comment
        </label>
        <textarea
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056a8]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={3}
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">Comment added!</div>}
      <button
        type="submit"
        className="bg-[#0056a8] text-white px-6 py-2 rounded hover:bg-[#003b73] transition font-semibold"
        disabled={submitting}
      >
        {submitting ? 'Posting...' : 'Add Comment'}
      </button>
    </form>
  );
}

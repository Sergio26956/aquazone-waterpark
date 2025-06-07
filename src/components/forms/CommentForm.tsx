'use client';
import { useState } from 'react';

export default function CommentForm() {
  const [comment, setComment] = useState('');

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Comentario enviado: ${comment}`);
    setComment('');
  };

  return (
    <form onSubmit={handleComment} className="space-y-3 p-4 border rounded">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe tu comentario"
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Comentar
      </button>
    </form>
  );
}

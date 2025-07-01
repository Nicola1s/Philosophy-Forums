
"use client";
import React, { useState } from 'react';

interface Props {
  categories: string[];
  onSubmit: (newThread: { title: string, content: string, category: string, author: string }) => void;
  onCancel: () => void;
}

export default function NewThreadForm({ categories, onSubmit, onCancel }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [author, setAuthor] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Start a New Discussion</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 p-2 border rounded" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full mb-2 p-2 border rounded" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Your Name" className="w-full mb-2 p-2 border rounded" />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full mb-2 p-2 border rounded">
        {categories.map(cat => <option key={cat}>{cat}</option>)}
      </select>
      <div className="flex gap-4">
        <button className="bg-slate-800 text-white px-4 py-2 rounded" onClick={() => onSubmit({ title, content, category, author })}>Post</button>
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

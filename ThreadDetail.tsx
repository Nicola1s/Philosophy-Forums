
"use client";
import React, { useState } from 'react';
import { ArrowLeft, ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';
import { Thread } from './PhilosophyForum';

interface Props {
  thread: Thread;
  onBack: () => void;
  onReply: (threadId: number, text: string) => void;
  onReaction: (threadId: number, type: 'agree' | 'disagree' | 'report') => void;
  onCategoryFilter: (category: string) => void;
  onReturnToHome: () => void;
}

export default function ThreadDetail({ thread, onBack, onReply, onReaction, onCategoryFilter, onReturnToHome }: Props) {
  const [replyText, setReplyText] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <button onClick={onBack} className="text-sm text-blue-600 mb-4 flex items-center"><ArrowLeft className="w-4 h-4 mr-1" />Back</button>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">{thread.title}</h2>
      <p className="text-slate-700 mb-4">{thread.content}</p>
      <div className="text-xs text-slate-500 mb-2">Posted by {thread.author} on {thread.timestamp.toLocaleString()}</div>
      <div className="flex gap-3 mb-6">
        <button onClick={() => onReaction(thread.id, 'agree')}><ThumbsUp className="inline w-4 h-4" /> {thread.agrees}</button>
        <button onClick={() => onReaction(thread.id, 'disagree')}><ThumbsDown className="inline w-4 h-4" /> {thread.disagrees}</button>
        <button onClick={() => onReaction(thread.id, 'report')}><AlertTriangle className="inline w-4 h-4" /> {thread.reports}</button>
        <button onClick={() => onCategoryFilter(thread.category)} className="ml-auto bg-slate-100 px-2 py-1 rounded text-xs">{thread.category}</button>
      </div>
      <hr className="my-4" />
      <h3 className="text-lg font-semibold mb-2">Replies</h3>
      {thread.replies.map(reply => (
        <div key={reply.id} className="border-b py-2">
          <div className="text-sm text-slate-800">{reply.text}</div>
          <div className="text-xs text-slate-500">by {reply.author} at {reply.timestamp.toLocaleString()}</div>
        </div>
      ))}
      <div className="mt-4">
        <textarea
          className="w-full border rounded p-2 text-sm"
          placeholder="Write a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <button
          className="mt-2 bg-slate-800 text-white px-4 py-2 rounded"
          onClick={() => { onReply(thread.id, replyText); setReplyText(""); }}
        >
          Post Reply
        </button>
      </div>
    </div>
  );
}

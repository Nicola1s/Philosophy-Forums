
"use client";
import React from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';
import { Thread } from './PhilosophyForum';

interface Props {
  thread: Thread;
  onSelect: () => void;
  onCategoryFilter: (category: string) => void;
  onReaction: (threadId: number, type: 'agree' | 'disagree' | 'report') => void;
}

export default function ThreadCard({ thread, onSelect, onCategoryFilter, onReaction }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition cursor-pointer" onClick={onSelect}>
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{thread.title}</h3>
      <p className="text-sm text-slate-600 mb-3">{thread.content.slice(0, 120)}...</p>
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>by {thread.author}</span>
        <span>{thread.timestamp.toLocaleDateString()}</span>
      </div>
      <div className="flex gap-3 mt-3">
        <button onClick={(e) => { e.stopPropagation(); onReaction(thread.id, 'agree'); }}><ThumbsUp className="w-4 h-4 inline" /> {thread.agrees}</button>
        <button onClick={(e) => { e.stopPropagation(); onReaction(thread.id, 'disagree'); }}><ThumbsDown className="w-4 h-4 inline" /> {thread.disagrees}</button>
        <button onClick={(e) => { e.stopPropagation(); onReaction(thread.id, 'report'); }}><AlertTriangle className="w-4 h-4 inline" /> {thread.reports}</button>
        <span><MessageSquare className="w-4 h-4 inline" /> {thread.replies.length}</span>
        <button onClick={(e) => { e.stopPropagation(); onCategoryFilter(thread.category); }} className="ml-auto bg-slate-100 px-2 py-1 rounded text-xs">{thread.category}</button>
      </div>
    </div>
  );
}

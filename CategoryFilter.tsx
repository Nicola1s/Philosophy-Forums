
"use client";
import React from 'react';

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-sm font-medium text-slate-800 mb-2">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1 rounded-full text-sm border ${selectedCategory === cat ? "bg-slate-800 text-white" : "text-slate-600 border-slate-300"}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

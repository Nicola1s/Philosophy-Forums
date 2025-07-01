
"use client";
import React from 'react';

export default function SettingsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <p className="text-sm text-slate-600 mb-4">This is a placeholder for future settings options.</p>
        <button className="bg-slate-800 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

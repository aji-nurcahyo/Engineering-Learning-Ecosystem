import { useState, useEffect } from 'react';

const STORAGE_KEY = 'learning_hub_bookmarks_v1';

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('Gagal menyimpan bookmark ke localStorage:', e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  const clearBookmarks = () => {
    setBookmarkedIds([]);
  };

  return { bookmarkedIds, toggleBookmark, isBookmarked, clearBookmarks };
}


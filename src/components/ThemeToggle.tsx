'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    // 检查系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // 只在主题加载后显示按钮
  if (!theme) return null;

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
} 
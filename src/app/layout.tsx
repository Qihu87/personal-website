import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI TK - 0基础小白的中文学习网站',
  description: '将用最简明了的教程帮你入门AI相关知识',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        {/* 导航栏 */}
        <nav className="navbar">
          <div className="nav-content">
            <Link href="/" className="logo">
              <span className="logo-text">AI TK</span>
            </Link>
            <div className="nav-links">
              <Link href="/chatgpt">ChatGPT教程</Link>
              <Link href="/cursor">Cursor教程</Link>
              <Link href="/basic">0基础学编程</Link>
              <Link href="/tools">AI工具推荐</Link>
              <Link href="/about">关于我</Link>
            </div>
            <div className="social-links">
              <Link href="/xiaohongshu" className="social-icon">小红书</Link>
              <Link href="/youtube" className="social-icon">YouTube</Link>
              <Link href="/bilibili" className="social-icon">哔哩哔哩</Link>
              <Link href="/wechat" className="social-icon">微信</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
} 
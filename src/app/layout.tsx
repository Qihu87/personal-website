import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我的网站',
  description: '使用 Next.js 14 创建的网站',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
} 
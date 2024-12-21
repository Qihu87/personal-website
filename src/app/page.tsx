import Link from 'next/link'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <main>
      {/* 背景光影效果 */}
      <div className="background-glow">
        <img src="/images/hero/bg2.png" alt="background glow effect" />
      </div>
      
      {/* 英雄区域 */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            AI TK ,<br />
            <span className="white-text">0基础小白的AI中文学习网站</span>
          </h1>
          <p className="hero-description">
            在这里，将用最简明了的教程帮你入门AI相关知识，学习基础相关，你会自己开花
          </p>
          <button className="primary-button">学前必读</button>
        </div>
        <div className="hero-avatars">
          {/* 这里放头像组 */}
          <div className="avatar-group">
            <span className="avatar-text">
              小学文案介绍小学文案介绍小学文案介绍小学文案介绍
              小学文案介绍小学文案介绍小学文案介绍小学文案介绍小学文案介绍
              小学文案介绍小学文案介绍小学文案
            </span>
          </div>
          <button className="secondary-button">敬期待</button>
        </div>
      </section>

      {/* 工具卡片区域 */}
      <section className="tools-section">
        <div className="section-container">
          <h2 className="section-title">我开发的</h2>
          <div className="tools-grid">
            {/* Chatggs 工具卡片 */}
            <Link href="https://chatggs.com" className="tool-card">
              <div className="tool-icon">
                <img src="/images/icons/chatggs.png" alt="Chatggs" />
              </div>
              <div className="tool-content">
                <div className="tool-header">
                  <h3>Chatggs</h3>
                  <span className="tool-tag">Web网站</span>
                </div>
                <p>免费的图片压缩、图片格式转换工具</p>
              </div>
            </Link>

            {/* 图片格式工具卡片 */}
            <Link href="#" className="tool-card">
              <div className="tool-icon">
                <img src="/images/icons/chatggs.png" alt="图片格式" />
              </div>
              <div className="tool-content">
                <div className="tool-header">
                  <h3>图片格式</h3>
                  <span className="tool-tag">iOS APP</span>
                </div>
                <p>免费的图片压缩、图片格式转换工具压缩、图片格式转换工具</p>
              </div>
            </Link>

            {/* 格式转换工具卡片 */}
            <Link href="#" className="tool-card">
              <div className="tool-icon">
                <img src="/images/icons/chatggs.png" alt="图片格式转换工具" />
              </div>
              <div className="tool-content">
                <div className="tool-header">
                  <h3>图片格式转换工具</h3>
                  <span className="tool-tag">Web网站</span>
                </div>
                <p>免费的图片压缩、图片格式转换工具压缩、图片格式转换工具</p>
              </div>
            </Link>

            {/* 图片转换工具卡片 */}
            <Link href="#" className="tool-card">
              <div className="tool-icon">
                <img src="/images/icons/chatggs.png" alt="图片格式转换" />
              </div>
              <div className="tool-content">
                <div className="tool-header">
                  <h3>图片格式转换</h3>
                  <span className="tool-tag">Web网站</span>
                </div>
                <p>免费的图片压缩、图片格式转换工具压缩、图片格式转换工具</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="kapian2">
          <div className="video-section">
            <h2 className="video-section-title">推荐视频</h2>
            <div className="video-grid">
              <Link href="https://www.youtube.com" className="video-card">
                <div className="video-thumbnail">
                  <img src="/images/videos/shipin1.png" alt="视频教程" />
                  <div className="video-source">
                    <img src="/images/social/youtube.svg" alt="YouTube" />
                  </div>
                </div>
                <h3 className="video-title">如何使用 ChatGPT 提高编程效率</h3>
              </Link>
              
              {/* 其他视频卡片 */}
              <Link href="https://www.youtube.com" className="video-card">
                <div className="video-thumbnail">
                  <img src="/images/videos/shipin1.png" alt="视频教程" />
                </div>
                <h3 className="video-title">AI 辅助编程实战教程</h3>
              </Link>

              <Link href="https://www.youtube.com" className="video-card">
                <div className="video-thumbnail">
                  <img src="/images/videos/shipin1.png" alt="视频教程" />
                </div>
                <h3 className="video-title">零基础入门编程指南</h3>
              </Link>

              <Link href="https://www.youtube.com" className="video-card">
                <div className="video-thumbnail">
                  <img src="/images/videos/shipin1.png" alt="视频教程" />
                </div>
                <h3 className="video-title">AI 工具使用技巧分���</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="kapian3">
          <div className="kapian31">
            <Banner />
          </div>
          <div className="kapian32">
            <div className="kapian321"></div>
            <div className="kapian322">
              <p>祝你好运</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
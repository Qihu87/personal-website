export default function Home() {
  return (
    <main>
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
          <button className="secondary-button">敬请期待</button>
        </div>
      </section>

      {/* 工具卡片区域 */}
      <section className="tools-section">
        <div className="section-container">
          <h2 className="section-title">我开发的</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">C</div>
              <div className="tool-content">
                <h3>Chatggs</h3>
                <span className="tag">Web站点</span>
                <p>免费的图片压缩、图片格式转换工具</p>
              </div>
            </div>
            {/* 更多工具卡片 */}
          </div>
        </div>
      </section>
    </main>
  )
} 
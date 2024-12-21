'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './Banner.module.css';

const bannerImages = [
  '/images/banner/banner1.png',
  '/images/banner/banner2.png',
  '/images/banner/banner3.png'
];

export default function Banner() {
  const [position, setPosition] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({
    transform: 'translateX(0%)',
    transition: 'transform 0.5s ease-in-out'
  });
  const [isPaused, setIsPaused] = useState(false);
  
  // 计算当前显示的图片索引
  const currentIndex = Math.abs(position / 100) % 3;

  // 轮播逻辑
  const slide = useCallback(() => {
    const nextPosition = position - 100;
    
    if (Math.abs(nextPosition) % 300 === 0 && nextPosition !== 0) {
      setPosition(nextPosition);
      
      setTimeout(() => {
        setSliderStyle({
          transform: 'translateX(0%)',
          transition: 'none'
        });
        setPosition(0);
        
        requestAnimationFrame(() => {
          setSliderStyle({
            transform: 'translateX(0%)',
            transition: 'transform 0.5s ease-in-out'
          });
        });
      }, 500);
    } else {
      setPosition(nextPosition);
    }
  }, [position]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (!isPaused) {
      timer = setInterval(slide, 3000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPaused, slide]);

  return (
    <div 
      className={styles.bannerContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={styles.bannerSlider} 
        style={{
          ...sliderStyle,
          transform: `translateX(${position}%)`
        }}
      >
        {[...bannerImages, ...bannerImages].map((image, index) => (
          <div key={index} className={styles.bannerSlide}>
            <img src={image} alt={`Banner ${(index % bannerImages.length) + 1}`} />
          </div>
        ))}
      </div>
      <div 
        className={styles.indicators}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={styles.indicator}
            style={{
              opacity: currentIndex === index ? 1 : 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
} 
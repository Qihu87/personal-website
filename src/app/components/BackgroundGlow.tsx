import Image from 'next/image'

export default function BackgroundGlow() {
  return (
    <div className="background-glow">
      <Image 
        src="/images/hero/bg.png"
        alt="Background Glow Effect"
        width={1920}
        height={1028}
        priority
      />
    </div>
  )
} 
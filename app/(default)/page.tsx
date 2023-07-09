export const metadata = {
  title: 'YouMacro Video Downloader',
  description: 'Drag and drop any video from your browser. Download at the highest resolutions. No usage limits. No ads. 100% Free.',
  image: "https://youmacro.com/images/screenshot.jpg"
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
    </>
  )
  // <Testimonials />
  // <Newsletter />
}

export const metadata = {
  title: 'YouMacro Video Downloader',
  description: 'Drag and drop any video from your browser. Download at the highest resolutions. No usage limits. No ads. 100% Free.',
  image: "https://youmacro.com/images/screenshot.jpg",

  openGraph: {
    title: 'YouMacro Video Downloader',
    description: 'Drag and drop any video from your browser. Download at the highest resolutions. No usage limits. No ads. 100% Free.',
    url: 'https://youmacro.com',
    siteName: 'YouMacro Video Downloader',
    images: [
      {
        url: 'https://youmacro.com/images/screenshot.jpg',
        width: 2276,
        height: 1280,
        alt: 'YouMacro Video Downloader Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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

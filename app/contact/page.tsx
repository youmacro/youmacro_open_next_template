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
import Share from '@/components/share'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <br></br>
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                {/*linking without the queries after the url is slow
                 <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" target="_blank" href="https://www.microsoft.com/store/apps/9NLWCWNH9WHL">Download from our App Page</a>
                 */}
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" target="_blank" href="https://apps.microsoft.com/detail/9NLWCWNH9WHL?rtc=1&hl=en-us&gl=US">Please describe the issue in your review</a>
              </div>
              {/*
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
              </div>
              */}
            </div>

                        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Share us with your friends.</p>
            <Share/>
          </div>
    </>
  )
}

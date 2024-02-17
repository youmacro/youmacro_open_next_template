'use client'

import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    TumblrShareButton,
    TumblrIcon,
    TelegramShareButton,
    TelegramIcon,
} from 'next-share';

export default function Share() {
    var url = 'https://youmacro.com'
    var quote = 'YouMacro Video Downloader can download videos from your browser by simply dragging and dropping videos.'
    var hashtag = '#youmacro'
    return (
        <section>
            <div>
                <FacebookShareButton
                    url={url} 
                    quote={quote}
                    hashtag={hashtag}
                >
                    <FacebookIcon size={64} round />
                </FacebookShareButton>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <WhatsappShareButton
                    url={url} 
                    title={quote}     
                    separator=":: "
                >
                    <WhatsappIcon size={64} round />
                </WhatsappShareButton>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <TwitterShareButton
                    url={url}
                    title={quote}
                >
                    <TwitterIcon size={64} round />
                </TwitterShareButton>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <LinkedinShareButton
                    url={url} >
                    <LinkedinIcon size={64} round />
                </LinkedinShareButton>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <PinterestShareButton
                    url={url} 
                    media={quote}
                >
                    <PinterestIcon size={64} round />
                </PinterestShareButton>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <RedditShareButton
                    url={url} 
                    title={quote}
                >
                    <RedditIcon size={64} round />
                </RedditShareButton>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <TumblrShareButton
                    url={url}
                    title={quote}
                >
                    <TumblrIcon size={64} round />
                </TumblrShareButton>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <TelegramShareButton
                    url={url}
                    title={quote}
                >
                    <TelegramIcon size={64} round />
                </TelegramShareButton>
            </div>
        </section>

    )
}

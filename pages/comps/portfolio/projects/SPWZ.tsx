import React from 'react'
import SPWZicon from '../icons/SPWZicon';
import { useRouter } from 'next/router';
import { ImageGallery } from '../ImageGallary';
const SPWZ = () => {
    return (
        <div>
            SPWZ
        </div>
    )
}


const SoundWave = ({ color = "bg-success-100", className = "" }) => {
    return (
        <div className={`flex items-center h-12 gap-1 ${className}`}>
            {[...Array(16)].map((_, i) => (
                <div
                    key={i}
                    className={`w-2 ${color} rounded-full animate-soundwave`}
                    style={{
                        animationDelay: `${i * 0.3}s`
                    }}
                />
            ))}
        </div>
    );
};

export const SPWZCover = () => {
    return (
        <div className='relative w-full h-full items-center justify-center flex p-8'>
            <div className='w-full h-full z-20 relative'>
                <SPWZicon className='w-full h-full z-20 relative' />
            </div>
            <SoundWave className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10' />
        </div>


    )
}

export const SPWZContent = () => {
    const router = useRouter();
    const basePath = router.basePath || '';

    const images = [
        `${basePath}/portfolio/spwz/1.png`,
        `${basePath}/portfolio/spwz/2.png`,
        `${basePath}/portfolio/spwz/3.png`,
        `${basePath}/portfolio/spwz/4.png`,
        `${basePath}/portfolio/spwz/5.png`,
        `${basePath}/portfolio/spwz/6.png`,
        `${basePath}/portfolio/spwz/7.png`,
        `${basePath}/portfolio/spwz/8.png`,
        `${basePath}/portfolio/spwz/9.png`,
    ];
    return (
        <ImageGallery
            images={images}
        />
    );
}

export const SPWZdesc = "SpeechWizard is a web-based audio/video transcription tool supporting English, Mandarin and Cantonese with 92% accuracy. Users can purchase time credits to convert meeting recordings, lecture videos into subtitles (SRT/VTT) or plain text (TXT). Featuring AI-powered noise reduction and voice separation, it effectively filters background noise and isolates speakers, ideal for online educators and content creators.SpeechWizard 语音转写助手是一款基于网页的智能音视频转文字工具，支持英语、普通话和粤语的精准转写（准确率达92%）。用户可通过购买时长卡，将会议记录、课程视频等音视频内容快速转换为字幕文件（SRT/VTT）或纯文本（TXT）。系统采用先进的AI降噪和人声分离技术，能有效过滤背景杂音并分离多人对话，特别适合在线教育、自媒体创作者等用户群体使用。"

export default SPWZ

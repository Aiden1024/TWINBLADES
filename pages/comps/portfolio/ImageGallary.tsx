import React from 'react';
import { Image, Link } from '@heroui/react';

interface ImageGalleryProps {
    images: string[];
    className?: string;
    imageClassName?: string;
}

const ImageGallery = ({
    images = [],
    className = '',
    imageClassName = '',
}: ImageGalleryProps) => {
    // 简单的空状态处理
    if (!images || images.length === 0) {
        return <div className="py-8 text-center text-default-500">No Image</div>;
    }

    return (
        <div className={`flex flex-col gap-6 pb-8 ${className}`}>
            {images.map((src, index) => (
                <Link
                    key={`${index}-${src}`}
                    href={src}
                    isExternal
                    className="group block border border-default min-h-[96px] bg-default-200"
                >
                    <Image
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        className={`w-full h-auto ${imageClassName}`}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ImageGallery;
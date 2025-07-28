import React from 'react';
import { useRouter } from 'next/router';
import { Image, Link } from '@heroui/react';

interface ImageGalleryProps {
    images: string[];
    className?: string;
    imageClassName?: string;
}

export const ImageGallery = ({
    images,
    className = '',
    imageClassName = ''
}: ImageGalleryProps) => {
    const router = useRouter();
    const basePath = router.basePath || '';


    return (
        <div className={`flex flex-col gap-6 pb-8 ${className}`}>
            {images.map((src, index) => (
                <Link
                    key={`${index}-${src}`}
                    href={src}
                    isExternal
                    className="group block border border-default min-h-[96] bg-default-200 "
                >
                    <Image
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        className={`w-full h-auto  ${imageClassName}`}
                    />
                </Link>
            ))}
        </div>
    );
};


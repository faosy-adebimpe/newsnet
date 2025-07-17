import { NewsCardType } from '@/types';
import Image from 'next/image';
import React from 'react';

const NewsCard = ({ title, subTitle, image }: NewsCardType) => {
    return (
        <div className='flex gap-[16px] items-center'>
            <Image
                src={image}
                width={164}
                height={107}
                title={title}
                alt={title}
                className='object-fit object-center rounded-[3px]'
            />
            <div className='flex flex-col gap-[6px] items-start w-full'>
                <h5 className='text-[13px] font-medium text-theme-color lh-ls'>
                    {title}
                </h5>
                <h2 className='text-[18px] font-semibold leading-[25px] tracking-[0%]'>
                    {subTitle}
                </h2>
            </div>
        </div>
    );
};

export default NewsCard;

import { LatestStory } from '@/types';
import Image from 'next/image';
import React from 'react';

const NewsCard2 = ({ category, title, banner_image }: LatestStory) => {
    return (
        <div className='min-w-[321px] h-[397px] relative rounded-[12px] overflow-hidden text-white'>
            <Image
                src={banner_image}
                width={321}
                height={397}
                title={title}
                alt={title}
                className='rounded-[12px] w-full h-full object-cover object-center'
            />
            <div className='absolute left-[17px] top-[18px] text-[13px] leading-[35px] tracking-[2%] px-[13px] py-[4px] rounded-[22px] bg-[#999999]/10 backdrop-blur-[5px] border border-[#999999]'>
                {category.category_name}
            </div>
            <h2 className='absolute left-[17px] bottom-[29px] w-[285px] text-[20px] font-semibold leading-[28px] tracking-[0%]'>
                {title}
            </h2>
        </div>
    );
};

export default NewsCard2;

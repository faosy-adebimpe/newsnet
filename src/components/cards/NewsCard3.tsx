import { NewsCard3Type } from '@/types';
import Image from 'next/image';
import ListCircle from '../lists/ListCircle';
import ArrrowRightIcon from '../icons/ArrrowRightIcon';
import ListSquare from '../lists/ListSquare';
import EclipseCrownIcon from '../icons/EclipseCrownIcon';

const NewsCard3 = ({
    category,
    title,
    description,
    image,
    author,
    timeStamp,
    others,
    badge,
    divider,
}: NewsCard3Type) => {
    return (
        <div>
            {category && (
                <div className='mb-[18px] flex gap-[14px] items-center'>
                    <h2 className='px-[11px] py-[2px] text-[22px] font-bold lh-ls  border-l-[5px] border-[#813D97]'>{category}</h2>
                    <div className=''>
                        <ArrrowRightIcon width={8} height={14} />
                    </div>
                </div>
            )}
            <div className=''>
                <div className='relative rounded-[3px]'>
                    {badge && (
                        <div className=''>
                            <div className=''>
                                <EclipseCrownIcon width={25} height={25} />
                            </div>
                            <p className='text-[15px] font-semibold text-white leading-[35px] tracking-[2%] py-[5px] pr-[11px] pl-[40px]'></p>
                        </div>
                    )}
                    <Image
                        src={image}
                        width={401}
                        height={243}
                        title={title}
                        alt={title}
                        className='rouned-[3px]'
                    />
                </div>
                <h2 className='mt-[17px] text-[22px] font-semibold leading-[30px] tracking-[0%]'>
                    {title}
                </h2>
                <h3 className='text-[16px] font-normal leading-[25px] tracking-[0%] mb-[12px] mt-[5px]'>
                    {description}
                </h3>
                <div className='flex items-center gap-[19px]'>
                    <ListCircle text={author} />
                    {timeStamp && <ListCircle text={timeStamp} />}
                </div>
            </div>

            <div className='flex flex-col gap-[18px] mt-[34px]'>
                {others.map((element, index) => (
                    <ListSquare key={index} text={element} />
                ))}
            </div>

            {divider && <hr className='mt-[36px] text-[#C8C8C8] w-full mb-[41px]' />}
        </div>
    );
};

export default NewsCard3;

'use client';

// installed packages
import Image from 'next/image';

// imported modules
import Hero from '@/components/heros/Hero';
import topStoriesImage from '@/assets/images/top-stories-image.png';
import { categoricalNews, newsToday } from '@/data/mock-news-data';
import NewsCard from '@/components/cards/NewsCard';
import NewsCard2 from '@/components/cards/NewsCard2';
import HomeContact from '@/components/forms/HomeContact';
import ListSquareWithTimestamp from '@/components/lists/ListSquareWithTimestamp';
import ImageBadge from '@/components/cards/ImageBadge';

// images
import eversendImage from '@/assets/images/eversend-image.png';
import cmarketsImage from '@/assets/images/cmarkets-image.png';
import NewsCard3 from '@/components/cards/NewsCard3';
import { useQuery } from '@tanstack/react-query';
import {  fetchLatestStories, fetchMissedStories } from '@/utils/api';
import mtn from '@/assets/images/mtn.png'
import domino from '@/assets/images/domino.png';
import betano from '@/assets/images/betano.png'
import video from '@/assets/images/video.png'
import travel from '@/assets/images/travel.png';
import picture from '@/assets/images/picture.png';
import couple from '@/assets/images/couple.png';

export default function Home() {
    const { data: latestStories = [] } = useQuery({
        queryKey: ['latest-stories'],
        queryFn: fetchLatestStories,
    });

    const { data: missedStories } = useQuery({
        queryKey: ['missed-stories'],
        queryFn: fetchMissedStories,
    });

    // const { data: topStrories } = useQuery({
    //     queryKey: ['top-stories'],
    //     queryFn: fetchTopStories,
    // });

    return (
        <main className='container max-w-[401px]' id='main'>
            {/* hero components */}
            <Hero />

            {/* top stories */}
            <div className='text-page-black flex flex-col gap-[18px] items-start mt-[50px]'>
                <h2 className='text-[22px] font-bold lh-ls'>TOP STORIES</h2>
                <div className=''>
                    <Image
                        src={topStoriesImage}
                        width={401}
                        height={243}
                        title='top stories image'
                        alt='top stories image'
                    />
                </div>
                <div className=''>
                    <h5 className='text-[13px] font-medium text-theme-color lh-ls'>
                        LATEST TODAY
                    </h5>
                    <h2 className='text-[22px] font-semibold leading-[30px] tracking-[0%] mt-[6px]'>
                        Putin promises grains, debt write-off as Russia seeks
                        Africa allies
                    </h2>
                </div>
            </div>

            {/* today news highlight */}
            <div className='mt-[38px] news-of-today flex flex-col gap-[18px]'>
                {newsToday.map((news, index) => (
                    <NewsCard key={index} {...news} />
                ))}
            </div>

            {/* divider */}
            <hr className='text-[#C8C8C8] mt-[36px] mb-[43px]' />

            {/* latest news */}

            <div className='w-full'>
                <div className='flex justify-between items-center mb-[18px]'>
                    <h2 className='text-[18px] font-bold text-page-black border-l-[5px] border-[#813D97] px-[8px]'>
                        LATEST NEWS
                    </h2>

                    <div className='flex gap-[5px] items-center'>
                        <div className='indicator active'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                        <div className='indicator'></div>
                    </div>
                </div>

                {/* <div className=' gap-[19px] flex flex-row flex-nowrap overflow-auto'> */}
                <div className='flex flex-row flex-nowrap gap-[19px] overflow-x-auto'>
                    {Array.isArray(latestStories) && latestStories.map((story) => (
                        <NewsCard2 key={story.id} {...story} />
                    ))}
                </div>
            </div>

            {/* ads images */}
            <div className='mt-[47px] flex flex-col gap-[12px]'>
                <Image
                    src={eversendImage}
                    width={391}
                    height={100}
                    title='eversend image'
                    alt='eversend image'
                />
                <Image
                    src={cmarketsImage}
                    width={391}
                    height={100}
                    title='cmarkets image'
                    alt='cmarkets image'
                />
            </div>

            {/* editor's pick */}
            <div>
                {categoricalNews.map((news, index) => (
                    <NewsCard3 key={index} {...news} />
                ))}
            </div>

            {/* advertisement */}
            <div className="flex flex-col items-center">
                <div className="w-full">
                    <h3 className="text-[11px] font-bold text-right text-[#5A5A5A] mb-[6px]">ADVERTISEMENT</h3>
                </div>
                <Image src={mtn} width={344} height={444} title='mtn image' alt='mtn image' className='mb-[31px]' />

                <Image src={domino} width={344} height={330} title='domino image' alt='domino image' className='mb-[31px]' />
            </div>

            {/* new in videos */}
            <div className="mt-[61px]">
                <ImageBadge category='NEWS IN VIDEOS' image={video} badge='World News' title='US storm: Massive blizzard hits California and Nevada' />

                <div className="flex gap-[18px] flex-col">
                    {Array(3).fill({title: 'World News', subTitle: 'Putin promises grains, debt write-off as Russia seeks Africa allies', image: travel}).map((news, index) => <NewsCard key={index} {...news} />)}
                </div>

                {/* <hr className='w-[401px] h-[1px] text-[#C8C8C8] my-[39px]' /> */}
                <hr className='h-[1px] text-[#C8C8C8] my-[39px]' />
            </div>

            {/* new in pictures */}
            <div className="mt-[61px]">
                <ImageBadge category='NEWS IN PICTURES' image={picture} badge='World News' title='Best red carpet looks at the 2024 Oscars' />

                <div className="flex gap-[18px] flex-col">
                    {Array(3).fill({title: 'World News', subTitle: 'Putin promises grains, debt write-off as Russia seeks Africa allies', image: couple}).map((news, index) => <NewsCard key={index} {...news} />)}
                </div>

                <hr className='h-[1px] text-[#C8C8C8] my-[39px]' />
            </div>

            {/* missed stories */}
            <div>
                <h2 className="text-[22px] font-bold leading-[100%] tracking-normal mt-[40px] mb-[22px]">STORIES YOU MAY HAVE MISSED</h2>
                <div className="flex flex-col gap-[18px]">
                    {missedStories?.map(story => <ListSquareWithTimestamp key={story.id} {...story} />)}
                </div>
                <div className="w-full flex justify-center mt-[32px] mb-[50px]">
                    <button className="w-[226px] h-[43px] bg-white border-[1.5px] border-[#282828] rounded-[22px] mx-auto cursor-pointer">
                        <span className="text-[15px] font-medium leading-[20px] tracking-normal text-center text-[#282828]">Show more</span>
                    </button>
                </div>
            </div>


            {/* home contact */}
            <HomeContact />

            {/* ads */}
            <Image src={betano} width={377} height={96} title='betano image' alt='betano image' className='mt-[51px] mb-[62px]' />

        </main>
    );
}

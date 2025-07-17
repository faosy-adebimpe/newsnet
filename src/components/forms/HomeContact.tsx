"use state";

import openInbox from '@/assets/images/open-inbox.png'
import Image from 'next/image';

const HomeContact = () => {
  return (
    <div>
        <div className="flex gap-[13px] items-center">
            <Image src={openInbox} width={50} height={50} title='open inbox' alt='open inbox' />
            <p className="text-[16px] font-normal leading-[25px] tracking-[0%]">Get the latest news and stories from around Africa directly into your inbox daily.</p>
        </div>

        <div className="mt-[21px]">
            {/* <input type="text" className='w-[401px] h-[48px] bg-[#DEDEDE] text-[#5A5A5A] px-[16px] py-[7px] rounded-[5px] placeholder:text-[#5A5A5A] placeholder:leading-[28px] placeholder:tracking-[0%]' placeholder='Enter your email address' /> */}
            <input type="text" className='w-full h-[48px] bg-[#DEDEDE] text-[#5A5A5A] px-[16px] py-[7px] rounded-[5px] placeholder:text-[#5A5A5A] placeholder:leading-[28px] placeholder:tracking-[0%]' placeholder='Enter your email address' />
            {/* <button className="mt-[8px] w-[401px] h-[48px] rounded-[5px] bg-[#D32C89] cursor-pointer"> */}
            <button className="mt-[8px] w-full h-[48px] rounded-[5px] bg-[#D32C89] cursor-pointer">
                <span className="text-[16px] font-medium leading-[28px] tracking-[0%] text-center text-white">Get Me In</span>
            </button>
        </div>
    </div>
  )
}

export default HomeContact
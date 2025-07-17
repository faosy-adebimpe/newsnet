import React from 'react';

const ListSquare = ({ text }: { text: string }) => {
    return (
        // <div className='flex gap-[12px] items-center'>
        <div className='flex gap-[12px] items-start'>
            <div className='mt-2'>
                <div className='size-[15px] rounded-[2px] bg-page-red'></div>
            </div>
            <p className='text-[20px] font-normal leading-[28px] tracking-[0%] text-page-black -m-t-[28px]'>
                {text}
            </p>
        </div>
    );
};

export default ListSquare;

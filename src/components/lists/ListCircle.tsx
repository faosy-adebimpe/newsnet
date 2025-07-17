import React from 'react';

const ListCircle = ({ text }: { text: string }) => {
    return (
        <div className='flex items-center gap-[5px]'>
            <div className='size-[10px] rounded-full bg-page-red'></div>
            <p className='text-[13px] font-bold lh-ls'>{text}</p>
        </div>
    );
};

export default ListCircle;

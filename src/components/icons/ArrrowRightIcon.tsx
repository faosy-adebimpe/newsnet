import { Svg } from '@/types';
import React from 'react';

const ArrrowRightIcon = ({ width, height, color }: Svg) => {
    return (
        <svg
            // width='8'
            // height='14'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 8 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1 1L7 7L1 13'
                stroke={color || '#282828'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default ArrrowRightIcon;

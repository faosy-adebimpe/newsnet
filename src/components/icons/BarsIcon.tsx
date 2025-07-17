import { Svg } from '@/types';

const BarsIcon = ({ width, height, color }: Svg) => {
    return (
        <svg
            // width='36'
            // height='32'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 36 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M28 15H10'
                stroke={color || 'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M20 9H10'
                stroke={color || 'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M23 21H10'
                stroke={color || 'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default BarsIcon;

import { Svg } from '@/types';

const SearchIcon = ({ width, height, color }: Svg) => {
    return (
        <svg
            // width='19'
            // height='18'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 19 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8.15788 15.3158C12.1111 15.3158 15.3158 12.1111 15.3158 8.15788C15.3158 4.20469 12.1111 1 8.15788 1C4.20469 1 1 4.20469 1 8.15788C1 12.1111 4.20469 15.3158 8.15788 15.3158Z'
                stroke={color || 'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M18 17L14 13'
                stroke={color || 'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default SearchIcon;

import { Svg } from '@/types';

const ChevronIcon = ({ width, height, color }: Svg) => {
    return (
        <svg
            // width='10'
            // height='7'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 10 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M4.20759 5.97063C4.6079 6.49064 5.3921 6.49064 5.79241 5.97063L8.95678 1.85999C9.46297 1.20243 8.99421 0.25 8.16437 0.25L1.83563 0.25C1.00579 0.25 0.537025 1.20243 1.04322 1.85999L4.20759 5.97063Z'
                fill={color || '#D5D5D5'}
            />
        </svg>
    );
};

export default ChevronIcon;

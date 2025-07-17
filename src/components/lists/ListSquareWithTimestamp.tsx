import dayjs from 'dayjs';
import { MissedStory } from '@/types'

const ListSquareWithTimestamp = ({title, category: {category_name}, updated_at}: MissedStory) => {
  return (
        // <div className='flex gap-[12px] items-center'>
        <div className='flex gap-[12px] items-start'>
            <div className='mt-2'>
                <div className='size-[15px] rounded-[2px] bg-page-black'></div>
            </div>
            <div className='flex gap-[9px] flex-col'>
                <h2 className="text-[20px] font-normal leading-[28px] trackging-[0%]">{title}</h2>
                <div className="flex gap-[15px] items-center">
                    {/* time */}
                    <div className="flex gap-[3px] items-center">
                        <div className="size-[10px] rounded-full bg-page-red"></div>
                        <p className="text-[13px] font-bold leading-[100%] tracking-normal">{dayjs(updated_at).format('MMM D, YYYY')}</p>
                    </div>
                    {/* category */}
                    <div className="flex gap-[3px] items-center">
                        <div className="size-[10px] rounded-full bg-page-red"></div>
                        <p className="text-[13px] font-bold leading-[100%] tracking-normal">{category_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListSquareWithTimestamp
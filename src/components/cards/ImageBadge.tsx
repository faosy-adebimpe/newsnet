import Image, { StaticImageData } from "next/image";
import ChevronRight from "../icons/ChevronRight";

const ImageBadge = ({
  category,
  image,
  badge,
  title,
}: {
  category: string;
  image: StaticImageData;
  badge: string;
  title: string;
}) => {
  return <div className="mb-[38px] text-[#282828] flex gap-[17px] flex-col">
    <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-bold leading-[100%] tracking-normal">{category}</h2>

        <div className="flex gap-[14px] items-center">
            <p className="text-[16px] font-medium leading-[100%] tracking-normal">View more</p>
            <div className="mt-0.5">
                <ChevronRight width={6} height={10} />
            </div>
        </div>
    </div>

    <div className="relative rounded-[3px] w-full overflow-hidden">
        <Image src={image} width={401} height={243} title={title} alt={title} className="rounded-[3px]" />
        <div className="absolute left-[15.93px] top-[15.08px] flex justify-center items-center border-[1px] border-[#999999] bg-[#999999]/10 rounded-[22px] min-w-[113.37px] min-h-[29.33px] backdrop-blur-[5px]">
            <p className="text-[13px] font-medium leading-[35px] tracking-[2%] text-white">{badge}</p>
        </div>
    </div>

    <h2 className="text-[22px] font-semibold leading-[30px] tracking-normal">{title}</h2>
  </div>;
};

export default ImageBadge;

import newsnet from '@/assets/images/newsnet.png';
import Image from 'next/image';
import BarsIcon from '../icons/BarsIcon';
import SearchIcon from '../icons/SearchIcon';
import UserCircleIcon from '../icons/UserCircleIcon';
import ChevronIcon from '../icons/ChevronIcon';
const Navbar = () => {
    return (
        <nav className='w-full h-[72px] bg-nav-bg-sm text-white' id='nav'>
            <div className='container flex items-center gap-[20px]'>
                <div className=''>
                    <BarsIcon width={36} height={32} />
                </div>
                <div className=''>
                    <SearchIcon width={17} height={16} />
                </div>
                <div className=''>
                    <Image
                        src={newsnet}
                        width={70}
                        height={44}
                        alt='newsnet logo'
                        title='newsnet logo'
                    />
                </div>
                <div className='flex items-center gap-[4px] ml-auto'>
                    <UserCircleIcon width={29.06} height={29.06} />
                    <ChevronIcon width={12} height={9} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import heroImage from '@/assets/images/hero-image.png';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='' id='hero'>
            <div className='container w-full h-full flex justify-center items-center'>
                <Image
                    src={heroImage}
                    width={367}
                    height={62}
                    title='hero image'
                    alt='hero image'
                />
            </div>
        </section>
    );
};

export default Hero;

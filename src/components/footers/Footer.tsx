import Image from 'next/image'

// images
import newsnet from '@/assets/images/newsnet-2.png'
import instagram from '@/assets/images/instagram.png'
import facebook from '@/assets/images/facebook.png'
import x from '@/assets/images/x.png'
import periscope from '@/assets/images/periscope.png'
import linkedin from '@/assets/images/linkedin.png'



const Footer = () => {
  return (
    <footer className="bg-footer-bg-sm text-white" id='footer'>
        <div className="container max-w-[430px]">
            <div className="flex justify-between items-center">
                <Image src={newsnet} width={93} height={59} title='newsnet logo' alt='newsnet logo' />

                <div className="flex gap-[16px] items-center">
                    <Image src={instagram} width={27} height={27} title='instagram logo' alt='instagram logo' />
                    <Image src={facebook} width={27} height={27} title='facebook logo' alt='facebook logo' />
                    <Image src={x} width={30} height={30} title='x logo' alt='x logo' />
                    <Image src={periscope} width={27} height={27} title='periscope logo' alt='periscope logo' />
                    <Image src={linkedin} width={27} height={27} title='linkedin logo' alt='linkedin logo' />
                </div>
            </div>

            <input type="text" className="w-[405px] h-[48px] rounded-[5px] bg-white text-black border-none outline-none px-[16px] py-[7px] placeholder:text-[16px] placeholder:leading-[28px] placeholder:tracking-[0%] placeholder:font-regular placeholder-[#5A5A5A] mt-[25px] mb-[40px]" placeholder='Search AGC Newsnet' />

            <div className='grid grid-cols-3 gap-[60px]'>
              <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Africa</a>
                <a href="#">Politics</a>
              </div>
              <div className="footer-links">
                <a href="#">Business</a>
                <a href="#">Sport</a>
                <a href="#">Health</a>
              </div>
              <div className="footer-links">
                <a href="#">Photos</a>
                <a href="#">AGC Archive</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="footer-links">
                <a href="#">Tech</a>
                <a href="#">Opinion</a>
                <a href="#">Videos</a>
              </div>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Advert Rate</a>
              </div>
            </div>
            <div className="mt-[86px] mb-[54px]">
              <p className="text-[15px] font-normal lh-ls text-white text-center">© 2024 AGC Newsnet. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
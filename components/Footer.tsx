import ig from '../assets/ig2-logo.svg';
import li from '../assets/linkedin-logo.svg';
import pi from '../assets/pi2-logo.svg';
import border from '../assets/footer-latest.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="overflow-x-hidden relative z-0 bottom-0 w-full h-auto pt-28 bg-[#131313]">
        <div className="flex flex-col w-full md:flex-row justify-between md:mx-4 lg:mx-[72px] px-10">
            <div className="flex flex-col w-9/10 md:w-1/2">
                <h1 className="font-cormorant opacity-80 text-[#EDE6D6] text-xl md:text-2xl">Join our Community</h1>
                <p className="font-avenir text-[#EDE6D6] opacity-80 mt-4 md:mt-10">Subscribe to our mailing list</p>
                <input type="text" placeholder="Email address" className="bg-transparent opacity-80 placeholder:text-[#EDE6D6]/60 text-[#EDE6D6] font-avenir placeholder:font-light border-b border-[#EDE6D6] py-2 mt-4 md:mt-10 w-full md:w-[75%]"/>
                <button className="flex w-1/2 md:w-[37.5%] px-4 py-2 text-[10px] md:text-sm opacity-80 bg-white/10 border-[0.5px] border-[#EDE6D6] text-[#EDE6D6] justify-center rounded-md font-medium font-avenir mt-6 hover:bg-[#EDE6D6] hover:text-[#131313] transition tracking-widest ease-in-out">SIGN UP</button>
            </div>
            <div className="flex flex-col w-9/10 md:w-1/3 mt-12 sm:mt-0">
                <h1 className="font-cormorant opacity-80 text-[#EDE6D6] text-xl md:text-2xl">Quick Links</h1>
                <div className="mt-4 md:mt-10">
                    <p className="font-avenir text-[#EDE6D6] opacity-80 mb-2 md:mb-6 hover:underline">Crafting Wholeness</p>
                    <p className="font-avenir text-[#EDE6D6] opacity-80 mb-2 md:mb-6 hover:underline">Vedic Furniture</p>
                    <p className="font-avenir mb-2 md:mb-6 text-[#EDE6D6] opacity-80 hover:underline cursor-pointer">Lookbook</p>
                    <a href="https://medium.com/@iteesha18" target='_blank'>
                        <p className="font-avenir mb-2 md:mb-6 text-[#EDE6D6] opacity-80 hover:underline">Blog</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col w-9/10 md:w-1/3 mt-12 sm:mt-0">
                <h1 className="font-cormorant opacity-80 text-[#EDE6D6] text-xl md:text-2xl">Let's Connect</h1>
                <p className="mt-4 md:mt-10 text-[#ECE6D7] opacity-80 font-avenir">connect@sarvatva.co.in</p>
                <p className="mt-2 md:mt-6 text-[#ECE6D7] opacity-80 font-avenir tracking-wider">+91 - 8106865897</p>
                <h1 className="font-cormorant opacity-80 text-[#EDE6D6] text-xl md:text-2xl mt-10">Follow Us</h1>
                <div className="grid grid-cols-3 w-[60%] mt-4 md:mt-10 gap-x-4">
                    <a href="https://pin.it/4FwD7UyAQ" className='cursor-auto'>
                        <Image src={pi} alt="Pinterest" className='h-[28px] lg:h-[36px] opacity-80 hover:opacity-60 transition-opacity cursor-pointer'/>
                    </a>
                    <a href="https://www.linkedin.com/company/sarvatva-craftingwholeness/?viewAsMember=true" className='cursor-auto'>
                        <Image src={li} alt="Linkedin" className='h-[28px] lg:h-[36px] opacity-80 hover:opacity-60 transition-opacity cursor-pointer'/>
                    </a>
                    <a href="https://www.instagram.com/_sarvatva_?igsh=czE2b29nNnE4YnFm&utm_source=qr" className='cursor-auto'>
                        <Image src={ig} alt="Instagram" className='h-[28px] lg:h-[36px] opacity-80 hover:opacity-60 transition-opacity cursor-pointer'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='mt-28 flex w-full pb-8'>
            <div className='w-full h-[100px] opacity-30'>
                <Image
                    src={border}
                    alt="Border"
                    objectFit="cover" // Or 'contain' depending on the effect you're after
                    className='bg-repeat-x'
                />
            </div>
        </div>
    </div>
  )
}

export default Footer
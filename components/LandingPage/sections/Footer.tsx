import LogoImage from '../../../public/assets/Landing/footer/CRE8ORS LOGO.png'
import Image from 'next/image'

interface ItemData {
    list: string[]
}

const Footer = () => {
    const Items: ItemData[] = [
        {
            list: [
                "Home",
                "FAQ"
            ]
        },
        {
            list: [
                "Discord",
                "Twitter"
            ]
        },
        {
            list: [
                "Terms of Service",
                "Privacy Policy"
            ]
        },
    ]

    return (
        <div className='lg:m-12 grid grid-cols-1 md:grid-cols-5'>
            <div>
                <Image src={LogoImage.src} width={103} height={18} />
            </div>
            {Items.map((item: ItemData, index: number) => (
                <div key={index} className='font-quicksand flex justify-center'>
                    <div className='flex flex-col cursor-[pointer]'>
                    {item.list.map((link: string, index: number) => (
                        <div key={index}>
                        {link}
                        </div>
                    ))}
                    </div>
                </div>
            ))}
            <div className=''>
                <div className='font-quicksand'>Join our newsletter</div>
                <div className='relative flex items-center pt-[0.5rem]'>
                    <input className='border-[1px] border-[black] rounded-[3rem] font-quicksand px-3 py-1' placeholder='Email Address'/>
                    <button className='bg-[black] px-2 py-1 rounded-[2rem] text-[white] text-[0.5rem] absolute right-[5rem]'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
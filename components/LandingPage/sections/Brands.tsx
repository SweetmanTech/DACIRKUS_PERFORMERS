import Image, { StaticImageData } from 'next/image'
import * as React from 'react'

import ExtendImage from '../../../assets/Landing/brands/extend.png'
import LampImage from '../../../assets/Landing/brands/lamp.png'
import ChainImage from '../../../assets/Landing/brands/chain.png'
import NetworkingImage from '../../../assets/Landing/brands/networking.png'

interface ItemData {
    image: StaticImageData,
    width: number,
    height: number,
    title: React.ReactNode,
    text: React.ReactNode
}

const Brands = () => {
    const Items = [
        {
            image: ExtendImage,
            width: 151,
            height: 151,
            title: <>Extended <br/>Trait Banners</>,
            text: <>All Cre8ors come with on extended banner that fits within any social header.</>
        },
        {
            image: ChainImage,
            width: 160,
            height: 160,
            title: <>On-Chain <br/> Co-Creation</>,
            text: <>Collaborate, license, and get paid with our CR8 protocol and dApps</>
        },
        {
            image: ChainImage,
            width: 158,
            height: 158,
            title: <>Stake in the <br/> Warehouse</>,
            text: <>Soft-staking to unlock AI training, collect badges, and earn rewards.</>
        },
        {
            image: NetworkingImage,
            width: 157,
            height: 157,
            title: <>Next-Level <br/> Networking</>,
            text: <>Connect with the community from the comfort of your phone.</>
        }
    ]

    const Title = ({
        children
    }:{
        children: React.ReactNode
    }) => {
        return (
            <div className='font-eigerdals lg:text-[1.25rem] md:text-[1.25rem] text-center'>
                {children}
            </div>
        )
    }

    const Desc = ({
        children
    }: {
        children: React.ReactNode
    }) => {
        return (
            <div className='font-quicksand lg:text-[1rem] md:text-[1rem] text-center w-[200px]'>
                {children}
            </div>
        )
    }

    return (
        <div className='lg:m-12 grid grid-cols-2 md:grid-cols-4 pt-[10rem]'>
            {Items.map((item: ItemData, index: number) => (
                <div key={index} className='flex justify-center flex-col items-center'>
                    <Image src={item.image.src} width={item.width} height={item.height} />
                    <Title> { item.title }</Title>
                    <Desc> {item.text} </Desc>
                </div>
            ))}
        </div>
    )
}

export default Brands
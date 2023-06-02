import SectionTitle from '../SectionTitle';
import SectionContent from '../SectionContent';

import InviateImage from '../../../public/assets/Landing/invite.png'
import Image from 'next/image'

const InviteForCreator = () => {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem]'>
            <div className='flex justify-center'>
                <Image src={InviateImage.src} width={511} height={586}/>
            </div>
            <div className='flex flex-col justify-center'>
                <div>
                    <SectionTitle text='An Invite-Only Community for Web3 Creators' />
                    <SectionContent>
                        Providing the resources and tools to help unlock creative potential and financial freedom. We’re building the best creator community on the internet, together.
                    </SectionContent>
                </div>
            </div>
        </div>
    )
}

export default InviteForCreator;
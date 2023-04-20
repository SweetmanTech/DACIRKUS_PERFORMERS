import Image from "next/image"

const Content = () => (
  <div className="relative flex flex-col items-center justify-center mt-20 mb-24 lg:md:mt-72">
    <Image src="/main_clouds.png" alt="clouds" layout="fill" objectFit="cover" />
    <div className="abosulute z-20 lg:w-[58%] w-3/4 space-y-8 items-center space-between ">
      <div className="py-12 space-y-4 lg:pb-72 md:py-24">
        <p className="justify-around text-2xl text-center lg:m-12 lg:text-8xl md:text-6xl font-eigerdals">
          A community built for Web3 creators.
        </p>
        <p className="justify-center w-full text-center text-md lg:text-3xl md:text-2xl font-objektivmk1">
          We are a curated group of inovators, misfits, inventors, and connectors - building
          something new today to make the world way better than yesterday.
        </p>
      </div>
      <div className="pb-12 space-y-4 lg:pb-72 md:pb-24">
        <p className="justify-around text-2xl text-center lg:m-12 lg:text-8xl md:text-6xl font-eigerdals">
          This isn&apos;t your typical NFT project.
        </p>
        <p className="justify-center w-full text-center text-md lg:text-3xl md:text-2xl font-objektivmk1">
          We are not an alpha group, DAO, or PFP...yet. Before all that we&apos;re working together
          to solve the real world problems that Web3 creators face every day.
        </p>
      </div>
      <div className="mb-48 space-y-4 md:pb-24">
        <p className="justify-around text-2xl text-center lg:m-12 lg:text-8xl md:text-6xl font-eigerdals">
          Unlocking everyone&apos;s inner creativity.
        </p>
        <p className="justify-center w-full text-center text-md lg:text-3xl md:text-2xl font-objektivmk1">
          Imagine a world full of co-creation and collaboration, all powered by protocols.
          We&apos;re shipping utility to pass down to your grandkids for generations to come.
        </p>
      </div>
    </div>
  </div>
)

export default Content

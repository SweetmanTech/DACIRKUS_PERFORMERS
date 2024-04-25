import useZoraMintByPrivy from "@/hooks/useZoraMintByPrivy"
import usePreparePrivyWallet from "@/hooks/usePrepareWallet"
import { useState } from "react"
import addMetadata from "@/lib/firebase/addMetadata"
import { STATUS } from "../../../../lib/bookStatus"
import { STEPS } from "../../../../lib/createStep"
import { useAnimatedBook } from "../../../../providers/AnimatedBookProvider"
import { useCharacter } from "../../../../providers/CharacterProvider"
import { useCreate } from "../../../../providers/CreateProvider"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"

const DaPerformerCharacterCustomizer = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep, setMintedTokenId } = useCreate()
  const { randomAttr, setDummyRandom } = useCharacter()
  const { mintWithRewards } = useZoraMintByPrivy()
  const [loading, setLoading] = useState(false)
  const { prepare } = usePreparePrivyWallet()

  const selectCustom = () => {
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SELECT_CHARACTER)
  }

  const mintMultiple = async (quantity) => {
    const randomAttributes = randomAttr(quantity)
    setDummyRandom(randomAttributes)
    const firstMintedTokenId = (await mintWithRewards(quantity)) as any
    const metadataPromise = randomAttributes.map(async (attribute, i) => {
      await addMetadata(firstMintedTokenId + i + 1, attribute)
    })
    await Promise.all(metadataPromise)
    const { error } = firstMintedTokenId
    if (error) {
      return
    }
    setMintedTokenId(firstMintedTokenId + 1)
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS_MULTIPLE)
  }

  const handleMint = async (quantity) => {
    setLoading(true)
    if (!prepare()) {
      setLoading(false)
      return
    }
    await mintMultiple(quantity)
    setLoading(false)
  }

  return (
    <div
      className="
    md:text-[12px] lg:text-[16px] xl:text-[20px] 
    font-slimfit text-white"
    >
      <div className="flex justify-center md:pt-5 lg:pt-6 xl:pt-9 sm:pt-24">
        <Button className="relative cursor-pointer" onClick={selectCustom}>
          <Media
            type="image"
            link="/images/Create/DaPerformersCharactererformers.png"
            alt="DaPerformersCharactererformers-main"
            blurLink="/images/Create/DaPerformersCharactererformers.png"
            containerClasses="sm:h-[190px] md:h-[220px] lg:h-[300px] xl:h-[360px] aspect-[1/1]"
          />
          <div className="absolute xl:top-4 xl:left-6 m-auto sm:top-2 sm:left-4">
            <Media
              type="image"
              link="/images/Create/da-performer-character-customizer.png"
              alt="da-performer-character-customizer"
              blurLink="/images/Create/da-performer-character-customizer.png"
              containerClasses="sm:h-[160px] md:h-[190px] lg:h-[260px] xl:h-[310px] aspect-[1/1]"
            />
          </div>
        </Button>
      </div>
      <div className="flex justify-center">
        <Media
          type="image"
          link="/images/Create/random-bulk-min-to-unlock.png"
          alt="random-bulk-min-to-unlock"
          blurLink="/images/Create/random-bulk-min-to-unlock.png"
          containerClasses="sm:w-[200px] md:w-[220px] sm:h-[24px] md:h-[24px] lg:w-[300px] lg:h-[40px] xl:w-[350px] xl:h-[40px] aspect-[1/1]"
        />
      </div>
      <div>
        <div className="pl-20 pr-20 xl:pt-2 lg:pt-0 md:pt-0 md:pl-14 md:pr-14 sm:pl-12 sm:pr-12 flex justify-between">
          <div className="flex flex-col align-middle">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers-Image-1.png"
              alt="DaPerformersCharactererformers-Image-1"
              blurLink="/images/Create/DaPerformersCharactererformers-Image-1.png"
              containerClasses="sm:h-[26px] md:h-[26px] lg:h-[30px] xl:h-[40px] aspect-[1/1]"
            />

            <Button className="relative mt-2" onClick={() => handleMint(5)} disabled={loading}>
              <Media
                type="image"
                link="/images/Create/DaPerformersCharactererformers.png"
                alt="DaPerformersCharactererformers-1"
                blurLink="/images/Create/DaPerformersCharactererformers.png"
                containerClasses="sm:h-[36px] md:h-[46px] lg:h-[60px] xl:h-[90px] aspect-[1/1]"
              />
              <div className="absolute m-auto">
                <Media
                  type="image"
                  link="/images/Create/5.png"
                  alt="5"
                  blurLink="/images/Create/5.png"
                  containerClasses="sm:h-[20px] md:h-[25px] lg:h-[35px] xl:h-[50px] aspect-[1/1]"
                />
              </div>
            </Button>
          </div>
          <div className="flex flex-col align-middle">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers-Image-2.png"
              alt="DaPerformersCharactererformers-Image-2"
              blurLink="/images/Create/DaPerformersCharactererformers-Image-2.png"
              containerClasses="sm:h-[26px] md:h-[26px] lg:h-[30px] xl:h-[40px] aspect-[1/1]"
            />

            <Button className="relative mt-2" onClick={() => handleMint(10)} disabled={loading}>
              <Media
                type="image"
                link="/images/Create/DaPerformersCharactererformers.png"
                alt="DaPerformersCharactererformers-2"
                blurLink="/images/Create/DaPerformersCharactererformers.png"
                containerClasses="sm:h-[36px] md:h-[46px] lg:h-[60px] xl:h-[90px] aspect-[1/1]"
              />
              <div className="absolute m-auto">
                <Media
                  type="image"
                  link="/images/Create/10.png"
                  alt="10"
                  blurLink="/images/Create/10.png"
                  containerClasses="sm:h-[26px] md:h-[30px] lg:h-[40px] xl:h-[60px] aspect-[1/1]"
                />
              </div>
            </Button>
          </div>
          <div className="flex flex-col align-middle">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers-Image-3.png"
              blurLink="/images/Create/DaPerformersCharactererformers-Image-3.png"
              alt="DaPerformersCharactererformers-Image-3"
              containerClasses="sm:h-[26px] md:h-[26px] lg:h-[30px] xl:h-[40px] aspect-[1/1]"
            />

            <Button className="relative mt-2" onClick={() => handleMint(25)} disabled={loading}>
              <Media
                type="image"
                link="/images/Create/DaPerformersCharactererformers.png"
                blurLink="/images/Create/DaPerformersCharactererformers.png"
                alt="DaPerformersCharactererformers"
                containerClasses="sm:h-[36px] md:h-[46px] lg:h-[60px] xl:h-[90px] aspect-[1/1]"
              />
              <div className="absolute m-auto">
                <Media
                  type="image"
                  alt="25"
                  link="/images/Create/25.png"
                  blurLink="/images/Create/25.png"
                  containerClasses="sm:h-[26px] md:h-[30px] lg:h-[40px] xl:h-[60px] aspect-[1/1]"
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaPerformerCharacterCustomizer

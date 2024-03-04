import { STATUS } from "../../../../lib/bookStatus"
import { STEPS } from "../../../../lib/createStep"
import { useAnimatedBook } from "../../../../providers/AnimatedBookProvider"
import { useCharacter } from "../../../../providers/CharacterProvider"
import { useCreate } from "../../../../providers/CreateProvider"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import WavyText from "../../../WavyText"

const DaPerformerCharacterCustomizer = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep } = useCreate()
  const { randomeAttr } = useCharacter()

  const selectCustom = () => {
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SELECT_CHARACTER)
  }

  const selectRandom = () => {
    randomeAttr()
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }
  return (
    <div
      className="
    md:text-[12px] lg:text-[16px] xl:text-[20px] 
    font-slimfit text-white"
    >
      <div className="flex justify-center pt-8">
        <div className="relative cursor-pointer" onClick={selectCustom}>
          <Media
            type="image"
            link="/images/Create/DaPerformersCharactererformers.png"
            blurLink="/images/Create/DaPerformersCharactererformers.png"
            containerClasses="sm:h-[360px] aspect-[1/1]"
          />
          <div className="absolute top-4 left-6 m-auto">
            <Media
              type="image"
              link="/images/Create/da-performer-character-customizer.png"
              blurLink="/images/Create/da-performer-character-customizer.png"
              containerClasses=" sm:h-[310px] aspect-[1/1]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Media
          type="image"
          link="/images/Create/random-bulk-min-to-unlock.png"
          blurLink="/images/Create/random-bulk-min-to-unlock.png"
          containerClasses=" sm:w-[350px] sm:h-[40px] aspect-[1/1]"
        />
      </div>
      <div>
        <div className="pl-20 pr-20 pt-2 flex justify-between">
          <div className="flex flex-col align-middle">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers-Image-1.png"
              blurLink="/images/Create/DaPerformersCharactererformers-Image-1.png"
              containerClasses="sm:h-[40px] aspect-[1/1]"
            />

            <Button className="relative mt-2" onClick={selectRandom}>
              <Media
                type="image"
                link="/images/Create/DaPerformersCharactererformers.png"
                blurLink="/images/Create/DaPerformersCharactererformers.png"
                containerClasses="sm:h-[90px] aspect-[1/1]"
              />
              <div className="absolute m-auto">
                <Media
                  type="image"
                  link="/images/Create/5.png"
                  blurLink="/images/Create/5.png"
                  containerClasses="sm:h-[50px] aspect-[1/1]"
                />
              </div>
            </Button>
          </div>
          <div className="flex flex-col align-middle">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers-Image-2.png"
              blurLink="/images/Create/DaPerformersCharactererformers-Image-2.png"
              containerClasses="sm:h-[40px] aspect-[1/1]"
            />

            <Button className="relative mt-2" onClick={selectRandom}>
              <Media
                type="image"
                link="/images/Create/DaPerformersCharactererformers.png"
                blurLink="/images/Create/DaPerformersCharactererformers.png"
                containerClasses="sm:h-[90px] aspect-[1/1]"
              />
              <div className="absolute m-auto">
                <Media
                  type="image"
                  link="/images/Create/10.png"
                  blurLink="/images/Create/10.png"
                  containerClasses="sm:h-[60px] aspect-[1/1]"
                />
              </div>
            </Button>
          </div>
          <div className="flex flex-col align-middle">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers-Image-3.png"
              blurLink="/images/Create/DaPerformersCharactererformers-Image-3.png"
              containerClasses="sm:h-[40px] aspect-[1/1]"
            />

            <Button className="relative mt-2" onClick={selectRandom}>
              <Media
                type="image"
                link="/images/Create/DaPerformersCharactererformers.png"
                blurLink="/images/Create/DaPerformersCharactererformers.png"
                containerClasses="sm:h-[90px] aspect-[1/1]"
              />
              <div className="absolute m-auto">
                <Media
                  type="image"
                  link="/images/Create/25.png"
                  blurLink="/images/Create/25.png"
                  containerClasses="sm:h-[60px] aspect-[1/1]"
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

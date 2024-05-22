import { STEPS } from "@/lib/createStep"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"
import { useCreate } from "../../../../providers/CreateProvider"

const WeCantWork = () => {
  const { setCurrentStep } = useCreate()
  return (
    <div
      className="
  md:text-[12px] lg:text-[16px] xl:text-[20px] 
  font-slimfit text-white"
    >
      <div className="xl:pt-6 xl:pl-20 lg:pt-6 lg:pl-16 md:pt-3 md:pl-12 sm:pt-20 sm:pl-12">
        <Media
          type="image"
          link="/images/Create/weCantStackShack.png"
          alt="weCantStackShack"
          blurLink="/images/Create/weCantStackShack.png"
          containerClasses="sm:w-[140px] md:w-[160px] lg:w-[220px] xl:w-[240px] sm:h-[50px] md:h-[50px] lg:h-[70px] xl:h-[70px] aspect-[1/1]"
        />
      </div>
      <div className="flex items-start">
        <div className="pl-2">
          <Media
            type="image"
            link="/images/Create/weCantStackShack-1.png"
            alt="weCantStackShack-1"
            blurLink="/images/Create/weCantStackShack-1.png"
            containerClasses="sm:w-[100px] md:w-[100px] lg:w-[140px] xl:w-[170px] aspect-[1/1]"
          />
        </div>
        <div>
          <div className="xl:pl-12 lg:pl-0 xl:-mt-8 lg:-mt-8 md:-mt-8 md:pl-2 sm:-mt-8 sm:pl-2">
            <Media
              type="image"
              link="/images/Create/SoWeAreGoingToPutOnASnow.png"
              alt="SoWeAreGoingToPutOnASnow"
              blurLink="/images/Create/SoWeAreGoingToPutOnASnow.png"
              containerClasses="sm:w-[140px] md:w-[140px] lg:w-[190px] xl:w-[210px] sm:h-[120px] md:h-[120px] lg:h-[140px] xl:h-[140px]  aspect-[1/1]"
            />
          </div>
          <div className="flex">
            <div className="lg:-mt-14 lg:-ml-4 xl:-mt-10 xl:-ml-2 md:-ml-2 md:-mt-14 sm:-ml-2 sm:-mt-14">
              <Media
                type="image"
                link="/images/Create/CallingForAllOnPeformarmers.png"
                alt="CallingForAllOnPeformarmers"
                blurLink="/images/Create/CallingForAllOnPeformarmers.png"
                containerClasses="sm:w-[100px] md:w-[100px] lg:w-[140px] xl:w-[190px] sm:h-[120px] md:h-[120px] lg:h-[160px] xl:h-[170px]   aspect-[1/1]"
              />
            </div>
            <div className="xl:-ml-14 lg:-ml-11 lg:-mt-5 md:-mt-5 md:-ml-9 sm:-mt-5 sm:-ml-9">
              <Media
                type="image"
                link="/images/Create/CallingForAllOnPeformarmers-Image.png"
                alt="CallingForAllOnPeformarmers-Image"
                blurLink="/images/Create/CallingForAllOnPeformarmers-Image.png"
                containerClasses="sm:w-[110px] md:w-[110px] lg:w-[140px] xl:w-[190px]    aspect-[1/1]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start pl-6 md:pl-4 sm:pl-4">
        <div className="lg:-mt-16 xl:-mt-20 md:-mt-14 sm:-mt-14">
          <Media
            type="image"
            link="/images/Create/GetBackToWork-Image.png"
            alt="GetBackToWork-Image"
            blurLink="/images/Create/GetBackToWork-Image.png"
            containerClasses="sm:h-[100px] md:h-[100px] lg:h-[130px] xl:h-[160px] aspect-[1/1]"
          />
        </div>
        <div className="xl:-mt-12 xl:-ml-8 lg:-mt-12 lg:-ml-6 md:-mt-12 md:-ml-6 sm:-mt-12 sm:-ml-6">
          <Media
            type="image"
            link="/images/Create/GetBackToWork.png"
            alt="GetBackToWork"
            blurLink="/images/Create/GetBackToWork.png"
            containerClasses="sm:h-[130px] md:h-[150px] lg:h-[170px] xl:h-[200px] aspect-[1/1]"
          />
        </div>
      </div>
      <div className="pl-20 pr-20 xl:-mt-10 lg:-mt-11 md:-mt-12 lg:pl-16 lg:pr-16 md:pl-12 md:pr-12 sm:pl-12 sm:pr-12 flex justify-between">
        <div>
          <Button className="relative">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers.png"
              alt="DaPerformersCharactererformers"
              blurLink="/images/Create/DaPerformersCharactererformers.png"
              containerClasses="sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h-[90px] aspect-[1/1]"
            />
            <div className="absolute m-auto">
              <button
                onClick={() => {
                  setCurrentStep(STEPS.FAQ_STEP)
                }}
              >
                <Media
                  type="image"
                  link="/images/Create/faq.png"
                  alt="faq"
                  blurLink="/images/Create/faq.png"
                  containerClasses="sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[60px] aspect-[1/1]"
                />
              </button>
            </div>
          </Button>
        </div>
        <div>
          <Button className="relative">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers.png"
              alt="DaPerformersCharactererformers-2"
              blurLink="/images/Create/DaPerformersCharactererformers.png"
              containerClasses="sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h-[90px] aspect-[1/1]"
            />
            <div className="absolute m-auto">
              <Media
                type="image"
                link="/images/Create/question-mark.png"
                alt="question-mark"
                blurLink="/images/Create/question-mark.png"
                containerClasses="sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[60px] aspect-[1/1]"
              />
            </div>
          </Button>
        </div>
        <div>
          <Button className="relative">
            <Media
              type="image"
              link="/images/Create/DaPerformersCharactererformers.png"
              alt="DaPerformersCharactererformers-3"
              blurLink="/images/Create/DaPerformersCharactererformers.png"
              containerClasses="sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h-[90px] aspect-[1/1]"
            />
            <div className="absolute m-auto">
              <Media
                type="image"
                link="/images/Create/tos.png"
                alt="tos"
                blurLink="/images/Create/tos.png"
                containerClasses="sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[60px] aspect-[1/1]"
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default WeCantWork

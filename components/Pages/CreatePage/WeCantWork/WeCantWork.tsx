import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"

const WeCantWork = () => (
  <div
    className="
    md:text-[12px] lg:text-[16px] xl:text-[20px] 
    font-slimfit text-white"
  >
    <div className="pt-6 pl-20">
      <Media
        type="image"
        link="/images/Create/weCantStackShack.png"
        alt="weCantStackShack"
        blurLink="/images/Create/weCantStackShack.png"
        containerClasses="xl:w-[240px] sm:h-[70px] aspect-[1/1]"
      />
    </div>
    <div className="flex items-start">
      <div className="pl-2">
        <Media
          type="image"
          link="/images/Create/weCantStackShack-1.png"
          alt="weCantStackShack-1"
          blurLink="/images/Create/weCantStackShack-1.png"
          containerClasses="xl:w-[170px] aspect-[1/1]"
        />
      </div>
      <div>
        <div className="pl-12 -mt-8">
          <Media
            type="image"
            link="/images/Create/SoWeAreGoingToPutOnASnow.png"
            alt="SoWeAreGoingToPutOnASnow"
            blurLink="/images/Create/SoWeAreGoingToPutOnASnow.png"
            containerClasses=" xl:w-[210px] sm:h-[140px]  aspect-[1/1]"
          />
        </div>
        <div className="flex">
          <div className="-mt-10 -ml-2">
            <Media
              type="image"
              link="/images/Create/CallingForAllOnPeformarmers.png"
              alt="CallingForAllOnPeformarmers"
              blurLink="/images/Create/CallingForAllOnPeformarmers.png"
              containerClasses=" xl:w-[190px] sm:h-[170px]   aspect-[1/1]"
            />
          </div>
          <div className="-ml-14 ">
            <Media
              type="image"
              link="/images/Create/CallingForAllOnPeformarmers-Image.png"
              alt="CallingForAllOnPeformarmers-Image"
              blurLink="/images/Create/CallingForAllOnPeformarmers-Image.png"
              containerClasses=" lg:w-[160px] xl:w-[190px]    aspect-[1/1]"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-start pl-6">
      <div className="-mt-20">
        <Media
          type="image"
          link="/images/Create/GetBackToWork-Image.png"
          alt="GetBackToWork-Image"
          blurLink="/images/Create/GetBackToWork-Image.png"
          containerClasses="sm:h-[160px] aspect-[1/1]"
        />
      </div>
      <div className="-mt-12 -ml-8">
        <Media
          type="image"
          link="/images/Create/GetBackToWork.png"
          alt="GetBackToWork"
          blurLink="/images/Create/GetBackToWork.png"
          containerClasses="sm:h-[200px] aspect-[1/1]"
        />
      </div>
    </div>
    <div className="pl-20 pr-20 -mt-14 flex justify-between">
      <div>
        <Button className="relative">
          <Media
            type="image"
            link="/images/Create/DaPerformersCharactererformers.png"
            alt="DaPerformersCharactererformers"
            blurLink="/images/Create/DaPerformersCharactererformers.png"
            containerClasses="sm:h-[90px] aspect-[1/1]"
          />
          <div className="absolute m-auto">
            <Media
              type="image"
              link="/images/Create/faq.png"
              alt="faq"
              blurLink="/images/Create/faq.png"
              containerClasses="sm:h-[70px] aspect-[1/1]"
            />
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
            containerClasses="sm:h-[90px] aspect-[1/1]"
          />
          <div className="absolute m-auto">
            <Media
              type="image"
              link="/images/Create/question-mark.png"
              alt="question-mark"
              blurLink="/images/Create/question-mark.png"
              containerClasses="sm:h-[70px] aspect-[1/1]"
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
            containerClasses="sm:h-[90px] aspect-[1/1]"
          />
          <div className="absolute m-auto">
            <Media
              type="image"
              link="/images/Create/tos.png"
              alt="tos"
              blurLink="/images/Create/tos.png"
              containerClasses="sm:h-[70px] aspect-[1/1]"
            />
          </div>
        </Button>
      </div>
    </div>
  </div>
)

export default WeCantWork

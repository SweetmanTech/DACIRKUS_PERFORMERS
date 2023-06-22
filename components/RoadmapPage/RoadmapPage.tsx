import Swiper, { EffectCreative, Mousewheel } from "swiper"
import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from "react"
import Slider from "../../shared/Slider"
import Stage from "./Stage"
import Layout from "../Layout"
import { StageData } from "./types"
import data from "./data.json"

Swiper.use([Mousewheel])

const RoadmapPage = () => {
  let offset
  const stages: StageData[] = data as StageData[]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [swiperCtrl, setSwiper] = useState<any>()

  const isResponsive = useMediaQuery("(max-width: 1150px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

  useEffect(() => {
    stages.map((stage: StageData, index: number) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (index === 0) offset = Math.abs(new Date(stage.date).getTime() - new Date().getTime())

      const currentOffset = Math.abs(new Date(stage.date).getTime() - new Date().getTime())

      if (offset > currentOffset) setCurrentIndex(index)
      offset = Math.abs(new Date(stage.date).getTime() - new Date().getTime())

      return true
    })
  }, [stages])

  useEffect(() => {
    if (swiperCtrl) swiperCtrl.slideTo(currentIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  return (
    <Layout type="contained">
      <div className="flex justify-center mt-[100px] md:mt-[150px]">
        <Slider
          className="[&>.swiper-wrapper]:xl:!mt-[280px]
            [&>.swiper-wrapper]:md:!mt-[202px]
            [&>.swiper-wrapper]:xs:!mt-[198px]
            [&>.swiper-wrapper]:mt-[160px]
            !h-[400px] xs:!h-[495px] md:!h-[606px] xl:!h-[840px]"
          slideClassName="!h-[80px] xs:!h-[99px] md:!h-[202px] xl:!h-[280px]"
          sliderProps={{
            breakpoints: {
              393: {
                creativeEffect: {
                  next: {
                    translate: [0, "99px", 0],
                  },
                  prev: {
                    translate: [0, `-99px`, 0],
                  },
                  limitProgress: 3,
                },
                slidesPerView: 5,
                initialSlide: 2,
              },
              768: {
                creativeEffect: {
                  next: {
                    translate: [0, `202px`, 0],
                  },
                  prev: {
                    translate: [0, `-202px`, 0],
                  },
                  limitProgress: 2,
                },
                slidesPerView: 3,
                initialSlide: 1,
              },
              1150: {
                creativeEffect: {
                  next: {
                    translate: [0, "280px", 0],
                  },
                  prev: {
                    translate: [0, `-280px`, 0],
                  },
                  limitProgress: 2,
                },
                slidesPerView: 3,
                initialSlide: 1,
              },
            },
            slidesPerView: 5,
            initialSlide: 2,
            direction: "vertical",
            effect: "creative",
            loop: true,
            speed: 400,
            onSwiper(swiper) {
              setSwiper(swiper)
            },
            onSlideChange: (swiper) => setSelectedIndex(swiper.realIndex),
            mousewheel: {
              sensitivity: 3,
            },
            modules: [EffectCreative],
            creativeEffect: {
              next: {
                translate: [0, "80px", 0],
                scale: 0.8,
                opacity: 0.7,
              },
              prev: {
                translate: [0, `-80px`, 0],
                scale: 0.8,
                opacity: 0.7,
              },
              limitProgress: 3,
            },
          }}
        >
          {stages.map((stage: StageData, index: number) => (
            <Stage
              key={stage.backImg}
              selectedIndex={selectedIndex}
              stageData={stage}
              stageNumber={index}
              // eslint-disable-next-line no-nested-ternary
              slideWidth={isResponsive ? (isMobile ? (isIphone ? 328 : 407) : 829.3) : 1150}
              // eslint-disable-next-line no-nested-ternary
              slideHeight={isResponsive ? (isMobile ? (isIphone ? 80 : 99) : 202) : 280}
              // eslint-disable-next-line no-nested-ternary
              imgWidth={isResponsive ? (isMobile ? (isIphone ? 304 : 377) : 768) : 1065}
              // eslint-disable-next-line no-nested-ternary
              imgHeight={isResponsive ? (isMobile ? (isIphone ? 73 : 91) : 185.3) : 257}
            />
          ))}
        </Slider>
      </div>
    </Layout>
  )
}

export default RoadmapPage

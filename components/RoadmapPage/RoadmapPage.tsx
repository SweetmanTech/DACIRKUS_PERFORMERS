import Swiper, { EffectCreative, Mousewheel } from "swiper"
import { useMediaQuery } from "usehooks-ts"
import Slider from "../../shared/Slider"
import Stage from "./Stage"
import Layout from "../Layout"
import { StageData } from "./types"

Swiper.use([Mousewheel])

const RoadmapPage = () => {
  const stages: StageData[] = [
    {
      backImg: "/assets/Roadmap/mission.svg",
      label: "Mission & Vision",
      date: "2023-01-31",
    },
    {
      backImg: "/assets/Roadmap/curate.svg",
      label: "Curate collective",
      date: "2023-02-28",
    },
    {
      backImg: "/assets/Roadmap/pendants.svg",
      label: "Airdrop pendants",
      date: "2023-03-31",
    },
    {
      backImg: "/assets/Roadmap/build.svg",
      label: "Build in public",
      date: "2023-04-30",
    },
    {
      backImg: "/assets/Roadmap/leaderboard.svg",
      label: "Leaderboard",
      date: "2023-05-31",
    },
    {
      backImg: "/assets/Roadmap/claim.svg",
      label: "Claim tickets",
      date: "2023-06-01",
    },
    {
      backImg: "/assets/Roadmap/redeem.svg",
      label: "Redeem passports",
      date: "2023-06-30 UTC-4",
    },
    {
      backImg: "/assets/Roadmap/allowlist.svg",
      label: "Allowlist quiz",
      date: "2023-07-01 UTC-4",
      certain: true,
    },
    {
      backImg: "/assets/Roadmap/drop.svg",
      label: "drop trailer",
      date: "2023-07-07 UTC-4",
      certain: true,
    },
    {
      backImg: "/assets/Roadmap/everything.svg",
      label: "everything crop hack",
      date: "2023-07-14 UTC-4",
      certain: true,
    },
    {
      backImg: "/assets/Roadmap/dna.svg",
      label: "dna distribution",
      date: "2023-07-21 UTC-4",
      certain: true,
    },
    {
      backImg: "/assets/Roadmap/mint.svg",
      label: "Cre8ors mint",
      date: "2023-07-27 UTC-4",
      certain: true,
    },
    {
      backImg: "/assets/Roadmap/art.svg",
      label: "art reveal",
      date: "2023-08-31 UTC-4",
    },
    {
      backImg: "/assets/Roadmap/creating.svg",
      label: "creating",
      date: "2023-09-30 UTC-4",
    },
    {
      backImg: "/assets/Roadmap/collaborating.svg",
      label: "collaborating",
      date: "2023-10-31 UTC-4",
    },
    {
      backImg: "/assets/Roadmap/connecting.svg",
      label: "connecting",
      date: "2023-11-30 UTC-4",
    },
    {
      backImg: "/assets/Roadmap/redacted.svg",
      label: null,
      date: null,
    },
  ]

  const isResponsive = useMediaQuery("(max-width: 1150px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isIphone = useMediaQuery("(max-width: 390px)")

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
                    scale: 0.8,
                    opacity: 0.7,
                  },
                  prev: {
                    translate: [0, `-99px`, 0],
                    scale: 0.8,
                    opacity: 0.7,
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
                    scale: 0.8,
                    opacity: 0.7,
                  },
                  prev: {
                    translate: [0, `-202px`, 0],
                    scale: 0.8,
                    opacity: 0.7,
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
                    scale: 0.8,
                    opacity: 0.7,
                  },
                  prev: {
                    translate: [0, `-280px`, 0],
                    scale: 0.8,
                    opacity: 0.7,
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
              stageData={stage}
              stageNumber={index + 1}
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

import CharacterModel from "@/components/OgImages/CharacterModel"
import { useCharacter } from "@/providers/CharacterProvider"
import { usePfpRenderer } from "@/providers/PfpRendererProvder"

const PfpRenderer = () => {
  const { cType, cSkin, cAcc, cEye, cHair, cColor, cOutFit, cBG, dummyRandom } = useCharacter()
  const { singleRef, multipleRefs } = usePfpRenderer()

  return (
    <main
      className="fixed w-screen h-screen left-0 top-0 z-[-1000] pfp-renderer
        flex flex-wrap"
    >
      <div className="relative">
        <div className="absolute w-full h-full bg-[#239063]" />
        <div className="w-[480px] h-[480px]" ref={singleRef}>
          <CharacterModel
            type={cType}
            skin={cSkin}
            acc={cAcc}
            eye={cEye}
            hair={cHair}
            color={cColor}
            outfit={cOutFit}
            bg={cBG}
            noCors
          />
        </div>
        {dummyRandom?.map((randomdata, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="w-[480px] h-[480px]" ref={multipleRefs[i]} key={i}>
            <CharacterModel
              type={randomdata.type}
              skin={randomdata.skin}
              acc={randomdata.acc}
              eye={randomdata.eye}
              hair={randomdata.hair}
              color={randomdata.color}
              outfit={randomdata.outfit}
              bg={randomdata.bg}
              noCors
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default PfpRenderer

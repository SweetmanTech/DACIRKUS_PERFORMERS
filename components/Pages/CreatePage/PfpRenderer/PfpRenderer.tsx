import CharacterModel from "@/components/OgImages/CharacterModel"
import { useCharacter } from "@/providers/CharacterProvider"
import { usePfpRenderer } from "@/providers/PfpRendererProvder"

const PfpRenderer = () => {
    const { cType, cSkin, cAcc, cEye, cHair, cColor, cOutFit, cBG } = useCharacter()
    const { singleRef } = usePfpRenderer()

    return (
        <main className="fixed border border-[red] w-screen h-screen left-0 top-0 z-[100] pfp-renderer
        flex flex-wrap">
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
                />
            </div>
        </main>
    )
}

export default PfpRenderer
import PfpRendererProvider from "@/providers/PfpRendererProvder"
import CreatePage from "../components/Pages/CreatePage"
import AnimatedBookProvider from "../providers/AnimatedBookProvider"
import CharacterProvider from "../providers/CharacterProvider"
import CreateProvider from "../providers/CreateProvider"
import SheetRendererProvider from "@/providers/SheetRendererProvider"

const Create = () => (
  <CharacterProvider>
    <PfpRendererProvider>
      <SheetRendererProvider>
        <AnimatedBookProvider>
          <CreateProvider>
            <CreatePage />
          </CreateProvider>
        </AnimatedBookProvider>
      </SheetRendererProvider>
    </PfpRendererProvider>
  </CharacterProvider>
)

export default Create

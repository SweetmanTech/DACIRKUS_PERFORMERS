import PfpRendererProvider from "@/providers/PfpRendererProvder"
import SheetRendererProvider from "@/providers/SheetRendererProvider"
import CreatePage from "../components/Pages/CreatePage"
import AnimatedBookProvider from "../providers/AnimatedBookProvider"
import CharacterProvider from "../providers/CharacterProvider"
import CreateProvider from "../providers/CreateProvider"

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

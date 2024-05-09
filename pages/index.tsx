import PfpRendererProvider from "@/providers/PfpRendererProvder"
import CreatePage from "../components/Pages/CreatePage"
import AnimatedBookProvider from "../providers/AnimatedBookProvider"
import CharacterProvider from "../providers/CharacterProvider"
import CreateProvider from "../providers/CreateProvider"

const Create = () => (
  <CharacterProvider>
    <PfpRendererProvider>
      <CreateProvider>
        <AnimatedBookProvider>
          <CreatePage />
        </AnimatedBookProvider>
      </CreateProvider>
    </PfpRendererProvider>
  </CharacterProvider>
)

export default Create

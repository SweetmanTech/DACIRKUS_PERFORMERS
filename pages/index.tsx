import CreatePage from "../components/Pages/CreatePage"
import AnimatedBookProvider from "../providers/AnimatedBookProvider"
import CharacterProvider from "../providers/CharacterProvider"
import CreateProvider from "../providers/CreateProvider"

const Create = () => (
  <CharacterProvider>
    <CreateProvider>
      <AnimatedBookProvider>
        <CreatePage />
      </AnimatedBookProvider>
    </CreateProvider>
  </CharacterProvider>
)

export default Create

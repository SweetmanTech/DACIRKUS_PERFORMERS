import CreatePage from "../../components/Pages/CreatePage"
import AnimatedBookProvider from "../../providers/AnimatedBookProvider"
import CreateProvider from "../../providers/CreateProvider"

const Create = () => (
  <CreateProvider>
    <AnimatedBookProvider>
      <CreatePage />
    </AnimatedBookProvider>
  </CreateProvider>
)

export default Create

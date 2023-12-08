import { STEPS } from "../../../lib/createStep"
import { useCreate } from "../../../providers/CreateProvider"
import AnimatedBook from "../../AnimatedBook"
import Layout from "../../Layout"
import { STATUS } from "../../../lib/bookStatus"
import CharacterSelect from "./CharacterSelect"
import { useAnimatedBook } from "../../../providers/AnimatedBookProvider"

const CreatePage = () => {
  const { currentStep } = useCreate()
  const { currentStatus } = useAnimatedBook()

  return (
    <Layout type="base">
      <AnimatedBook>
        {currentStep === STEPS.SELECT_CHARACTER && currentStatus === STATUS.OPENED && (
          <CharacterSelect />
        )}
      </AnimatedBook>
    </Layout>
  )
}

export default CreatePage

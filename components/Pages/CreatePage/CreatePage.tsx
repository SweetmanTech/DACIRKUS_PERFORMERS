import { STEPS } from "../../../lib/createStep"
import { useCreate } from "../../../providers/CreateProvider"
import AnimatedBook from "../../AnimatedBook"
import Layout from "../../Layout"
import { STATUS } from "../../../lib/bookStatus"
import CharacterSelect from "./CharacterSelect"
import { useAnimatedBook } from "../../../providers/AnimatedBookProvider"
import AttributeSelect from "./AttributeSelect"

const CreatePage = () => {
  const { currentStep } = useCreate()
  const { currentStatus } = useAnimatedBook()

  return (
    <Layout type="base">
      <AnimatedBook>
        {currentStep === STEPS.CHOOSE_CHARACTER_TYPE && currentStatus === STATUS.OPENED && (
          <CharacterSelect />
        )}
        {currentStep === STEPS.SELECT_CHARACTER && currentStatus === STATUS.OPENED && (
          <AttributeSelect />
        )}
      </AnimatedBook>
    </Layout>
  )
}

export default CreatePage

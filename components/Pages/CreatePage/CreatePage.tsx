import SeoHead from "@/components/SeoHead"
import { STEPS } from "../../../lib/createStep"
import { useCreate } from "../../../providers/CreateProvider"
import AnimatedBook from "../../AnimatedBook"
import Layout from "../../Layout"
import { STATUS } from "../../../lib/bookStatus"
import CharacterSelect from "./CharacterSelect"
import { useAnimatedBook } from "../../../providers/AnimatedBookProvider"
import AttributeSelect from "./AttributeSelect"
import Success from "./Success"

const CreatePage = () => {
  const { currentStep } = useCreate()
  const { currentStatus } = useAnimatedBook()

  return (
    <Layout type="base">
      <SeoHead />
      <AnimatedBook>
        {currentStatus === STATUS.OPENED && (
          <>
            {currentStep === STEPS.CHOOSE_CHARACTER_TYPE && <CharacterSelect />}
            {currentStep === STEPS.SELECT_CHARACTER && <AttributeSelect />}
            {currentStep === STEPS.SUCCESS && <Success />}
          </>
        )}
      </AnimatedBook>
    </Layout>
  )
}

export default CreatePage

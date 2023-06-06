import BaseLayout from "./BaseLayout"
import ContainedLayout from "./ContainedLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
  contained: ContainedLayout,
  // if needed - add more layout containers here
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container>{children}</Container>
}

export default Layout

import BaseLayout from "./BaseLayout"
import ContainedLayout from "./ContainedLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
  contained: ContainedLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type, hasFooter }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container hasFooter={hasFooter}>{children}</Container>
}

export default Layout

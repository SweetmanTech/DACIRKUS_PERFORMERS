import { useEffect } from "react"
import BaseLayout from "./BaseLayout"
import ContainedLayout from "./ContainedLayout"
import { ILayout } from "./types"
import { useTheme } from "../../providers/ThemeProvider"
import NoHeaderLayout from "./NoHeaderLayout"

const layoutContainers = {
  base: BaseLayout,
  contained: ContainedLayout,
  noheader: NoHeaderLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const { onChangeThemeConfig } = useTheme()

  useEffect(() => {
    onChangeThemeConfig("light")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Container = layoutContainers[type]

  return <Container>{children}</Container>
}

export default Layout

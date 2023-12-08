import useZoraMint from "../../hooks/useZoraMint"
import Button from "../../shared/Button"

const MintButton = () => {
  const { mintWithRewards } = useZoraMint()

  const handleClick = async () => {
    await mintWithRewards()
  }

  return <Button onClick={handleClick}>Collect</Button>
}

export default MintButton

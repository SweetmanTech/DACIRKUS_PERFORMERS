import { useCreate } from "@/providers/CreateProvider"
import Media from "../../shared/Media"

const TweetButton = () => {
  const { mintedTokenId } = useCreate()
  const tweetText = `I minted Performer #${mintedTokenId} by @DaPerformers`
  const handleClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
    window.open(twitterUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="md:w-[39px] lg:w-[52px] xl:w-[65px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                  bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
    >
      <Media
        type="image"
        link="/images/Buttons/tweet.png"
        blurLink="/images/Buttons/tweet.png"
        containerClasses="md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
      />
    </button>
  )
}

export default TweetButton

import Image from "next/image"

const Zorb = ({ width = 50, height = 50 }) => (
  <Image
    src="/images/zorb.png"
    alt="zorb"
    width={width}
    height={height}
    className="cursor-pointer"
  />
)

export default Zorb

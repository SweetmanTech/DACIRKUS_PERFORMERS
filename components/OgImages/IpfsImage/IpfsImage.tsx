const IpfsImage = ({ ipfs }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundImage: `url("${ipfs}")`,
    }}
  />
)

export default IpfsImage

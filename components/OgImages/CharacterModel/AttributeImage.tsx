/* eslint-disable @next/next/no-img-element */

const AttributeImage = ({ imageUrl }) => (
  <img
    src={imageUrl}
    style={{
      width: 1440,
      position: "absolute",
      left: 0,
      top: -1930,
      imageRendering: "pixelated",
    }}
    alt="not found"
  />
)

export default AttributeImage

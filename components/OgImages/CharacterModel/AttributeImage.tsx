/* eslint-disable @next/next/no-img-element */

const AttributeImage = ({ imageUrl, className = "" }) => (
  <img
    src={imageUrl}
    style={{
      width: 1440,
      position: "absolute",
      left: 0,
      top: -1930,
      imageRendering: "pixelated",
    }}
    className={className}
    alt="not found"
  />
)

export default AttributeImage

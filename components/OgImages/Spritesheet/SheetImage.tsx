const SheetImage = ({ imageUrl }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={imageUrl}
    style={{
      width: 192,
      imageRendering: "pixelated",
    }}
    alt="not found"
  />
)

export default SheetImage

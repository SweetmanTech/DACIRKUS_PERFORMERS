const getMultipleCols = (quantity) => {
  if (quantity === 5) return 2
  if (quantity === 10) return 3
  if (quantity === 25) return 5

  return 1
}

export default getMultipleCols

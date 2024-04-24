const getAttributes = (type, skin, acc, eye, hair, color, outfit, bg) => [
  {
    value: type,
    trait_type: "Type",
  },
  {
    value: skin,
    trait_type: "Skin",
  },
  {
    value: acc,
    trait_type: "Acc.",
  },
  {
    value: eye,
    trait_type: "Eye",
  },
  {
    value: hair,
    trait_type: "Hair",
  },
  {
    value: color,
    trait_type: "Color",
  },
  {
    value: outfit,
    trait_type: "Outfit",
  },
  {
    value: bg,
    trait_type: "BG.",
  },
]

export default getAttributes

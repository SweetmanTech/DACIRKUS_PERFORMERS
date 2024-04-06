import fsPromises from "fs/promises"
import path from "path"

const sheetFilePath = path.join(process.cwd(), "pages/api/spritesheet/sheets.json")

export default async function handler(req: any, res: any) {
  const { tokenData } = req.query
  const data = JSON.parse(tokenData)

  const sheetDocument: any = await fsPromises.readFile(sheetFilePath)
  const sheetData = JSON.parse(sheetDocument)

  const findIndex = sheetData.findIndex((row) => row.tokenId === tokenData.tokenId)
  if (findIndex) sheetData.splice(findIndex, 1)
  sheetData.push(data)
  await fsPromises.writeFile(sheetFilePath, JSON.stringify(sheetData))

  res.status(200).json({
    message: "updated!",
  })
}

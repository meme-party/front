import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const apisDir = path.join(__dirname, "src/openapi/apis")

const indexFile = path.join(__dirname, "src/openapi/index.ts")
const exportPattern = /export \* from '.\/apis\/index';\n?/g

const deleteFolderRecursive = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true })
    console.log(`Deleted folder: ${folderPath}`)
  }
}

const cleanIndexFile = () => {
  if (fs.existsSync(indexFile)) {
    let content = fs.readFileSync(indexFile, "utf8")
    let updatedContent = content.replace(exportPattern, "")

    if (content !== updatedContent) {
      fs.writeFileSync(indexFile, updatedContent, "utf8")
      console.log(`Updated file: ${indexFile}`)
    }
  }
}

deleteFolderRecursive(apisDir)
cleanIndexFile()

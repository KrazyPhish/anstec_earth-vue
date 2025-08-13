//@ts-ignore
const path = require("path") as typeof import("node:path")
//@ts-ignore
const fs = require("fs") as typeof import("node:fs")

const createRelease = () => {
  const declareOriginPath = path.join("src", "index.d.ts")
  const declareTragetPath = path.join("dist", "index.d.ts")
  fs.copyFile(declareOriginPath, declareTragetPath, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

createRelease()

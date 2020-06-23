export async function findPaths(directory) {
  const path = await import("path")
  const fs = await import("fs")
  const util = await import("util")

  const tumblePath = path.join(process.cwd(), "lib", directory)
  const readdir = util.promisify(fs.readdir)

  return await readdir(tumblePath)
}

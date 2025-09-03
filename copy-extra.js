import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'
import { loadConfigFromFile } from "vite";

const run = async () => {
  // 自动解析 vite.config.(ts|js)
  const config = await loadConfigFromFile({ command: 'build', mode: 'production' })
  const outDir = config?.config?.build?.outDir || 'dist'

  const files = ['CNAME', '.nojekyll']

  for (const file of files) {
    const src = resolve(process.cwd(), file)
    const dest = resolve(process.cwd(), outDir, file)

    if (existsSync(src)) {
      copyFileSync(src, dest)
      console.log(`✅ Copied ${file} -> ${outDir}/`)
    } else {
      console.warn(`⚠️ File ${file} not found, skipped.`)
    }
  }
}

run()
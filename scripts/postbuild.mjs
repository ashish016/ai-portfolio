// Strips files the Sites uploader refuses (hidden files and source maps)
// from the build output, so `deploy.json` can point straight at dist/.
import { copyFileSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// Project root, so the cleanup works regardless of where this script lives.
const root = dirname(fileURLToPath(import.meta.url))

function clean(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (name.startsWith('.') || name.endsWith('.map')) {
      rmSync(path, { recursive: true, force: true })
      continue
    }
    if (statSync(path).isDirectory()) clean(path)
  }
}

clean(join(root, '../dist'))
copyFileSync(join(root, '../dist/client/index.html'), join(root, '../dist/client/404.html'))

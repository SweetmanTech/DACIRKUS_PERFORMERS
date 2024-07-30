import { create as createIpfsClient } from "ipfs-http-client"
import hashFiles from "./hashFiles"

const IPFS_API_BASE = "https://upload.ipfs.zora.co"

const defaultIpfsOptions = {
  cidVersion: 1,
} as const

const ipfs = createIpfsClient({
  url: `${IPFS_API_BASE}/api/v0`,
})

const defaultOptions = {
  onProgress: undefined,
  cache: true,
}

export type IPFSUploadResponse = {
  cid: string
  uri: string
}

const uploadCache = {
  prefix: "ZORA/IPFSUploadCache",
  // eslint-disable-next-line consistent-return
  get(files: File[]): IPFSUploadResponse | undefined {
    const digest = hashFiles(files)
    try {
      const cid = localStorage.getItem(`${this.prefix}/${digest}`)
      if (cid) {
        return { cid, uri: `ipfs://${cid}` }
      }
      // eslint-disable-next-line no-empty
    } catch {}
  },
  put(files: File[], cid: string) {
    const digest = hashFiles(files)
    try {
      localStorage.setItem(`${this.prefix}/${digest}`, cid)
      // eslint-disable-next-line no-empty
    } catch {}
  },
}

export async function uploadFile(
  file: File,
  options?: {
    onProgress?: (progress: number) => void
    cache?: boolean
  },
): Promise<IPFSUploadResponse> {
  const { onProgress, cache } = {
    ...defaultOptions,
    ...options,
  }

  if (cache) {
    const cached = uploadCache.get([file])
    if (cached) return cached
  }

  const root = await ipfs.add(file, {
    ...defaultIpfsOptions,
    progress: (bytes: number) => {
      onProgress?.((bytes / file.size) * 100)
    },
  })

  const cid = root.cid.toString()
  const uri = `ipfs://${cid}`

  uploadCache.put([file], cid)

  return {
    cid,
    uri,
  }
}

export type FileEntry =
  | File
  | {
      content: File
      path: string
    }

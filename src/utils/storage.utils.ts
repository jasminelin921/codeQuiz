const PREFIX = 'codeQuiz_'

interface StorageAPI {
  setItem: <T>(key: string, value: T) => void
  getItem: <T>(key: string) => T | null
  removeItem: (key: string) => void
  clear: () => void
}

function safeJSONParse<T>(value: string | null): T | null {
  try {
    return value ? JSON.parse(value) : null
  } catch (e) {
    console.warn('Failed to parse JSON:', e)
    return null
  }
}

function createStorage(useSession = false): StorageAPI {
  const store: Storage = useSession ? sessionStorage : localStorage

  return {
    getItem: function <T>(key: string): T | null {
      return safeJSONParse<T>(store.getItem(PREFIX + key))
    },

    setItem: function <T>(key: string, value: T): void {
      try {
        store.setItem(PREFIX + key, JSON.stringify(value))
      } catch (e) {
        console.warn('setItem failed:', e)
      }
    },

    removeItem: function (key: string): void {
      store.removeItem(PREFIX + key)
    },

    clear: function (): void {
      Object.keys(store).forEach((key) => {
        if (key.startsWith(PREFIX)) {
          store.removeItem(key)
        }
      })
    }
  }
}

const Storage = createStorage(false) // localStorage 為預設
const Session = createStorage(true) // sessionStorage

export { Storage, Session }

const BASE_URL = import.meta.env.VITE_API_BASE_URL

async function request(endpoint, options = {}) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      credentials: 'include', // for cookies / CSRF
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      signal: controller.signal,
      ...options,
    })

    const contentType = response.headers.get('content-type')
    const data = contentType?.includes('application/json')
      ? await response.json()
      : null

    if (!response.ok) {
      const error = {
        status: response.status,
        data,
      }
      throw error
    }

    return data
  } finally {
    clearTimeout(timeoutId)
  }
}

export const api = {
  get: (url) => request(url),
  post: (url, body) => request(url, { method: 'POST', body: JSON.stringify(body) }),
  put: (url, body) => request(url, { method: 'PUT', body: JSON.stringify(body) }),
  delete: (url) => request(url, { method: 'DELETE' }),
}


export const get = async <T>(path: string): Promise<T> => {
    const response = await fetch(path)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json() as Promise<T>
}

export const post = async <T>(path: string, body: unknown): Promise<T> => {
    const response = await fetch(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json() as Promise<T>
}
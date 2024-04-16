export async function getCurrencies() {
    const res = await fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
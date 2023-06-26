export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('funny_access_token')
        return token || null
    }
}
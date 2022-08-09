// 1 Aca va el primer paso, poner la ruta base
export const api = {
    apiUrl: "https://www.omdbapi.com",
    apiKey: "51d28a2d",
}
export const authUsers = [
    {
        id:"1001",
        username: "admin",
        pass: "1234",
    },
    {
        id: "1002",
        username: "bruno",
        name: "Burno Diaz",
        pass: "1234"
    },
    {
        id: "1003",
        username: "linder",
        name: "Linder Hassinger",
        pass: "1234"
    }
]
const Config = {
    authUsers,
    api,
}
export default Config;
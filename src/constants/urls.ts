const baseUrl = 'https://dummyjson.com'

export const urls = {
    users: `${baseUrl}/users`,
    userCarts: (userId: number)=>`${baseUrl}/carts/user/${userId}`
}
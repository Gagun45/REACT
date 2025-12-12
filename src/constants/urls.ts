const baseJsonPlaceholderUrl = "https://jsonplaceholder.typicode.com";
const baseDummyJsonUrl = 'https://dummyjson.com'

export const urls = {
    users: {
        jsonplaceholder: {
            allUsers: `${baseJsonPlaceholderUrl}/users`,
        },
        dummyjson: {
            allUsers: `${baseDummyJsonUrl}/users`,
        }
    },
    posts: {
        jsonplaceholder: {
            allPosts: `${baseJsonPlaceholderUrl}/posts`,
        },
        dummyjson: {
            allPosts: `${baseDummyJsonUrl}/posts`,
        }
    },
    comments: {
        jsonplaceholder: {
            allComments: `${baseJsonPlaceholderUrl}/comments`,
        },
        dummyjson: {
            allComments: `${baseDummyJsonUrl}/comments`,
        }
    },
}
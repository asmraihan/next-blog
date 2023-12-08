import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { type: "text" },
                password: { type: "password" }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null
                }
                try {
                    const data = new FormData();
                    data.append('email', credentials.email);
                    data.append('password', credentials.password);
                    console.log(`${process.env.NEXTAUTH_SERVER}/auth/loginUser`)
                    // console.log(credentials)
                    const response = await fetch(`${process.env.NEXTAUTH_SERVER}/auth/loginUser`, {
                        method: 'POST',
                        body: data,
                    });
                    const responseData = await response.json();
                    console.log(responseData)
                    if (responseData.success === true) {
                        return responseData;
                    }
                    return null
                } catch (err) {
                    console.log(err)
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),

    ],
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }
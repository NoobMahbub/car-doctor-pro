import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,

    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}

            },
            async authorize(credentials) {
                // if (!credentials) {
                //     return null;
                // }
                return true;
            }
        })
    ],
    callbacks: {},
    pages: {
        signIn: '/login'
    },
})

export { handler as GET, handler as POST }
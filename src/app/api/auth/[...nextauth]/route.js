import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
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
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }
                const db = await connectDB();

                const currentUser = await db.collection("users").findOne({ email })
                // Now I want to compare the user inputed password with my db password using bcrypt and verify
                if (!currentUser) {
                    return null;
                }

                const isMatched = await bcrypt.compare(password, currentUser.password)
                if (!isMatched) {
                    return null
                }
                return currentUser;
            }
        })
    ],
    callbacks: {},
    pages: {
        signIn: '/login'
    },
})

export { handler as GET, handler as POST }
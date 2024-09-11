import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const handle = NextAuth({
    session: {
        strategy: "jwt"
    },

    pages: {
        signIn: "/",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: {label: "Name", type: "text"},
                surname: {label: "Surname", type: "text"},
                email: {label: "Email", type: "email"}
            },

            async authorize(credentials) {
                return credentials
            }
        })
    ]
});

export { handle as GET, handle as POST }
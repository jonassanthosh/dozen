

import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.NEXT_PUBLIC_USER_POOL_APP_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_COGNITO,
      issuer: process.env.NEXT_PUBLIC_USER_POOL_ID,
    }),
  ],
}

export default NextAuth(authOptions)

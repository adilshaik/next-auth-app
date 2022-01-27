import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    // OAuth authentication providers
    // Provider.AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Sign in with passwordless email link
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: '<no-reply@example.com>',
    // }),
  ],

  database: process.env.DATABASE_URL,
});

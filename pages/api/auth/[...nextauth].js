import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.SITE || "http://localhost:3000",

  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);

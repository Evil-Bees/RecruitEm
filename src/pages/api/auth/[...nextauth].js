import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/helper/mongodb";
import database from "@/helper/database";
import User from "@/models/user";
import { compare } from "bcrypt";

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "text",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials) {
				await database();
				const user = await User.findOne({
					email:
						credentials === null || credentials === void 0
							? void 0
							: credentials.email,
				});

				if (!user) {
					throw new Error("Email is not registered");
				}

				const isPasswordCorrect = await compare(
					credentials.password,
					user.password
				);

				if (!isPasswordCorrect) {
					throw new Error("Password is incorrect");
				}

				return user;
			},
		}),
	],
	pages: {
		signIn: "/signin",
	},
	debug: process.env.NODE_ENV === "development",
	adapter: MongoDBAdapter(clientPromise),
	session: {
		strategy: "jwt",
	},
	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, user, token }) {
			return token;
		},
	},
});

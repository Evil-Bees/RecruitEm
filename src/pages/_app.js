import "@/styles/globals.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import("preline");
	}, []);
	return (
		<SessionProvider>
			<Layout>
				<Header />
				<Hero />
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

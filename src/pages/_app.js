import "@/styles/globals.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import("preline");
	}, []);
	return (
		<SessionProvider>
			<Layout>
				<Header />
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

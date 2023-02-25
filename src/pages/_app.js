import "@/styles/globals.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import("preline");
	}, []);
	return (
		<SessionProvider>
			<Header />
			<Component {...pageProps} />
		</SessionProvider>
	);
}

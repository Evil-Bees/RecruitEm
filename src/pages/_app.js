import "@/styles/globals.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import("preline");
	}, []);
	return <SessionProvider><Component {...pageProps} /></SessionProvider>;
}

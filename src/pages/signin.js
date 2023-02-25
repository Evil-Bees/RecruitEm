import { getCsrfToken, getSession } from "next-auth/react";

export default function SignIn({ csrfToken }) {
	return (
		<form method="post" action="/api/auth/callback/credentials">
			<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
			<label>
				Email
				<input
					placeholder="Enter your email"
					autoComplete="email"
					name="email"
					title="Must be a registered email address."
					type="email"
					required
					minLength="4"
				/>
			</label>
			<label>
				Password
				<input
					placeholder="Enter your password"
					autoComplete="current-password"
					name="password"
					type="password"
					required
					minLength="4"
				/>
			</label>

			<div>
				<button type="submit" href="/">
					Sign in
				</button>
			</div>
		</form>
	);
}

export async function getServerSideProps(context) {
	const { req } = context;
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: { destination: "/" + session._doc.role },
		};
	}

	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	};
}

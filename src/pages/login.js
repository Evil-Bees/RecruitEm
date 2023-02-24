import Link from "next/link";

export default function Login({ csrfToken }) {
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
			<button type="submit">Sign in</button>
			<p>
				Don&#39;t have an account yet?
				<Link href="/register">
					<span className="ml-2">Sign up.</span>
				</Link>
			</p>
		</form>
	);
}

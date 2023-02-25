import Link from "next/link";
import Router from "next/router";

export default function Register() {
	const onSubmit = event => {
		event.preventDefault();

		const firstName = event.target.firstname.value;
		const lastName = event.target.lastname.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const repeatPassword = event.target.repeatpassword.value;

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			email: email,
			firstName: firstName,
			lastName: lastName,
			password: password,
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		if (firstName && lastName && email && password && repeatPassword) {
			if (password === repeatPassword) {
				fetch(`/api/users`, requestOptions)
					.then(response => response.json())
					.then(result => {
						if (result.success === true) {
							Router.push("/signin?success=true");
						} else {
							const errors = JSON.parse(result);
							console.log(errors);
						}
					})
					.catch(error => console.log("error", error));
			} else {
				console.log("Passwords are not the same.");
			}
		} else {
			console.log("Missing data");
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			method="post"
			action="/api/auth/callback/credentials"
		>
			<div>
				<label htmlFor="firstname">First name</label>
				<input
					type="text"
					name="firstname"
					placeholder="Enter your first name"
				></input>
			</div>

			<div>
				<label htmlFor="lastname">Last name</label>
				<input
					type="text"
					name="lastname"
					placeholder="Enter your last name"
				></input>
			</div>

			<div>
				<label htmlFor="email">
					Email
					<input placeholder="ex: john@gmail.com" name="email" type="email" />
				</label>
			</div>

			<div>
				<label htmlFor="password">
					Password
					<input
						placeholder="Enter your password"
						autoComplete="current-password"
						name="password"
						type="password"
					/>
				</label>
			</div>

			<div>
				<label htmlFor="repeatpassword">
					Repeat Password
					<input
						placeholder="Enter your password"
						autoComplete="current-password"
						name="repeatpassword"
						type="password"
					/>
				</label>
			</div>

			<button type="submit">Sign Up</button>

			<p>
				Already have an account?
				<Link href="/signin">Sign in.</Link>
			</p>
		</form>
	);
}

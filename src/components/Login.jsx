import { useState } from "react";

const Login = () => {
	const [user, setUser] = useState({});
	const userData = e => {
		e.preventDefault();
		setUser({
			email: e.target.email.value,
			password: e.target.password.value
		});
	};
	return (
		<>
		<form className="login-form" onSubmit={userData}>
			<label htmlFor="email" className="login-form__label">
				Email
			</label>
			<input
				type="email"
				className="login-form__input"
				name='email'
				id='email' />
			<div className="login-form__div">
				<label htmlFor="password" className="login-form__label">
					Password
				</label>
				<a href="/">Forgot password?</a>
			</div>
			<input
				type="password"
				className="login-form__input"
				name="password" 
				id="password" />
			<div className="login-form__submit--container">
				<input 
					type="submit"
					className="login-form__submit"
					value='Log in' />
			</div>
			<p className="login-form__p">
				Don't have an account? <a href="/">Sign up</a>
			</p>
		</form>
		{user.email}{user.password}
		</>
	);
};

export default Login;
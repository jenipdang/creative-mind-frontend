import {
	Container,
	Wrapper,
	Title,
	Form,
	Input,
	Button,
	Link,
} from '../styles/signin';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../data/context';
import { FcPrivacy } from 'react-icons/fc'

const SignIn = () => {
	const { setUser, setMessage } = useGlobalContext()
	const [signIn, setSignIn] = useState({
		username: "",
		password: "",
	});

	const history = useHistory();

	const handleChange = (e) => {
		setSignIn({
			...signIn,
			[e.target.name]: e.target.value
		});
	};

	const handleSignin = (e) => {
		e.preventDefault();
		if (
			[signIn.username, signIn.password].some((val) => val.trim() === '')
		) {
			alert(
				'Please enter a valid username and password or click on forgot password to reset your login information.'
			);
		}
		fetch('/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(signIn),
		})
			.then((r) => {
				if (r.status === 200) {
					r.json().then((data) => {
						setUser(data.user);
						setMessage({message: data.message, status: "success"})
						history.push('/suggestions'); 
					});
				} else {
					// r.json().then((data) => alert(data.error));
					r.json().then((data) => setMessage({message: data.message}));
				}
			})
			.catch((error) => alert(error));

		setSignIn({
			username: "",
			password: "",
		})
	};

	return (
		<Container>
			<Wrapper>
				<Title>WELCOME BACK</Title>
				<Title><FcPrivacy /></Title>
				<Form onSubmit={handleSignin}>
					<Input
						type='text'
						value={signIn.username}
						onChange={handleChange}
						placeholder='Username'
						name='username'
					/>
					<Input
						type='password'
						value={signIn.password}
						onChange={handleChange}
						placeholder='Password'
						name='password'
					/>
					<Button
						type='submit'
					>
						SIGN IN
					</Button>
					<Link href='/signup'>NEED AN ACCOUNT?</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignIn;

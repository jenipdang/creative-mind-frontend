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

const SignIn = () => {
	const { setUser } = useGlobalContext;
	const [signedIn, setSignedIn] = useState({
		username: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleChange = (e) => {
		setSignedIn({
			...signedIn,
			[e.target.name]: e.target.value,
		});
	};

	const handleSignin = (e) => {
		e.preventDefault();
		setLoading(true)
		if (
			[signedIn.username, signedIn.password].some((val) => val.trim() === '')
		) {
			alert(
				'Please enter a valid username and password or click on forgot password to reset your login information.'
			);
		}
		fetch('http://localhost:9292/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(signedIn),
		})
			.then((r) => {
				if (r.status === 200) {
					r.json().then((data) => {
						setUser(data.user);
						history.push('/home');
					});
				} else {
					r.json().then((data) => alert(data.error));
				}
			})
			.catch((error) => alert(error));
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input
						type='text'
						value={signedIn.username}
						onChange={handleChange}
						placeholder='Username'
					/>
					<Input
						type='password'
						value={signedIn.password}
						onChange={handleChange}
						placeholder='Password'
					/>
					<Button
						value={loading ? 'Loading...' : 'Login'}
						disabled={loading}
						onClick={handleSignin}
					>
						LOGIN
					</Button>
					<Link>FORGOT YOUR PASSWORD?</Link>
					<Link href='/account/signup'>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignIn;

import {Container, Wrapper, Title, Form, Input, Agreement, Button} from '../styles/signup';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../data/context';

const SignUp = () => {
	const history = useHistory()
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setUser, setMessage } = useGlobalContext()

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			name.trim() === '' ||
			city.trim() === '' ||
			state.trim() === '' ||
			username.trim() === '' ||
			email.trim() === '' ||
			password.trim() === ''
		) {
			alert('Please Fill Out All Fields');
			return null;
		}

		const newUser = { name, city, state, username, email, password };

		fetch('/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		})
		.then((r) => {
			if (r.status === 200) {
				r.json().then((data) => {
					setUser(data.user);
					setMessage({message: "Successfully SignUp!!", status: "success"})
					history.push('/suggestions'); 
				});
			} else {
				r.json().then((data) => setMessage({message: data.message}));
			}
		})
		.catch((error) => alert(error));
		setName('');
		setCity('');
		setState('');
		setUsername('');
		setEmail('');
		setPassword('');
		history.push('/suggestions')

	};

	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
						lable="name"
						placeholder="Full Name"
						name="name"
					/>
					<Input
						type="text"
						onChange={(e) => setCity(e.target.value)}
						value={city}
						lable="city"
						placeholder="City"
						name="city"
					/>
					<Input
						type="text"
						onChange={(e) => setState(e.target.value)}
						value={state}
						lable="state"
						placeholder="State"
						name="state"
					/>
					<Input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						lable="username"
						placeholder="Username"
						name="username"
					/>
					<Input
						type="emial"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						lable="email"
						placeholder="Email"
						name="email"
					/>
					<Input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						lable="password"
						placeholder="Password"
						name="password"
					/>
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button type='submit' value= "New User">
						CREATE ACCOUNT
					</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignUp;

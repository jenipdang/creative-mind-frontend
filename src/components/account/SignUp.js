import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #28282b;
	color: white;
	cursor: pointer;
`;

const SignUp = () => {
	const history = useHistory()
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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

		fetch('http://localhost:9292/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		})
			.catch((err) => {
				console.err('ERROR:', err);
			});
		setName('');
		setCity('');
		setState('');
		setUsername('');
		setEmail('');
		setPassword('');
		history('/account/profile')

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
						CREATE
					</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignUp;

import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #28282b;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Signin = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	let navigate = useNavigate();

	const handleSignin = () => {
		navigate('/account/profile');
		setLoading(true)
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="username"
					/>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="password"
					/>
					<Button
						value={loading ? 'Loading...' : 'Login'}
						disabled={loading}
						onClick={handleSignin}
					>
						LOGIN
					</Button>
					<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link href="/account/signup">CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Signin;
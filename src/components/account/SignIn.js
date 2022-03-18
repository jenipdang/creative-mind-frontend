import { Container, Wrapper, Title, Form, Input, Button, Link} from '../styles/signin'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const SignIn = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSignin = () => {
		history('/account/profile');
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
						placeholder="Username"
					/>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<Button
						value={loading ? 'Loading...' : 'Login'}
						disabled={loading}
						onClick={handleSignin}
					>
						LOGIN
					</Button>
					<Link>FORGOT YOUR PASSWORD?</Link>
					<Link href="/account/signup">CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignIn;
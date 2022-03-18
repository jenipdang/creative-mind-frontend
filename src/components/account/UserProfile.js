import { useHistory } from 'react-router-dom';

const Profile = () => {
	let history = useHistory();

	const handleSignout = () => {
		history('/account/signin');
	};
	
	return (
		<div className="container">
			<div className="text ">
				<h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
					Welcome !!
				</h2>
			</div>
			<input className='btn btn-dark m-4' type="button" value="Signout" onClick={handleSignout} />
		</div>
	);
};

export default Profile;
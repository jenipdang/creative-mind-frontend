import { useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useGlobalContext } from '../data/context';

const Profile = () => {
	const { user, setUser } = useGlobalContext()
	const { id } = useParams()
	const history = useHistory();
	


	return (
		<div className="container">
			<div className="text ">
				<h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
					Welcome {user.name}!!
				</h2>
			</div>
		</div>
	);
};

export default Profile;
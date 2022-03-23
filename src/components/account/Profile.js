import { useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useGlobalContext } from '../data/context';

const Profile = () => {
	const { user, setUser } = useGlobalContext()
	const { id } = useParams()
	const history = useHistory();
	
	useEffect(() => {
		if (user) {
			fetch(`http://localhost:9292/users/${id}`)
			.then(r => r.json())
			.then(userData => {
				setUser(userData)
			})
		}
	}, [user, id])

	return (
		<div className="container">
			<div className="text ">
				<h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
					Welcome {user?.username}!!
				</h2>
			</div>
		</div>
	);
};

export default Profile;
// import { useEffect} from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { useGlobalContext } from '../data/context';

const Profile = () => {
	// const { user } = useGlobalContext()
	// const { id } = useParams()
	// let history = useHistory();
	
	// useEffect(() => {
	// 	if (user) {
	// 		fetch(`http://localhost:9292/users/${id}`)
	// 		.then(r => r.json())
	// 		.then(data => data.json())
	// 	}
	// })

	return (
		<div className="container">
			<div className="text ">
				<h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
					Welcome !!
				</h2>
			</div>
		</div>
	);
};

export default Profile;
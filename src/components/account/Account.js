import { useEffect } from 'react';
import Signin from './Signin';
import Profile from './Profile'
import {useState} from 'react';
import SignUp from './SignUp';

const Account = () => {
	const [users, setUsers] = useState([])
	
	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		await fetch('http://localhost:9292/users')
		.then (r => r.json())
		.then (usersData => setUsers(usersData))
		.catch((err) => {
			alert(err)
		})
	}
	
	const handleAddNewUser = (newUser) => {
		return setUsers([...users, newUser])
	}

	
	return (
		<div>
				<Signin users={users}/>
				<Profile users={users}/>
				<SignUp addUser={handleAddNewUser}/>
		</div>
	);
};

export default Account;
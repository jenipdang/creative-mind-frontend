import { useGlobalContext } from '../data/context';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const Profile = () => {
	const { user } = useGlobalContext();
	return (
		<Card style={{ width: '18rem', textAlign: "center"}}>
			<Card.Body>
				<Card.Title>{user.name}</Card.Title>
				<Card.Text>
					{user.username}
				</Card.Text>
			</Card.Body>
			<ListGroup className='list-group-flush'>
				<ListGroupItem>{user.email}</ListGroupItem>
				<ListGroupItem>{user.city} || {user.state}</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default Profile;

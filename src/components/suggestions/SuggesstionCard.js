// import '../css/Suggestion.css';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../pages/Loading';
import { Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa'
import { AiTwotoneEdit } from 'react-icons/ai'

const SuggesstionCard = ({ suggestion, onDelete, onEdit }) => {
	const [suggestionObj, setSuggestionObj] = useState(null);

	const [isEditing, setIsEditing] = useState(false)

	const history = useHistory()

	const { id } = useParams();
	
	useEffect(() => {
		if (!suggestion) {
			fetch(`http://localhost:9292/suggestions/${id}`)
				.then((r) => r.json())
				.then((suggestion) => {
					setSuggestionObj(suggestion);
				});
		}
	}, [suggestion, id]);

	const finalSuggestion = suggestion ? suggestion : suggestionObj;
	if (!finalSuggestion) return <Loading />;

	const handleDelete = () => {
		fetch(`http://localhost:9292/suggestions/${id}`, {
			method: "DELETE"
		})
		onDelete(id)
		history.push('/suggestions')

	}

	const handleUpdate = (updatedSuggestion) => {
		setIsEditing(false)
		onEdit(updatedSuggestion)
	}

	return (
		<Card border='secondary' style={{margin: "10px"}}>
			<Card.Header as='h5'><Link style={{textDecoration: "none", color: "black"}} to={`/suggestions/${finalSuggestion.id}`}>{finalSuggestion.title}</Link></Card.Header>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p>
						{' '}
						{finalSuggestion.description}{' '}
					</p>
					<footer className='blockquote-footer'>
						{finalSuggestion.user?.username || "Anonymous"} - {finalSuggestion.user?.city}, {finalSuggestion.user?.state}
					</footer>
					<div className='actions'>
						<button onClick={handleUpdate} style={{border: "none"}}>
							<span aria-label='edit'>
							<AiTwotoneEdit />
							</span>
						</button>
						<button onClick={handleDelete} style={{border: "none", padding: "20px"}}>
							<span aria-label='delete'>
							<FaTrash />
							</span>
						</button>
					</div>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default SuggesstionCard;

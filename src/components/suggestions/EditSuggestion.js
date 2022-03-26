import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
	Form,
	Button,
	Container,
	Wrapper,
	TextArea,
} from '../styles/signin';



const EditSuggestion = (suggestion, setIsEditing) => {
  const [editSuggestion, setEditSuggestion] = useState(suggestion.suggestion)
    const { id } = useParams()
	const history = useHistory();

	const handleChange = (e) => {
		setEditSuggestion({
			...editSuggestion,
			[e.target.name]:  e.target.value
		})
	}
	function handleUpdate() {
		setIsEditing(true)
	}

	const newSuggestion = {
		description: editSuggestion.description,
	};

	const handleSubmit = (e) => {
    e.preventDefault();

		fetch(`/suggestions/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSuggestion),
		})
    	.then((r) => r.json())
    	.then((updatedSuggestion) => {
			console.log(handleUpdate)
			handleUpdate(updatedSuggestion)
		})
		.catch((error) => console.log(error))
    	history.push('/suggestions')
	}

	console.log(editSuggestion)

	return (
		<Container>
			<Wrapper>
				<Form className='edit-suggestion' onSubmit={handleSubmit}>
					<TextArea
						row='6'
						value={editSuggestion.description}
						onChange={handleChange}
						placeholder={editSuggestion.description}
						name='description'
						required
					/>
					<Button type='submit'>SAVE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default EditSuggestion;
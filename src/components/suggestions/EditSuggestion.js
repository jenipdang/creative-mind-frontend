import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
	Form,
	Button,
	Container,
	Wrapper,
	TextArea,
} from '../styles/signin';



const EditSugguestion = (suggestion, onEdit) => {
  const [editSuggestion, setEditSuggestion] = useState(suggestion)
    const { id } = useParams()
	const history = useHistory();

	const handleChange = (e) => {
		setEditSuggestion({
			...editSuggestion,
			[e.target.name]:  e.target.value
		})
	}

	const handleSubmit = (e) => {
    e.preventDefault();

    const newSuggestion = {
        description: editSuggestion.description,
    };

		fetch(`/suggestions/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSuggestion),
		})
    .then((r) => r.json())
    .then((updatedSuggestion) => onEdit(updatedSuggestion))
	.catch((error) => alert(error))
    history.push('/suggestions')
	}

	return (
		<Container>
			<Wrapper>
				<Form className='edit-suggestion' onSubmit={handleSubmit}>
					<TextArea
						row='6'
						value={editSuggestion.description}
						onChange={handleChange}
						placeholder='Description'
						name='description'
						required
					/>
					<Button type='submit'>SAVE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default EditSugguestion;
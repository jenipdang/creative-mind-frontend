import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Form,
	Button,
	Container,
	Wrapper,
	TextArea
} from '../styles/signin';

const EditSugguestion = (id, suggestion, onEdit) => {
  const [suggestionBody, setSuggestionBody] = useState(suggestion)

	const history = useHistory();

	const handleChange = (e) => {
		setSuggestionBody({
			...suggestionBody,
			[e.target.name]:  e.target.value
		})
	}

	const handleSubmit = (e) => {
    e.preventDefault();

		fetch(`/suggestions/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        		description: suggestionBody.description,
      		}),
		})
    .then((r) => r.json())
    .then((updatedDescription) => onEdit(updatedDescription))
    history.push('/suggestions')
	}

	return (
		<Container>
			<Wrapper>
				<Form className='new-suggestion' onSubmit={handleSubmit}>
					<TextArea
						row='6'
						value={suggestionBody.description}
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

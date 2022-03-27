import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
	Form,
	Button,
	Container,
	Wrapper,
	TextArea,
} from '../styles/signin';
import { useGlobalContext } from '../data/context';


const EditSuggestion = ({suggestion, onEdit}) => {
  const [editSuggestion, setEditSuggestion] = useState(suggestion)
    const { id } = useParams()
	const history = useHistory();
	const { setMessage } = useGlobalContext()

	const handleChange = (e) => {
		setEditSuggestion({
			...editSuggestion,
			[e.target.name]:  e.target.value
		})
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
			onEdit(updatedSuggestion)
			setMessage({message: "Successfully Edit", status: "success"})
		})
		.catch((error) => console.log(error))
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
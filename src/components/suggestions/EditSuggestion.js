import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
	Form,
	Button,
	Container,
	Wrapper,
	TextArea,
    // Input
} from '../styles/signin';
// import { Select } from '../styles/signup';


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
        title: editSuggestion.title,
        description: editSuggestion.description,
        category: editSuggestion.category,
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
    history.push('/suggestions')
	}

	return (
		<Container>
			<Wrapper>
				<Form className='edit-suggestion' onSubmit={handleSubmit}>
					{/* <Input
						type='text'
						value={editSuggestion.title}
						onChange={handleChange}
						placeholder='Title'
						name='title'
						required
					/> */}
					{/* <Select className='category'>
						<option value="Landscape">Landscape</option>
  						<option value="Kitchen">Kitchen</option>
  						<option value="Bedroom">Bedroom</option>
  						<option value="Appliance">Appliances</option>
  						<option value="Livingroom">Livingroom</option>
  						<option value="Bathroom">Bathroom</option>
					</Select> */}
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
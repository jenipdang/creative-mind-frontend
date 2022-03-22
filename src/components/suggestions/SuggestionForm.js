import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Form,
	Input,
	Button,
	Container,
	Wrapper,
	Title,
	TextArea
} from '../styles/signin';
import { Select } from '../styles/signup';
import { useGlobalContext } from '../data/context';

const SuggestionForm = () => {
	const { user } = useGlobalContext()

	const [suggestion, setSuggestion] = useState({
		title: '',
		description: '',
		category: '',
		user_id: user
	});
	const history = useHistory();

	const handleChange = (e) => {
		setSuggestion({
			...suggestion,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			[suggestion.title, suggestion.description].some(
				(val) => val.trim() === ''
			)
		) {
			alert('Please fill in all the information.');
		}
		const newSuggestion = {
			title: suggestion.title,
			description: suggestion.description,
			category: suggestion.category,
			like: 0,
			user_id: user?.name
		};

		fetch('http://localhost:9292/suggestions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSuggestion),
		})
    .then(() => history.push('/suggestions'))
	};

	return (
		<Container>
			<Wrapper>
				<Title>SHARE AN IDEA</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						type='text'
						value={suggestion.title}
						onChange={handleChange}
						placeholder='Title'
						name='title'
						required
					/>
					<Select className='category'>
						<option value="Landscape">Landscape</option>
  						<option value="Kitchen">Kitchen</option>
  						<option value="Bedroom">Bedroom</option>
  						<option value="Appliance">Appliances</option>
  						<option value="Livingroom">Livingroom</option>
  						<option value="Bathroom">Bathroom</option>
					</Select>
					<TextArea
						row='6'
						value={suggestion.description}
						onChange={handleChange}
						placeholder='Description'
						name='description'
						required
					/>
					<Button type='submit'>SUMBIT</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SuggestionForm;

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Form,
	Input,
	Button,
	Container,
	Wrapper,
	Title,
} from '../styles/signin';

const SuggestionForm = () => {
	const [suggestion, setSuggestion] = useState({
		title: '',
		description: '',
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
		};

		fetch('http://localhost:9292/suggestions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSuggestion),
		})
    .then(() => 	history.push('/suggestions'))
	};

	return (
		<Container>
			<Wrapper>
				<Title>Share an Idea</Title>
				<Form>
					<Input
						type='text'
						value={suggestion.title}
						onChange={handleChange}
						placeholder='Title'
						name='title'
						required
					/>
					<Input //how to make this into text area
						type='text'
						value={suggestion.description}
						onChange={handleChange}
						placeholder='Description'
						name='description'
						required
					/>
					<Button onSubmit={handleSubmit}>SUMBIT</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SuggestionForm;

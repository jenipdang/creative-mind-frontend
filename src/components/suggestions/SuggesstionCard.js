import '../css/Suggestion.css';
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../pages/Loading'

const SuggesstionCard = ({ suggestion }) => {
	const [suggestionObj, setSuggestionObj] = useState(null)
	const {id} = useParams()
	useEffect(() => {
		if (!suggestion) {
			fetch(`http://localhost:9292/suggestions/${id}`)
			.then(r => r.json())
			.then(suggestion => setSuggestionObj(suggestion))
		}
	}, [suggestion, id])

	const finalSuggestion = suggestion ? suggestion : suggestionObj
	if (!finalSuggestion) return <Loading />

	return (
		<div className='container'>
			<article className='blog-post'>
				<h2 className='blog-post-title'><Link to={`/suggestions/${finalSuggestion.id}`}>{finalSuggestion.title}</Link></h2>
				<p className='blog-post-meta'>
					{finalSuggestion.created_at} by {finalSuggestion.user?.username || "Anonymous"} - {finalSuggestion.user?.city}, {finalSuggestion.user?.state}
				</p>

				<p>{finalSuggestion.description}</p>
			</article>
		</div>
	);
};

export default SuggesstionCard;

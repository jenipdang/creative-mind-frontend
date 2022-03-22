import '../css/Suggestion.css';
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../pages/Loading'
import { FcLike } from 'react-icons/fc'

const SuggesstionCard = ({ suggestion }) => {
	const [suggestionObj, setSuggestionObj] = useState(null)
	const {id} = useParams()
	useEffect(() => {
		if (!suggestion) {
			fetch(`http://localhost:9292/suggestions/${id}`)
			.then(r => r.json())
			.then(suggestion => {
				setSuggestionObj(suggestion)
			})
		}
	}, [suggestion, id])

	const finalSuggestion = suggestion ? suggestion : suggestionObj
	if (!finalSuggestion) return <Loading />

	const handleLike = () => {
		// setSuggestionObj({...suggestionObj, like: suggestionObj.like + 1})
		fetch(`http://localhost:9292/suggestions/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "applicaiton/json"
			},
			body: JSON.stringify({like: finalSuggestion.like + 1})
		})
		.then(r => r.json())
		.then(() => setSuggestionObj({...suggestionObj, like: suggestionObj.like + 1}))
	}

	return (
		<div className='container'>
			<article className='blog-post'>
				<h2 className='blog-post-title'><Link to={`/suggestions/${finalSuggestion.id}`}>{finalSuggestion.title}</Link></h2>
				<p className='blog-post-meta'>
				{finalSuggestion.created_at} by {finalSuggestion.user?.username || "Anonymous"} - {finalSuggestion.user?.city}, {finalSuggestion.user?.state}
				</p>

				<p>{finalSuggestion.description}</p>
				<button className='btn' onClick={handleLike}><FcLike />{finalSuggestion.like}</button>
				{/* <button className='btn' onClick={() => setAddLike(addlike + 1)}><FcLike /> {addlike}</button> */}
			</article>
		</div>
	);
};

export default SuggesstionCard;

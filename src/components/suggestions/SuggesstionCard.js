import '../css/Suggestion.css';



const SuggesstionCard = ({ suggestion }) => {

  const { id, title, name, created_at, description } = suggestion

	return (
		<div className='container'>
			<article className='blog-post' key={id}>
				<h2 className='blog-post-title'>{title}</h2>
				<p className='blog-post-meta'>
					{created_at} by {name}
				</p>

				<p>
					{description}
				</p>
			</article>
		</div>
	);
};

export default SuggesstionCard;

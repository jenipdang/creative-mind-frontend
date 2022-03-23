import { useState, useEffect } from 'react';
import SuggestionsList from '../suggestions/SuggessionsList';
import Loading from '../pages/Loading';
import Search from '../suggestions/Search'
import Filter from '../suggestions/Filter';



const SuggestionsContainer = () => {
	const [loading, setLoading] = useState();
	const [suggestions, setSuggestions] = useState([]);
	const [search, setSearch] = useState('')
	const [searchResult, setSearchResult] = useState([])

	const fetchSuggestions = async () => {
		setLoading(true);

		try {
			const response = await fetch('/suggestions');
			const data = await response.json();
			setLoading(false);
			setSuggestions(data);
			setSearchResult(data)
		} catch (error) {
			setLoading(false);
			alert(error);
		}
	};

	useEffect(() => {
		fetchSuggestions();
	}, []);

	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}

	const filterResult = (category) => {
		if (category === 'All') {
			setSearchResult(suggestions);
			return;
		}
		const result = suggestions.filter((currentData) => {
			return currentData.category === category
		});
		setSearchResult(result);
	};

	const searchHandler = (search) => {
        setSearch(search)
		if (search !== '') {
			const newSuggestion = searchResult.filter((suggestion) => {
				return Object.values(suggestion)
					.join(' ')
					.toLowerCase()
					.includes(search.toLowerCase());
			});
            setSearchResult(newSuggestion)
		} else {
            setSearchResult(suggestions)
        }
	};

	const handleEdit = (updatedSuggestionObj) => {
		const updatedSuggestions = suggestions.map((suggestion) => {
			if (suggestion.id === updatedSuggestionObj.id) {
				return updatedSuggestionObj
			} else {
				return suggestion
			}
		})
		setSuggestions(updatedSuggestions)
	}

	return (
		<div className='container '>
				<header className='blog-header py-3'>
					<div className='row flex-nowrap justify-content-between align-items-center'>
						<div className='col-4 text-center'>
							<h3>Suggestion Forums</h3>
						</div>
						<div className='col-4 d-flex justify-content-end align-items-center'>
							<Search suggestions={suggestions} term={search} searchKeyword={searchHandler}/>
						</div>
					</div>
				</header>
			<Filter filterResult={filterResult}/>
			<SuggestionsList suggestions={searchResult} onEdit={handleEdit} />
		</div>
	); 
};

export default SuggestionsContainer;

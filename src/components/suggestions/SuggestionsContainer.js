import { useState, useEffect } from 'react';
import SuggestionsList from '../suggestions/SuggessionsList';
import Loading from '../pages/Navbar';
// import Search from '../suggestions/Search'

const SuggestionsContainer = () => {
	const [loading, setLoading] = useState();
	const [suggestions, setSuggestions] = useState([]);
	// const [search, setSearch] = useState('')
	// const [searchResult, setSearchResult] = useState([])

	const fetchSuggestions = async () => {
		setLoading(true);

		try {
			const response = await fetch('http://localhost:9292/suggestions');
			const data = await response.json();
			setLoading(false);
			setSuggestions(data);
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

	return (
		<>
			<div className='container'>
				<header className='blog-header py-3'>
					<div className='row flex-nowrap justify-content-between align-items-center'>
						<div className='col-4 text-center'>
							<a className='blog-header-logo text-dark'>Suggestions Forum</a>
						</div>
						<div className='col-4 d-flex justify-content-end align-items-center'>
							<a className='link-secondary' href='#' aria-label='Search'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='mx-3'
									role='img'
									viewBox='0 0 24 24'
								>
									<title>Search</title>
									<circle cx='10.5' cy='10.5' r='7.5' />
									<path d='M21 21l-5.2-5.2' />
								</svg>
							</a>
						</div>
					</div>
				</header>

				<div className='nav-scroller py-1 mb-2'>
					<nav className='nav d-flex justify-content-between'>
						<a className='p-2 link-secondary' href='#'>
							Landscape
						</a>
						<a className='p-2 link-secondary' href='#'>
							Kitchen
						</a>
						<a className='p-2 link-secondary' href='#'>
							Bedroom
						</a>
						<a className='p-2 link-secondary' href='#'>
							Appliance
						</a>
						<a className='p-2 link-secondary' href='#'>
							Interior Design
						</a>
					</nav>
				</div>
			</div>
			<SuggestionsList suggestions={suggestions} />
		</>
	);
};

export default SuggestionsContainer;

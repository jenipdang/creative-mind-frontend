import '../css/Navbar.css'
import { FiLogIn } from 'react-icons/fi'
import { RiUserAddLine } from 'react-icons/ri'

const Navbar = ({storeName, slogan}) => {
	return (
		<nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo03'
					aria-controls='navbarTogglerDemo03'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse'  id='navbarTogglerDemo03'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='/'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/suggestions'>
								Suggestions Forum
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link'href='/account/signin'><FiLogIn /></a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/account/signup'><RiUserAddLine /></a>
						</li>
					</ul>
				</div>
        <a className='logo' href='/'>
					{storeName} || {slogan}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;

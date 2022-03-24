import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useGlobalContext } from '../data/context';

const Navbar1 = ({ storeName, slogan }) => {
	const { user, setUser } = useGlobalContext();
	return (
		<Navbar bg='light' expand='lg'>
			<Container fluid>
				<Navbar.Brand href='/'>
					{storeName} || {slogan}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						{user ? <Nav.Link href='/suggestions'>Suggestions Forum</Nav.Link> : null}
						{user ? <Nav.Link href='/suggestions/new'>New Suggestion</Nav.Link> : null}
					</Nav>
					<Nav>
						{user ? <NavDropdown title={user.username} id='navbarScrollingDropdown' style={{marginRight: '20px'}}>
							<NavDropdown.Item href='/signout'>
								SignOut
							</NavDropdown.Item> 
						</NavDropdown> : null}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navbar1;

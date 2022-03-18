import React from 'react'

const Filter = ({filterResult}) => {
  return (
    <div className='nav-scroller sticky-top py-1 mb-2'>
					<nav className='nav d-flex justify-content-between'>
						<a className='p-2 link-secondary' onClick={() => filterResult('All')}>
							All
						</a>
						<a className='p-2 link-secondary' onClick={() => filterResult('Landscape')}>
							Landscape
						</a>
						<a className='p-2 link-secondary' onClick={() => filterResult('Kitchen')}>
							Kitchen
						</a>
						<a className='p-2 link-secondary' onClick={() => filterResult('Bedroom')}>
							Bedroom
						</a>
						<a className='p-2 link-secondary' onClick={() => filterResult('Appliance')}>
							Appliances
						</a>
						<a className='p-2 link-secondary' onClick={() => filterResult('Livingroom')}>
							Livingroom
						</a>
						<a className='p-2 link-secondary' onClick={() => filterResult('Bathroom')}>
							Bathroom
						</a>
					</nav>
				</div>
  )
}

export default Filter
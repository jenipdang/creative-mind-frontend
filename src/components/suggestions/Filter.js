import React from 'react'

const Filter = ({filterResult}) => {
  return (
    <div className='nav-scroller py-1 mb-2'>
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
						<a className='p-2 link-secondary' onClick={() => filterResult('Appliances')}>
							Appliance
						</a>
						<a className='p-2 link-secondary' onClick={() => filterResult('Interior Design')}>
							Interior Design
						</a>
					</nav>
				</div>
  )
}

export default Filter
import React from 'react'

const Filter = ({filterResult}) => {
  return (
    <div className='nav-scroller sticky-top py-1 mb-2' style={{background: "linear-gradient(to right, #00b4db, #0083b0)"}}>
					<nav className='nav d-flex justify-content-between'>
						<a className='p-2 link-secondary text-white' onClick={() => filterResult('All')}>
							All
						</a>
						<a className='p-2 link-secondary text-white' onClick={() => filterResult('Landscape')}>
							Landscape
						</a>
						<a className='p-2 link-secondary text-white' onClick={() => filterResult('Kitchen')}>
							Kitchen
						</a>
						<a className='p-2 link-secondary text-white' onClick={() => filterResult('Bedroom')}>
							Bedroom
						</a>
						<a className='p-2 link-secondary text-white' onClick={() => filterResult('Appliance')}>
							Appliances
						</a>
						<a className='p-2 link-secondary text-white' onClick={() => filterResult('Livingroom')}>
							Livingroom
						</a>
						<a className='p-2 link-secondary text-white' onClick={() => filterResult('Bathroom')}>
							Bathroom
						</a>
					</nav>
				</div>
  )
}

export default Filter
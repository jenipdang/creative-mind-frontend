import React from 'react'

const Filter = ({filterResult}) => {
  return (
    <div className='nav-scroller sticky-top py-1 mb-2' style={{background: "linear-gradient(to right, #00b4db, #0083b0)"}}>
					<nav className='nav d-flex justify-content-between'>
						<button className='btn text-white' onClick={() => filterResult('All')}>
							All
						</button>
						<button className='btn text-white' onClick={() => filterResult('Landscape')}>
							Landscape
						</button>
						<button className='btn text-white' onClick={() => filterResult('Kitchen')}>
							Kitchen
						</button>
						<button className='btn text-white' onClick={() => filterResult('Bedroom')}>
							Bedroom
						</button>
						<button className='btn text-white' onClick={() => filterResult('Appliance')}>
							Appliances
						</button>
						<button className='btn text-white' onClick={() => filterResult('Livingroom')}>
							Livingroom
						</button>
						<button className='btn text-white' onClick={() => filterResult('Bathroom')}>
							Bathroom
						</button>
					</nav>
				</div>
  )
}

export default Filter
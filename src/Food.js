import Post from './Post';
import './style.css'
import { Link } from 'react-router-dom'

import alkahol from './images/alkahol.jpg'

function Food() {
	return(
		<div className='stomach'>
		<h1 className='theme'>Food and Recipe</h1>
        <div className='posts'>
			<div className='posts-container'>
				<Link to='/Foodsnotat60' className='post-link'>
					<Post image={alkahol} text='Foods you should not eat at 60s' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
			</div>
			
			<div className='posts-container'>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={''} text='' />
				</Link>
			</div>
      	</div>
      </div>

	)
}
export default Food;
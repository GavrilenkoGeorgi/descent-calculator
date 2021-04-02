import React from 'react'

import classes from './App.module.sass'

const App = () => {
	return <div className={classes.appLayout}>
		<header>
			Header
		</header>
		<main>
			<section>
				<h1>Content</h1>
				<p>We want our element to either span the whole width of the
					viewport, or be centered in a 600px space. You might think we could
					simply make a 600px fixed width, with an auto
					margins on either side. But since this is a post about grid,
					let’s use moar grid. (Plus, as we’ll see later,
					a fixed width won’t work anyway)</p>
			</section>
		</main>
		<footer>
				Footer
		</footer>
	</div>
}

export default App

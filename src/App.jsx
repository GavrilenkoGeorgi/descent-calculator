import React from 'react'

import Header from './components/header/Header'
import Layout from './components/layout/Layout'
import CalcPage from './components/pages/CalcPage'
import Footer from './components/footer/Footer'

import classes from './App.module.sass'

const App = () => {
	return <div className={classes.appLayout}>
		<Header />
		<Layout>
			<CalcPage />
		</Layout>
		<Footer />
	</div>
}

export default App

import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations/'
import ReactLoading from 'react-loading';
import './Preloader.css'

const Preloader = ( { type, color } ) => {
	useEffect(()=>{
		preLoaderAnim()
	},[]);
	return(
		<div className='preloader'>
		<div className='texts_container'>
			<ReactLoading type="spin" color="white" height={667} width={375} />
			<span>Embrace the power of Reading</span>
		</div>
		</div>
		)
}
export default Preloader;
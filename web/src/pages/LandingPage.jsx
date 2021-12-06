import React from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const LandingPage = () => {
	const navigator = useNavigate();  
	const linkToPageData = () => navigator('/pagedata');  
	return (
		<div>
			<h1>Landing Page.</h1> 
			<Box>
				<Button variant="contained" onClick={linkToPageData}>  
					Data 
				</Button>
			</Box>
		</div>
	)
}

export default LandingPage; 
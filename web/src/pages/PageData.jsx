import React, {useState, useEffect} from 'react'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom'; 

const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';  

const PageData = () => {
	const [data, setData] = useState(''); 
	const navigator = useNavigate(); 
	useEffect(() => {
		axios.get(URL).then((response) => {
			setData(response.data); 
		})
	})

	// const capitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
	const handleBack = () => navigator('/'); 
	const handleApprove = () => alert("This Data is Approved.");  

	return (
		<div>
			<Box>
				<Typography variant="h3"> 
					Data Page 
				</Typography>
			</Box>
			<Box mt={5}> 
				<Typography variant="h5">
					{data.name}      
				</Typography>
			</Box>
			<Box mt={10}>  
				<Button variant="contained" onClick={handleBack}> 
					Back 
				</Button>
				<Button variant="contained" sx={{ml: 2}} onClick={handleApprove}>           
					Approve  
				</Button>
			</Box>
		</div>
	)
}

export default PageData; 
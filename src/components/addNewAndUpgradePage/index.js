import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './index.css'
import {flexbox} from '@mui/system';

const AddSkill =()=>{

	const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

	return (<div className='add_skill_main_div'>
	 <Grid item xs={8}>
    <Item>
		<div>
		Add Your Skill
		<span><input placeholder='Add'/></span></div>
		</Item>
	
  </Grid>
	</div>)
}

export default AddSkill

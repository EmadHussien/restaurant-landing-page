import { Box } from '@mui/material';
import React from 'react'

function Dish(props) {
    const dishes = require("../data");
    const toBegin = dishes.superToBegin.map(item =>{
      return (
        <Box key={item.dishName}>
          <p className='about-text'>
            <strong className='dishName'>{item.dishName}</strong> <em>{item.dishPrice}</em></p>
          <p className='dishIngredients'>{item.dishIngredients}</p>
        </Box>
      );
    })

    const tenderTooth = dishes.TenderToTooth.map(item =>{
      return (
        <Box key={item.dishName}>
          <p className='about-text'>
            <strong className='dishName'>{item.dishName}</strong> <em>{item.dishPrice}</em></p>
          <p className='dishIngredients'>{item.dishIngredients}</p>
        </Box>
      );
    })
    
    const mainEvent = dishes.TheMainEvent.map(item =>{
      return (
        <Box key={item.dishName}>
          <p className='about-text'>
            <strong className='dishName'>{item.dishName}</strong> <em>{item.dishPrice}</em></p>
          <p className='dishIngredients'>{item.dishIngredients}</p>
        </Box>
      );
    })
    
    const bySide = dishes.ByTheSide.map(item =>{
      return (
        <Box key={item.dishName}>
          <p className='about-text'>
            <strong className='dishName'>{item.dishName}</strong> <em>{item.dishPrice}</em></p>
          <p className='dishIngredients'>{item.dishIngredients}</p>
        </Box>
      );
    })
    
    
  return (
    <div>
        {
          props.comName === 'begin' ? toBegin : props.comName === 'tender'? tenderTooth : 
          props.comName === 'main' ? mainEvent : bySide
  
        }      
    </div>
  )
}
export default Dish
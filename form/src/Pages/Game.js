import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function Game({ title, persons, img, description }) {
    return (
        
            <div className='game-details'>
                
                     <h5 className='game-title'>{title}</h5>
                       <h6 className='game-capacity'>{persons}</h6>

                        <img src={img} alt="" />
                       <h6 className='game-description'>{description}</h6>
                   
            </div>
        
    );
}

import './ItemCount.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({info}) {
    return (
    
      <Card sx={{ maxWidth: 345 }}>
        
        <CardMedia
          component="img"
          image={info.image}
          alt="game image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.text}
          </Typography>
        </CardContent>
      </Card>
      
    );
  }

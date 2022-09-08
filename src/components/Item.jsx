import './ItemCount.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

function Item({info}) {

    return (
    
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/idproduct/${info.id}`}>
        <CardMedia
          component="img"
          image={info.image}
          alt={info.title}
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.text}
          </Typography>
          <CardActions>
          <Button size="small">Ver Precio</Button>
          </CardActions>
        </CardContent>
      </Card>
      
    );
  }

  export default Item

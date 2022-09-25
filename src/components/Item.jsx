import './ItemCount.css'
import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import {useCartContext} from '../context/CartContext'


function Item({info}) {

    const nombre = useContext(useCartContext)
    

    return (
    
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/product/${info.id}`}>
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


// const Item = ({ info }) => {
//   const nombre = useContext(useCartContext)
//   console.log('Item: ', nombre);

//   return (
//     <Link to={ `/detalle/${info.id}` } className='game'>
//       <img src={info.image} alt="" />
//       <p> {info.title} </p>
//     </Link>
//   )
// }

  export default Item

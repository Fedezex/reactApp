import Item from './Item'
import React from 'react'
import { Grid } from '@mui/material'


const ItemList = ({data = []}) => {
    
    return (
    <Grid 
    justifyContent="center" container spacing={2} rowSpacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }}>
        {data.map((game) => (
        <Grid item xs={3}>
            <Item key={game.id} info = {game} >xs=6</Item>
        </Grid>
    ))}
    </Grid>

    //    {data.map(game => <Item key={game.id} info = {game}  />)}
        
    )

}

export default ItemList
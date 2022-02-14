import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

const Cards = ({key, price, originalPrice, title, img}) => {

  const [estadoRaised, setEstadoRaised] = useState(false)
  const [mostrarTitulo, setMostrarTitulo] = useState(false)

  const handleMouseEnter = () => {
    setEstadoRaised(true)
    setMostrarTitulo(true)
  }

  const handleMouseLeave = () => {
    setEstadoRaised(false)
    setMostrarTitulo(false)
  }
    
    return(

      <Box>
        <Card 
        id={key} 
        raised={estadoRaised} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ 
          width: 250, 
          m:3,
          }}
        >
        <CardMedia
          component="img"
          width="150"
          height="250"
          image={img}
          alt="imagen de producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          {mostrarTitulo && 
          <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>}
        </CardContent>
      </Card>
      </Box>
      
        
    )
}

export default Cards;
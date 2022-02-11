import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Cards = ({key, price, originalPrice, title, img}) => {
    
    return(
        <Card id={key} sx={{ maxWidth: 200, m:1}}>
        <CardMedia
          component="img"
          height="auto"
          image={img}
          alt="imagen de producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default Cards;
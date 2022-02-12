import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { display } from '@mui/system';


const Footer = () => {

    return(
        <Box heigth="100" sx={{
            height:"100px",
            backgroundColor:'#960025',
            color:"white",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <Typography>
                Made by Carola
            </Typography>
        </Box>

    )
};

export default Footer;
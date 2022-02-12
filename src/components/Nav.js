import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';


const Nav = ({funcionOnSubmit, funcionValorInput}) => {
    return (
        <Box
        sx={{            
            backgroundColor: '#960025',
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
            <Typography 
            variant="h6"
            component="h2"
            color="white"
            sx={{
                mr: 3,
            }}
            > 
            Meli by Carola 
            </Typography>
            <FormControl onSubmit={funcionOnSubmit} sx={{ width: '25ch', backgroundColor:"white", }}>
            <OutlinedInput onChange={funcionValorInput} placeholder="Busca un producto" />
           </FormControl>            
        </Box>
    )
}
    
    export default Nav;
import { createUnarySpacing } from '@mui/system';
import {useState, useEffect} from 'react';
import './App.css';
import Cards from './components/Cards';
import Form from './components/Form';

const App = () => {

  const [productos, setProductos] = useState([])
  const [valorBusqueda, setValorBusqueda] = useState([])  

  useEffect( () => {

    const fetchApi = async () => {
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorBusqueda}`)
      const data = await res.json()

      setProductos(data.results)
    }

    fetchApi()    
    
  }, [valorBusqueda]) 

  const handleSubmit = e => {
      e.preventDefault() 
      console.log(e.target.value)  
  }    
  
  const handleChange = e => {
       setValorBusqueda(e.target.value)
       console.log(e.target.value)
       console.log(valorBusqueda)
       console.log(productos)
       
  } 
  
  return(
    <div>
      <Form 
          funcionOnSubmit={handleSubmit} 
          funcionValorInput={handleChange}
      /> 

      <div className='container-cards'>
          {productos.map( curr => 
              <Cards 
                  key={curr.id}
                  price={curr.price}
                  originalPrice={curr.original_price}
                  title={curr.title}
                  img={curr.thumbnail}
              />
            )
          }      
      </div>


      

    </div>
  )
};

export default App;

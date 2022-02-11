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
    
  }, []) 

  const handleSubmit = e => {
      e.preventDefault()   
  }    
  
  const handleChange = e => {
       setValorBusqueda(e.target.value)
       console.log(productos)
       
  } 
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
            <label>
                <input type="text" onChange={handleChange}></input>
            </label>
            <label>
                <input type="submit"></input>
            </label>
      </form>      

      <Cards 
      key={productos.id}
      price={productos.price}
      OriginalPrice={productos.original_price}
      title={productos.title}
      img={productos.thumbnail}

      />
    </div>
  )
};

export default App;


import {Container} from 'react-bootstrap'
import Formulario from './components/Formulario'
import { categoriasProvider } from './context/CategoriasProvider'
function App() {
  

  return (
   <categoriasProvider>
    <header className="py-5">
      <h1>Buscador de Bebidas</h1>
    </header>

    <Container className='mt-5'>
      <Formulario/>
    </Container>
   
   </categoriasProvider>
  )
}

export default App

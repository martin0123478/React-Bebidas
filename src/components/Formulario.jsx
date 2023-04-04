import {Button,Form,Row,Col} from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
const Formulario = () => {

    const {categorias} = useCategorias()
  return (
    <div>
      <Form>
        <Row>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre Bebida</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Ej: Tequila, Vodka'
                        name='nombre'
                    />

                    
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label>Categotia Bebida</Form.Label>
                    <Form.Select
                    name='categoria'>
                        <option>-Selecciona Categoria-</option>
                        {categorias.map(categoria=>(
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </Form.Select>

                    
                </Form.Group>
            </Col>
        </Row>

        <Row className='justify-content-end'>
            <Col md={3}>

                <Button
                    variant='danger'
                    className='text-uppercase w-100'
                >
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Formulario

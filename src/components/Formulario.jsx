import {Button,Form,Row,Col} from 'react-bootstrap'

const Formulario = () => {
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
                    </Form.Select>

                    
                </Form.Group>
            </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Formulario

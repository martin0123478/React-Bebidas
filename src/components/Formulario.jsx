import {Button,Form,Row,Col,Alert} from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'
import { useState } from 'react'
const Formulario = () => {

    const {categorias} = useCategorias()
    const {consultarBebida} = useBebidas()
    const [busqueda,setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const [alerta,setAlerta] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return

        }
        setAlerta('')
        consultarBebida(busqueda)
    }
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
      >
        {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre Bebida</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Ej: Tequila, Vodka'
                        name='nombre'
                        value={busqueda.nombre}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]:e.target.value
                        })}
                    />

                    
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label>Categotia Bebida</Form.Label>
                    <Form.Select
                    name='categoria'
                    value={busqueda.categoria}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]:e.target.value
                        })}
                    >
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
                    type='submit'
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

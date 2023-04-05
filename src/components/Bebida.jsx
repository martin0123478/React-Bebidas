import {Col,Card,Button} from 'react-bootstrap'

const Bebida = ({bebida}) => {
  return (
    
     <Col md={6} lg={4}>
        <Card className='mb-4'>
            <Card.Img
                variant='top'
                src={bebida.strDrinkThumb}
                alt={`imagen de ${bebida.strDrink}`}
            />
            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button
                variant='warning'
                className='w-100 text-uppercase mt-2'>
                    Ver receta
                </Button>
            </Card.Body>
        </Card>
     </Col>
    
  )
}

export default Bebida

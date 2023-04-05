import {Row} from 'react-bootstrap'
import Bebida from './Bebida'
import useBebidas from "../hooks/useBebidas"

const ListadoBebidas = () => {
    const {bebidas} = useBebidas()
  return (
    <Row>
        {bebidas.map(bebida=>(
            <Bebida
            key={bebida.idKey}
            bebida={bebida}
            />
        ))}
    </Row>
  )
}

export default ListadoBebidas

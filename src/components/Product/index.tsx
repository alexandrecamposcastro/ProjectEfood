import { Card, Titulo, Descricao } from './styles'
import { ButtonAction } from '../Button/styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const Product = ({ foto, nome, descricao }: Props) => (
  <Card>
    <img src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <ButtonAction>Adicionar ao carrinho</ButtonAction>
  </Card>
)

export default Product
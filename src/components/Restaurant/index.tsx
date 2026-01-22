import { Card, Capa, Infos, Titulo, Descricao, Botao, Tag } from './styles'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  image: string
  category: string
}

const Restaurant = ({ id, title, rating, description, image, category }: Props) => (
  <Card>
    <Capa src={image} alt={title} />
    <Tag>{category}</Tag>
    <Infos>
      <div className="header-card">
        <Titulo>{title}</Titulo>
        <Titulo>{rating} <span>★</span></Titulo>
      </div>
      <Descricao>{description}</Descricao>
      <Botao to={`/perfil/${id}`}>Saiba mais</Botao>
    </Infos>
  </Card>
)

export default Restaurant
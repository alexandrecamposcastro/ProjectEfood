import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Product from '../../components/Product'
import restaurantes from '../../data/restaurantes'
import { Hero, ContainerList } from './styles'

const Perfil = () => {
  const { id } = useParams()
  const restaurante = restaurantes.find((r) => r.id === Number(id))

  if (!restaurante) return <h2>Carregando...</h2>

  return (
    <>
      <Header type="profile" />
      <Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <p className="categoria">{restaurante.tipo}</p>
          <p className="nome">{restaurante.titulo}</p>
        </div>
      </Hero>
      <div className="container">
        <ContainerList>
          {restaurante.cardapio.map((p) => (
            <Product key={p.id} foto={p.foto} nome={p.nome} descricao={p.descricao} />
          ))}
        </ContainerList>
      </div>
    </>
  )
}

export default Perfil
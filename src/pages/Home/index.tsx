import Header from '../../components/Header'
import Restaurant from '../../components/Restaurant'
import { ContainerList } from './styles'
import restaurantes from '../../data/restaurantes'

const Home = () => (
  <>
    <Header type="home" />
    <div className="container">
      <ContainerList>
        {restaurantes.map((res) => (
          <Restaurant 
            key={res.id}
            id={res.id}
            title={res.titulo}
            rating={res.avaliacao}
            description={res.descricao}
            image={res.capa}
            category={res.tipo}
          />
        ))}
      </ContainerList>
    </div>
  </>
)

export default Home
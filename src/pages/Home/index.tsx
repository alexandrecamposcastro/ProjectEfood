import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Restaurant from '../../components/Restaurant'
import { Restaurant as RestaurantType } from '../../types'

import * as S from './styles'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
      .catch((err) => console.log(err))
  }, [])

  if (restaurantes.length === 0) {
    return null
  }

  return (
    <>
      <Header type="home" />
      <div className="container">
        <S.ListContainer>
          {restaurantes.map((item) => (
            <li key={item.id}>
              <Restaurant
                id={item.id}
                capa={item.capa}
                titulo={item.titulo}
                avaliacao={item.avaliacao}
                descricao={item.descricao}
                tipo={item.tipo}
                destacado={item.destacado}
              />
            </li>
          ))}
        </S.ListContainer>
      </div>
      <Footer />
    </>
  )
}

export default Home
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { Restaurant } from '../../types'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header type="home" />
      <div className="container">
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '80px', marginBottom: '120px', listStyle: 'none', padding: 0 }}>
          {restaurantes.map((restaurante) => (
            <li key={restaurante.id} style={{ position: 'relative', border: '1px solid #E66767', background: '#fff' }}>
              <img src={restaurante.capa} alt={restaurante.titulo} style={{ width: '100%', height: '217px', objectFit: 'cover' }} />
              <div style={{ padding: '8px', color: '#E66767' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{restaurante.titulo}</h3>
                  <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {restaurante.avaliacao} <img src="/assets/estrela.png" alt="estrela" style={{width: '16px'}} />
                  </span>
                </div>
                <p style={{ margin: '16px 0', fontSize: '14px', lineHeight: '22px' }}>{restaurante.descricao}</p>
                <Link to={`/perfil/${restaurante.id}`} style={{ background: '#E66767', color: '#FFEBD9', padding: '4px 6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
                  Saiba mais
                </Link>
              </div>
              <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex' }}>
                {restaurante.destacado && (
                  <span style={{ background: '#E66767', color: '#FFEBD9', padding: '6px 10px', marginLeft: '8px', fontSize: '12px', fontWeight: 'bold' }}>Destaque da semana</span>
                )}
                <span style={{ background: '#E66767', color: '#FFEBD9', padding: '6px 10px', marginLeft: '8px', fontSize: '12px', fontWeight: 'bold' }}>{restaurante.tipo}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
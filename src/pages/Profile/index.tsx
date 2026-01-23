import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Restaurant, Product } from '../../types'
import { add, open } from '../../store'
import * as M from '../../components/Modal/styles'

const Perfil = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) return <div className="container"><h3>Carregando...</h3></div>

  return (
    <>
      <Header type="profile" />
      <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restaurant.capa})`, height: '280px', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '32px 0' }}>
          <p style={{ fontSize: '32px', fontWeight: 100 }}>{restaurant.tipo}</p>
          <h2 style={{ fontSize: '32px', fontWeight: 900 }}>{restaurant.titulo}</h2>
        </div>
      </div>

      <div className="container">
        <ul style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '32px', 
          margin: '80px 0', 
          padding: 0 
        }}>
          {restaurant.cardapio.map((prato) => (
            <li key={prato.id} style={{ background: '#E66767', color: '#FFEBD9', padding: '8px', display: 'flex', flexDirection: 'column' }}>
              <img src={prato.foto} alt={prato.nome} style={{ width: '100%', height: '167px', objectFit: 'cover' }} />
              <h3 style={{ margin: '8px 0', fontSize: '16px', fontWeight: 900 }}>{prato.nome}</h3>
              <p style={{ fontSize: '14px', marginBottom: '8px', lineHeight: '22px', flex: 1 }}>{prato.descricao.slice(0, 160)}...</p>
              <button 
                onClick={() => setSelectedProduct(prato)} 
                style={{ background: '#FFEBD9', color: '#E66767', border: 'none', width: '100%', padding: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Mais detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedProduct && (
        <M.ModalContainer>
          <M.Overlay onClick={() => setSelectedProduct(null)} />
          <M.ModalContent>
            <M.CloseButton onClick={() => setSelectedProduct(null)}>
              <img src="/assets/close.png" alt="Fechar" style={{ width: '16px', height: '16px' }} />
            </M.CloseButton>
            <img src={selectedProduct.foto} alt={selectedProduct.nome} />
            <div>
              <h3>{selectedProduct.nome}</h3>
              <p>{selectedProduct.descricao}</p>
              <p>Serve: de {selectedProduct.porcao}</p>
              <button onClick={() => { dispatch(add(selectedProduct)); dispatch(open()); setSelectedProduct(null); }}>
                Adicionar ao carrinho - {selectedProduct.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </button>
            </div>
          </M.ModalContent>
        </M.ModalContainer>
      )}
      <Footer />
    </>
  )
}

export default Perfil
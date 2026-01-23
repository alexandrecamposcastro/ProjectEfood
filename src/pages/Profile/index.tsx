import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { Restaurant, Product } from '../../types'
import * as M from '../../components/Modal/styles'

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then(setRestaurant)
  }, [id])

  if (!restaurant) return <h3>Carregando...</h3>

  return (
    <>
      <Header type="profile" />
      {/* Banner do Restaurante */}
      <div style={{ backgroundImage: `url(${restaurant.capa})`, height: '280px', backgroundSize: 'cover', position: 'relative', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px 0' }}>
        <div className="container">
          <p style={{ fontSize: '32px', fontWeight: 100 }}>{restaurant.tipo}</p>
          <h2 style={{ fontSize: '32px', fontWeight: 900 }}>{restaurant.titulo}</h2>
        </div>
      </div>

      {/* Lista de Pratos */}
      <div className="container">
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', margin: '80px 0' }}>
          {restaurant.cardapio.map((prato) => (
            <li key={prato.id} style={{ background: '#E66767', color: '#FFEBD9', padding: '8px' }}>
              <img src={prato.foto} alt={prato.nome} style={{ width: '100%', height: '167px', objectFit: 'cover' }} />
              <h3 style={{ margin: '8px 0' }}>{prato.nome}</h3>
              <p style={{ fontSize: '14px', marginBottom: '8px' }}>{prato.descricao.slice(0, 150)}...</p>
              <button onClick={() => setSelectedProduct(prato)} style={{ background: '#FFEBD9', color: '#E66767', border: 'none', width: '100%', padding: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                Mais detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal de Detalhes */}
      {selectedProduct && (
        <M.ModalContainer>
          <M.Overlay onClick={() => setSelectedProduct(null)} />
          <M.ModalContent className="container">
            <M.CloseButton onClick={() => setSelectedProduct(null)}>
              {/* O caminho deve começar com /assets/ para a Vercel achar */}
              <img src="/assets/close.png" alt="Fechar" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
            </M.CloseButton>
            <img src={selectedProduct.foto} alt={selectedProduct.nome} />
            <div>
              <h3>{selectedProduct.nome}</h3>
              <p>{selectedProduct.descricao}</p>
              <p>Serve: de {selectedProduct.porcao}</p>
              <button>Adicionar ao carrinho - R$ {selectedProduct.preco.toFixed(2).replace('.', ',')}</button>
            </div>
          </M.ModalContent>
        </M.ModalContainer>
      )}
    </>
  )
}

export default Perfil
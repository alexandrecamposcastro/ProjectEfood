import { Product } from '../../types'
import * as S from './styles'

type Props = {
  item: Product
  isVisible: boolean
  closeModal: () => void
}

const Modal = ({ item, isVisible, closeModal }: Props) => {
  if (!isVisible) return null

  return (
    <S.ModalContainer>
      <S.Overlay onClick={closeModal} />
      <S.ModalContent className="container">
        <img src={item.foto} alt={item.nome} />
        <div>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p>Serve: {item.porcao}</p>
          <button>Adicionar ao carrinho - R$ {item.preco}</button>
        </div>
        <S.CloseButton onClick={closeModal}>X</S.CloseButton>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
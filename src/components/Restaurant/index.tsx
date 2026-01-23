import * as S from './styles'

type Props = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Restaurant = ({ id, titulo, destacado, tipo, avaliacao, descricao, capa }: Props) => {
  const getDescricao = (text: string) => {
    if (text.length > 250) {
      return text.slice(0, 247) + '...'
    }
    return text
  }

  return (
    <S.Card>
      <S.Capa src={capa} alt={titulo} />
      <S.TagContainer>
        {destacado && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{tipo}</S.Tag>
      </S.TagContainer>
      <S.Infos>
        <S.TituloContainer>
          <S.Titulo>{titulo}</S.Titulo>
          <S.NotaContainer>
            <span>{avaliacao}</span>
            <img src="/assets/estrela.png" alt="estrela" />
          </S.NotaContainer>
        </S.TituloContainer>
        <S.Descricao>{getDescricao(descricao)}</S.Descricao>
        <S.Botao to={`/perfil/${id}`}>
          Saiba mais
        </S.Botao>
      </S.Infos>
    </S.Card>
  )
}

export default Restaurant
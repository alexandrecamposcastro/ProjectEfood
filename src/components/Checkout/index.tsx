import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { clear } from '../../store/reducers/cart'
import * as S from './styles'

type Props = {
  onBack: () => void
}

const Checkout = ({ onBack }: Props) => {
  const [step, setStep] = useState(1)
  const [orderId, setOrderId] = useState('')
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '', address: '', city: '', zipCode: '', number: '', complement: '',
      cardName: '', cardNumber: '', cardCode: '', expiresMonth: '', expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Obrigatório'),
      address: Yup.string().required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
      zipCode: Yup.string().required('Obrigatório'),
      number: Yup.string().required('Obrigatório'),
      cardName: Yup.string().when([], { is: () => step === 2, then: (s) => s.required('Obrigatório') }),
      cardNumber: Yup.string().when([], { is: () => step === 2, then: (s) => s.required('Obrigatório') }),
      cardCode: Yup.string().when([], { is: () => step === 2, then: (s) => s.required('Obrigatório') }),
      expiresMonth: Yup.string().when([], { is: () => step === 2, then: (s) => s.required('Obrigatório') }),
      expiresYear: Yup.string().when([], { is: () => step === 2, then: (s) => s.required('Obrigatório') })
    }),
    onSubmit: async (values) => {
      if (step === 1) {
        setStep(2)
        return
      }

      const payload = {
        products: items.map(item => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      }

      try {
        const response = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        if (response.ok) {
          const data = await response.json()
          setOrderId(data.orderId)
          dispatch(clear())
          setStep(3)
        }
      } catch (e) {
        alert('Erro ao processar pedido.')
      }
    }
  })

  return (
    <S.Container>
      <form onSubmit={form.handleSubmit}>
        {step === 1 && (
          <>
            <S.Title>Entrega</S.Title>
            <S.InputGroup>
              <label>Quem irá receber</label>
              <input name="receiver" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.receiver} />
              
              <label>Endereço</label>
              <input name="address" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.address} />
              
              <label>Cidade</label>
              <input name="city" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.city} />

              <S.Row>
                <div>
                  <label>CEP</label>
                  <input name="zipCode" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.zipCode} />
                </div>
                <div>
                  <label>Número</label>
                  <input name="number" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.number} />
                </div>
              </S.Row>

              <label>Complemento (opcional)</label>
              <input name="complement" type="text" onChange={form.handleChange} value={form.values.complement} />
            </S.InputGroup>
            
            <S.ButtonGroup>
              <S.Button type="submit">Continuar com o pagamento</S.Button>
              <S.Button type="button" onClick={onBack}>Voltar para o carrinho</S.Button>
            </S.ButtonGroup>
          </>
        )}

        {step === 2 && (
          <>
            <S.Title>Pagamento</S.Title>
            <S.InputGroup>
              <label>Nome no cartão</label>
              <input name="cardName" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.cardName} />
              
              <S.Row>
                <div style={{ flex: 2 }}>
                  <label>Número do cartão</label>
                  <input name="cardNumber" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.cardNumber} />
                </div>
                <div>
                  <label>CVV</label>
                  <input name="cardCode" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.cardCode} />
                </div>
              </S.Row>

              <S.Row>
                <div>
                  <label>Mês de vencimento</label>
                  <input name="expiresMonth" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.expiresMonth} />
                </div>
                <div>
                  <label>Ano de vencimento</label>
                  <input name="expiresYear" type="text" onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.expiresYear} />
                </div>
              </S.Row>
            </S.InputGroup>
            
            <S.ButtonGroup>
              <S.Button type="submit">Finalizar pagamento</S.Button>
              <S.Button type="button" onClick={() => setStep(1)}>Voltar para entrega</S.Button>
            </S.ButtonGroup>
          </>
        )}

        {step === 3 && (
          <div>
            <S.Title>Pedido realizado - {orderId}</S.Title>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <S.Button type="button" onClick={() => window.location.reload()}>Concluir</S.Button>
          </div>
        )}
      </form>
    </S.Container>
  )
}

export default Checkout
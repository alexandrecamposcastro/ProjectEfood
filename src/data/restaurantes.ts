import { Restaurante } from '../models'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa. Pratos frescos, exclusivos e com a qualidade Hioki Sushi.',
    capa: '/assets/sushi.png',
    cardapio: [
      {
        id: 101,
        nome: 'Sushi Tradicional',
        descricao: 'O clássico combinado de sushis variados com peixe fresco do dia.',
        foto: '/assets/sushi.png',
        porcao: '12 peças',
        preco: 45.00
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e molhos artesanais.',
    capa: '/assets/restauranteitaliano.png',
    cardapio: [
      {
        id: 201,
        nome: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida e manjericão fresco.',
        foto: '/assets/pizza.png',
        porcao: 'de 2 a 3 pessoas',
        preco: 58.90
      }
    ]
  }
]

export default restaurantes
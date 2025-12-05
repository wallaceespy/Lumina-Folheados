// Dados dos produtos corrigidos e padronizados
const products = [
  // Cordões
  {
    name: "Conjunto Cordão e Pulseira Cartie",
    price: "R$ 89,90",
    category: "cordao",
    image: "/public/assets/cordao e pulseira cartie.jpeg",
    description: "Conjunto Cordão e Pulseira"
  },
  {
    name: "Gargantilha Cruz Pedras",
    price: "R$ 39,98",
    category: "cordao",
    image: "/public/assets/Cordão Cruz c pedras.jpg",
    description: "Cruz decorada com pedras brilhantes"
  },
  {
    name: "Gargantilha Trevo Perola",
    price: "R$ 49,90",
    category: "cordao",
    image: "/public/assets/Cordão Trevo Perola.jpg",
    description: "Gargantilha Trevo Perola"
  },
  {
    name: "Gargantilha Nossa Senhora Aparecida",
    price: "R$ 39,90",
    category: "cordao",
    image: "/public/assets/cordao e gargantilha nossa senhora.jpeg",
    description: "Gargantilha Nossa Senhora"
  },
  {
    name: "Cordão com Pingente de Coração",
    price: "R$ 23,98",
    category: "cordao",
    image: "/public/assets/Corda c pingente de Coracao.jpeg",
    description: "Cordão com Pingente de Coração"
  },
  {
    name: "Cordão Corda",
    price: "R$ 69,90",
    category: "cordao",
    image: "/public/assets/Cordao-corda.jpeg",
    description: "Cordão Corda"
  },
  {
    name: "Gargantilha com Estrelas",
    price: "R$ 24,98",
    category: "cordao",
    image: "/public/assets/Gargantilha estrela c pedras.jpeg",
    description: "Gargantilha com Estrelas"
  },
  {
    name: "Gargantilha com Cruz",
    price: "R$ 23,98",
    category: "cordao",
    image: "/public/assets/Gargantilha minimalista c cruz.jpeg",
    description: "Gargantilha com Cruz"
  },
  {
    name: "Gargantilha com Brilhante",
    price: "R$ 24,98",
    category: "cordao",
    image: "/public/assets/Gargantilha minimalista c pedras.jpeg",
    description: "Gargantilha com brilhante"
  },
  {
    name: "Cordão Árvore da Vida (Banho de Prata)",
    price: "R$ 27,98",
    category: "cordao",
    image: "/public/assets/Cordao Prata Arvore da Vida.jpeg",
    description: "Cordão Árvore da Vida (Banho de Prata)"
  },
  {
    name: "Cordão Trevo Branco (Banho de Prata)",
    price: "R$ 34,98",
    category: "cordao",
    image: "/public/assets/Cordao Prata Trevo Branco.jpeg",
    description: "Cordão Trevo Branco (Banho de Prata)"
  },

  {
    name: "Cordão Duplo Inox",
    price: "R$ 34,98",
    category: "cordao",
    image: "/public/assets/Cordao duplo aço inox mar e sol.jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão com Trevo",
    price: "R$ 36,98",
    category: "cordao",
    image: "/public/assets/Trevo 1 Dourado (1).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Com Perolas",
    price: "R$ 24,98",
    category: "cordao",
    image: "/public/assets/Trevo 1 Dourado (10).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Com Argolinhas",
    price: "R$ 36,98",
    category: "cordao",
    image: "/public/assets/Trevo 1 Dourado (2).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Três Trevos",
    price: "R$ 39,98",
    category: "cordao",
    image: "/public/assets/Trevo 1 Dourado (4).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão com Coração",
    price: "R$ 39,98",
    category: "cordao",
    image: "/public/assets/Trevo 1 Dourado (5).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão",
    price: "R$ 44,98",
    category: "cordao",
    image: "/public/assets/Trevo 1 Dourado (7).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão",
    price: "R$ 29,98",
    category: "cordao",
    image: "/public/assets/Trevo 1 Dourado (9).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Borboleta",
    price: "R$ 27,98",
    category: "cordao",
    image: "/public/assets/Pulseira Borboleta (2).jpeg",
    description: "Cordão"
  },


  // Brincos
  {
    name: "Brinco Coração com Pedras",
    price: "R$ 15,98",
    category: "brinco",
    image: "/public/assets/Brinco coracao c cristais.jpeg",
    description: "Brinco Coração com Pedras"
  },
  {
    name: "Brinco Coração com Pedra Rosa",
    price: "R$ 23,98",
    category: "brinco",
    image: "/public/assets/Brinco de Coracao c pedra rosa.jpeg",
    description: "Brinco Coração com Pedra Rosa"
  },
  {
    name: "Brinco Coração com Pedra Vermelha",
    price: "R$ 23,98",
    category: "brinco",
    image: "/public/assets/Brinco de Coracao c pedra vermelha.jpeg",
    description: "Brinco Coração com Pedra Vermelha"
  },
  {
    name: "Brinco Trevo Branco (Banho de Prata)",
    price: "R$ 48,90",
    category: "brinco",
    image: "/public/assets/Brinco prata trevo branco.jpeg",
    description: "Brinco Trevo Branco (Banho de Prata)"
  },
  {
    name: "Brinco Pedra Colorida",
    price: "R$ 72,90",
    category: "brinco",
    image: "/public/assets/Brinco com pedras coloridas.jpeg",
    description: "Brincos com pedras coloridas brilhantes"
  },
  {
    name: "Brinco com Pedras",
    price: "R$ 35,90",
    category: "brinco",
    image: "/public/assets/Brinco com pedras.jpeg",
    description: "Brinco com Pedras"
  },
  {
    name: "Brinco Floco de Neve",
    price: "R$ 19,98",
    category: "brinco",
    image: "/public/assets/Brinco Floco de Neve.jpeg",
    description: "Brinco Floco de Neve"
  },
  {
    name: "Brinco Floral",
    price: "R$ 29,90",
    category: "brinco",
    image: "/public/assets/Brinco Floral.jpeg",
    description: "Brinco Floral"
  },
  {
    name: "Brinco Trevo Preto",
    price: "R$ 23,98",
    category: "brinco",
    image: "/public/assets/Brinco Trevo preto.jpeg",
    description: "Brinco Trevo Preto"
  },
  {
    name: "Brinco Folhas Tropicais",
    price: "R$ 29,98",
    category: "brinco",
    image: "/public/assets/Brinco F. O. Folhas Tropicais.jpeg",
    description: "Brinco Folhas Tropicais"
  },
  {
    name: "Brinco Folhas com Pedras",
    price: "R$ 19,98",
    category: "brinco",
    image: "/public/assets/Brinco F.O Folhas com Pedras Preta.jpeg",
    description: "Brinco Folhas com Pedras"
  },
  {
    name: "Brinco Flores Tropicais com Pedras",
    price: "R$ 19,98",
    category: "brinco",
    image: "/public/assets/Brincos F.ouro Flores tropicais com pedras.jpeg",
    description: "Brinco Flores Tropicais com Pedras"
  },
  {
    name: "Brinco Argola Coração com Pedra",
    price: "R$ 19,98",
    category: "brinco",
    image: "/public/assets/Brinco Folheado ouro Argolinha de Coração Preto.jpeg",
    description: "Brinco Argola Coração com Pedra"
  },
  {
    name: "Brinco Minimalista",
    price: "R$ 19,98",
    category: "brinco",
    image: "/public/assets/Brinco F.O Minimalista.jpeg",
    description: "Brinco Minimalista"
  },
{  
    name: "Brinco",
    price: "R$ 29,98",
    category: "brinco",
    image: "/public/assets/Brincos Folheado a ouro quadrado minimalista.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata Coração",
    price: "R$ 19,98",
    category: "brinco",
    image: "/public/assets/Brinco prata 1.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 29,98",
    category: "brinco",
    image: "/public/assets/Brinco prata argolinha.jpeg",
    description: "Brinco Folheado Prata"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 19,98",
    category: "brinco",
    image: "/public/assets/brinco prata coracao.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 29,98",
    category: "brinco",
    image: "/public/assets/Brinco prata flor com pedra.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 23,98",
    category: "brinco",
    image: "/public/assets/Pulseira Borboleta (4).jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco",
    price: "R$ 29,98",
    category: "brinco",
    image: "/public/assets/Brinco prata flor.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Folheado Ouro",
    price: "R$ 34,98",
    category: "brinco",
    image: "/public/assets/Brinco F.O Minimalista Noite 2.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco",
    price: "R$ 35,98",
    category: "brinco",
    image: "/public/assets/Brinco F.O Minimalista Noite.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco",
    price: "R$ 35,98",
    category: "brinco",
    image: "/public/assets/Pulseira Borboleta (3).jpeg",
    description: "Brinco"
  },

  // Pulseiras
  {
    name: "Pulseira  Dourada com Flores com Pedras",
    price: "R$ 19,98",
    category: "pulseira",
    image: "/public/assets/Pulseira c flore com pedras.jpeg",
    description: "Pulseira dourada com Flores com Pedras"
  },
  {
    name: "Pulseira Dourada com Argolinhas",
    price: "R$ 23,98",
    category: "pulseira",
    image: "/public/assets/Pulseira com argolinhas.jpeg",
    description: "Pulseira Dourada com Argolinhas"
  },
  {
    name: "Pulseira Dourada com Coração",
    price: "R$ 24,98",
    category: "pulseira",
    image: "/public/assets/Pulseira com coracao.jpeg",
    description: "Pulseira Dourda com Coração"
  },
  {
    name: "Pulseira Dourada com Folhas",
    price: "R$ 24,98",
    category: "pulseira",
    image: "/public/assets/Pulseira com Folhas.jpeg",
    description: "Pulseira com corrente dupla em dourado"
  },
  {
    name: "Pulseira Dourada Coração e Pedras",
    price: "R$ 24,98",
    category: "pulseira",
    image: "/public/assets/Pulseira coracao e pedras.jpeg",
    description: "Pulseira estilo Pandora em prata"
  },
  {
    name: "Pulseira Dourada Estrelas e Corações",
    price: "R$ 19,98",
    category: "pulseira",
    image: "/public/assets/Pulseira estralas e coracoes.jpeg",
    description: "Pulseira Dourada Estrelas e Corações"
  },
  {
    name: "Pulseira Dourada Minimalista",
    price: "R$ 29,98",
    category: "pulseira",
    image: "/public/assets/Pulseira Minimalista.jpeg",
    description: "Pulseira Dourada Minimalista"
  },
  {
    name: "Pulseira Dourada Trevo Verde",
    price: "R$ 23,98",
    category: "pulseira",
    image: "/public/assets/Pulseira Trevo verde.jpeg",
    description: "Pulseira Dourada Trevo verde"
  },

  {
    name: "Pulseira Pandora Folheada a Ouro",
    price: "R$ 49,98",
    category: "pulseira",
    image: "/public/assets/Pulseira Pandora.jpeg",
    description: "Pulseira Pandora"
  },

  {
    name: "Pulseira",
    price: "R$ 23,98",
    category: "pulseira",
    image: "/public/assets/Pulseira de bolinhas.jpeg",
    description: "Pulseira"
  },

  {
    name: "Pulseira com Pérola",
    price: "R$19,98",
    category: "pulseira",
    image: "/public/assets/WhatsApp Image 2025-11-24 at 11.37.11 (1).jpeg",
    description: "Pulseira"
  },

  {
    name: "Pulseira com Coração",
    price: "R$23,98",
    category: "pulseira",
    image: "/public/assets/WhatsApp Image 2025-11-24 at 11.37.11.jpeg",
    description: "Pulseira"
  },

  {
    name: "Pulseira Borboleta",
    price: "R$23,98",
    category: "pulseira",
    image: "/public/assets/Pulseira Borboleta (1).jpeg",
    description: "Pulseira"
  },

  // Anéis
  {
    name: "Anel com Pedras",
    price: "R$ 23,98",
    category: "anel",
    image: "/public/assets/Anel F. ouro com pedras.jpeg",
    description: "Anel com Pedras"
  },
  {
    name: "Anel",
    price: "R$ 29,98",
    category: "anel",
    image: "/public/assets/Anel 2.jpeg",
    description: "Anel em dourado com pedras"
  },
  {
    name: "Anel",
    price: "R$ 24,98",
    category: "anel",
    image: "/public/assets/Anel 3.jpeg",
    description: "Anel com coração"
  },
  {
    name: "Anel Flor",
    price: "R$ 29,98",
    category: "anel",
    image: "/public/assets/Anel 4.jpeg",
    description: "Anel com design floral"
  },
  {
    name: "Anel",
    price: "R$ 29,98",
    category: "anel",
    image: "/public/assets/Anel 5.jpeg",
    description: "Anel  com design coração"
  },
  {
    name: "Anel",
    price: "R$ 24,98",
    category: "anel",
    image: "/public/assets/Anel 6.jpeg",
    description: "Anel com pedras"
  },
  {
    name: "Anel",
    price: "R$ 29,98",
    category: "anel",
    image: "/public/assets/Anel 7.jpeg",
    description: "Anel com design Laço"
  },
  {
    name: "Anel",
    price: "R$ 34,98",
    category: "anel",
    image: "/public/assets/Anel 8.jpeg",
    description: "Anel Borboleta"
  }
];

// Gera IDs automáticos e torna global
const productsWithId = products.map((product, index) => ({
  id: index + 1,
  ...product
}));

window.products = productsWithId;

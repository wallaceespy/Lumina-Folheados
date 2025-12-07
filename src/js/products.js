// Dados dos produtos corrigidos e padronizados
const products = [
  // Cordões
  {
    name: "Conjunto Cordão e Pulseira Cartie",
    price: "R$ 89,90",
    category: "cordao",
    image: "/assets/cordao e pulseira cartie.jpeg",
    description: "Conjunto Cordão e Pulseira"
  },
  {
    name: "Gargantilha Cruz Pedras",
    price: "R$ 39,98",
    category: "cordao",
    image: "/assets/cordao cruz c pedras.jpg",
    description: "Cruz decorada com pedras brilhantes"
  },
  {
    name: "Gargantilha Trevo Perola",
    price: "R$ 49,90",
    category: "cordao",
    image: "/assets/cordao trevo perola.jpg",
    description: "Gargantilha Trevo Perola"
  },
  {
    name: "Gargantilha Nossa Senhora Aparecida",
    price: "R$ 39,90",
    category: "cordao",
    image: "/assets/cordao e gargantilha nossa senhora.jpeg",
    description: "Gargantilha Nossa Senhora"
  },
  {
    name: "Cordão com Pingente de Coração",
    price: "R$ 23,98",
    category: "cordao",
    image: "/assets/corda c pingente de coracao.jpeg",
    description: "Cordão com Pingente de Coração"
  },
  {
    name: "Cordão Corda",
    price: "R$ 69,90",
    category: "cordao",
    image: "/assets/cordao-corda.jpeg",
    description: "Cordão Corda"
  },
  {
    name: "Gargantilha com Estrelas",
    price: "R$ 24,98",
    category: "cordao",
    image: "/assets/gargantilha estrela c pedras.jpeg",
    description: "Gargantilha com Estrelas"
  },
  {
    name: "Gargantilha com Cruz",
    price: "R$ 23,98",
    category: "cordao",
    image: "/assets/gargantilha minimalista c cruz.jpeg",
    description: "Gargantilha com Cruz"
  },
  {
    name: "Gargantilha com Brilhante",
    price: "R$ 24,98",
    category: "cordao",
    image: "/assets/gargantilha minimalista c pedras.jpeg",
    description: "Gargantilha com brilhante"
  },
  {
    name: "Cordão Árvore da Vida (Banho de Prata)",
    price: "R$ 27,98",
    category: "cordao",
    image: "/assets/cordao prata arvore da vida.jpeg",
    description: "Cordão Árvore da Vida (Banho de Prata)"
  },
  {
    name: "Cordão Trevo Branco (Banho de Prata)",
    price: "R$ 34,98",
    category: "cordao",
    image: "/assets/cordao rata trevo branco.jpeg",
    description: "Cordão Trevo Branco (Banho de Prata)"
  },

  {
    name: "Cordão Duplo Inox",
    price: "R$ 34,98",
    category: "cordao",
    image: "/assets/cordao duplo aço inox mar e sol.jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão com Trevo",
    price: "R$ 36,98",
    category: "cordao",
    image: "/assets/cordao (1).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Com Perolas",
    price: "R$ 24,98",
    category: "cordao",
    image: "/assets/cordao (10).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Com Argolinhas",
    price: "R$ 36,98",
    category: "cordao",
    image: "/assets/cordao (2).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Três Trevos",
    price: "R$ 39,98",
    category: "cordao",
    image: "/assets/cordao (4).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão com Coração",
    price: "R$ 39,98",
    category: "cordao",
    image: "/assets/cordao (5).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão",
    price: "R$ 44,98",
    category: "cordao",
    image: "/assets/cordao (7).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão",
    price: "R$ 29,98",
    category: "cordao",
    image: "/assets/cordao (9).jpeg",
    description: "Cordão"
  },

  {
    name: "Cordão Borboleta",
    price: "R$ 27,98",
    category: "cordao",
    image: "/assets/pulseira borboleta (2).jpeg",
    description: "Cordão"
  },


  // Brincos
  {
    name: "Brinco Coração com Pedras",
    price: "R$ 15,98",
    category: "brinco",
    image: "/assets/brinco coracao c cristais.jpeg",
    description: "Brinco Coração com Pedras"
  },
  {
    name: "Brinco Coração com Pedra Rosa",
    price: "R$ 23,98",
    category: "brinco",
    image: "/assets/brinco de coracao c pedra rosa.jpeg",
    description: "Brinco Coração com Pedra Rosa"
  },
  {
    name: "Brinco Coração com Pedra Vermelha",
    price: "R$ 23,98",
    category: "brinco",
    image: "/assets/brinco de coracao c pedra vermelha.jpeg",
    description: "Brinco Coração com Pedra Vermelha"
  },
  {
    name: "Brinco Trevo Branco (Banho de Prata)",
    price: "R$ 48,90",
    category: "brinco",
    image: "/assets/brinco prata trevo branco.jpeg",
    description: "Brinco Trevo Branco (Banho de Prata)"
  },
  {
    name: "Brinco Pedra Colorida",
    price: "R$ 72,90",
    category: "brinco",
    image: "/assets/brinco com pedras coloridas.jpeg",
    description: "Brincos com pedras coloridas brilhantes"
  },
  {
    name: "Brinco com Pedras",
    price: "R$ 35,90",
    category: "brinco",
    image: "/assets/brinco com pedras.jpeg",
    description: "Brinco com Pedras"
  },
  {
    name: "Brinco Floco de Neve",
    price: "R$ 19,98",
    category: "brinco",
    image: "/assets/brinco floco de neve.jpeg",
    description: "Brinco Floco de Neve"
  },
  {
    name: "Brinco Floral",
    price: "R$ 29,90",
    category: "brinco",
    image: "/assets/brinco floral.jpeg",
    description: "Brinco Floral"
  },
  {
    name: "Brinco Trevo Preto",
    price: "R$ 23,98",
    category: "brinco",
    image: "/assets/brinco trevo preto.jpeg",
    description: "Brinco Trevo Preto"
  },
  {
    name: "Brinco Folhas Tropicais",
    price: "R$ 29,98",
    category: "brinco",
    image: "/assets/brinco f o folhas tropicais.jpeg",
    description: "Brinco Folhas Tropicais"
  },
  {
    name: "Brinco Folhas com Pedras",
    price: "R$ 19,98",
    category: "brinco",
    image: "/assets/brinco f o folhas com pedras .jpeg",
    description: "Brinco Folhas com Pedras"
  },
  {
    name: "Brinco Flores Tropicais com Pedras",
    price: "R$ 19,98",
    category: "brinco",
    image: "/assets/brincos f ouro flores tropicais com pedras.jpeg",
    description: "Brinco Flores Tropicais com Pedras"
  },
  {
    name: "Brinco Argola Coração com Pedra",
    price: "R$ 19,98",
    category: "brinco",
    image: "/assets/brinco folheado ouro argolinha de coração preto.jpeg",
    description: "Brinco Argola Coração com Pedra"
  },
  {
    name: "Brinco Minimalista",
    price: "R$ 19,98",
    category: "brinco",
    image: "/assets/brinco f o  minimalista.jpeg",
    description: "Brinco Minimalista"
  },
{  
    name: "Brinco",
    price: "R$ 29,98",
    category: "brinco",
    image: "/assets/brincos folheado a ouro quadrado minimalista.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata Coração",
    price: "R$ 19,98",
    category: "brinco",
    image: "/assets/brinco prata 1.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 29,98",
    category: "brinco",
    image: "/assets/brinco prata argolinha.jpeg",
    description: "Brinco Folheado Prata"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 19,98",
    category: "brinco",
    image: "/assets/brinco prata coracao.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 29,98",
    category: "brinco",
    image: "/assets/brinco prata flor com pedra.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Banho de Prata",
    price: "R$ 23,98",
    category: "brinco",
    image: "/assets/pulseira borboleta (4).jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco",
    price: "R$ 29,98",
    category: "brinco",
    image: "/assets/brinco prata flor.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco Folheado Ouro",
    price: "R$ 34,98",
    category: "brinco",
    image: "/assets/brinco f o  minimalista noite 2.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco",
    price: "R$ 35,98",
    category: "brinco",
    image: "/assets/brinco f o  minimalista noite.jpeg",
    description: "Brinco"
  },

  {  
    name: "Brinco",
    price: "R$ 35,98",
    category: "brinco",
    image: "/assets/pulseira borboleta (3).jpeg",
    description: "Brinco"
  },

  // Pulseiras
  {
    name: "Pulseira  Dourada com Flores com Pedras",
    price: "R$ 19,98",
    category: "pulseira",
    image: "/assets/pulseira c flore com pedras.jpeg",
    description: "Pulseira dourada com Flores com Pedras"
  },
  {
    name: "Pulseira Dourada com Argolinhas",
    price: "R$ 23,98",
    category: "pulseira",
    image: "/assets/pulseira com argolinhas.jpeg",
    description: "Pulseira Dourada com Argolinhas"
  },
  {
    name: "Pulseira Dourada com Coração",
    price: "R$ 24,98",
    category: "pulseira",
    image: "/assets/pulseira com coracao.jpeg",
    description: "Pulseira Dourda com Coração"
  },
  {
    name: "Pulseira Dourada com Folhas",
    price: "R$ 24,98",
    category: "pulseira",
    image: "/assets/pulseira com folhas.jpeg",
    description: "Pulseira com corrente dupla em dourado"
  },
  {
    name: "Pulseira Dourada Coração e Pedras",
    price: "R$ 24,98",
    category: "pulseira",
    image: "/assets/pulseira coracao e pedras.jpeg",
    description: "Pulseira estilo Pandora em prata"
  },
  {
    name: "Pulseira Dourada Estrelas e Corações",
    price: "R$ 19,98",
    category: "pulseira",
    image: "/assets/pulseira estralas e coracoes.jpeg",
    description: "Pulseira Dourada Estrelas e Corações"
  },
  {
    name: "Pulseira Dourada Minimalista",
    price: "R$ 29,98",
    category: "pulseira",
    image: "/assets/pulseira minimalista.jpeg",
    description: "Pulseira Dourada Minimalista"
  },
  {
    name: "Pulseira Dourada Trevo Verde",
    price: "R$ 23,98",
    category: "pulseira",
    image: "/assets/pulseira trevo verde.jpeg",
    description: "Pulseira Dourada Trevo verde"
  },

  {
    name: "Pulseira Pandora Folheada a Ouro",
    price: "R$ 49,98",
    category: "pulseira",
    image: "/assets/pulseira pandora.jpeg",
    description: "Pulseira Pandora"
  },

  {
    name: "Pulseira",
    price: "R$ 23,98",
    category: "pulseira",
    image: "/assets/pulseira de bolinhas.jpeg",
    description: "Pulseira"
  },

  {
    name: "Pulseira com Pérola",
    price: "R$19,98",
    category: "pulseira",
    image: "/assets/WhatsApp Image 2025-11-24 at 11.37.11 (1).jpeg",
    description: "Pulseira"
  },

  {
    name: "Pulseira com Coração",
    price: "R$23,98",
    category: "pulseira",
    image: "/assets/WhatsApp Image 2025-11-24 at 11.37.11.jpeg",
    description: "Pulseira"
  },

  {
    name: "Pulseira Borboleta",
    price: "R$23,98",
    category: "pulseira",
    image: "/assets/pulseira borboleta (1).jpeg",
    description: "Pulseira"
  },

  // Anéis
  {
    name: "Anel com Pedras",
    price: "R$ 23,98",
    category: "anel",
    image: "/assets/anel f ouro com pedras.jpeg",
    description: "Anel com Pedras"
  },
  {
    name: "Anel",
    price: "R$ 29,98",
    category: "anel",
    image: "/assets/anel 2.jpeg",
    description: "Anel em dourado com pedras"
  },
  {
    name: "Anel",
    price: "R$ 24,98",
    category: "anel",
    image: "/assets/anel 3.jpeg",
    description: "Anel com coração"
  },
  {
    name: "Anel Flor",
    price: "R$ 29,98",
    category: "anel",
    image: "/assets/anel 4.jpeg",
    description: "Anel com design floral"
  },
  {
    name: "Anel",
    price: "R$ 29,98",
    category: "anel",
    image: "/assets/anel 5.jpeg",
    description: "Anel  com design coração"
  },
  {
    name: "Anel",
    price: "R$ 24,98",
    category: "anel",
    image: "/assets/anel 6.jpeg",
    description: "Anel com pedras"
  },
  {
    name: "Anel",
    price: "R$ 29,98",
    category: "anel",
    image: "assets/anel 7.jpeg",
    description: "Anel com design Laço"
  },
  {
    name: "Anel",
    price: "R$ 34,98",
    category: "anel",
    image: "/assets/anel 8.jpeg",
    description: "Anel Borboleta"
  }
];

// Gera IDs automáticos e torna global
const productsWithId = products.map((product, index) => ({
  id: index + 1,
  ...product
}));

window.products = productsWithId;

// model.js
class Jogo {
  constructor(id, nome, plataformas, genero, anoLancamento, preco, imagem) {
      this.id = id;
      this.nome = nome;
      this.plataformas = plataformas;
      this.genero = genero;
      this.anoLancamento = anoLancamento;
      this.preco = preco;
      this.imagem = imagem;
  }
}

// Resto do código permanece inalterado

  
  const jogos = [
    {
      "id": 1,
      "nome": "Cyberpunk 2077",
      "plataformas": "Xbox Series X/S, Xbox One, PC",
      "genero": "RPG de ação",
      "anoLancamento": 2020,
      "preco": "R$: 180",
      "imagem": "https://proxy.olhardigital.com.br/wp-content/uploads/2020/12/cyberpunk.png"
    },
    {
      "id": 2,
      "nome": "Halo Infinite",
      "plataformas": "Xbox Series X/S, Xbox One, PC",
      "genero": "Tiro em primeira pessoa",
      "anoLancamento": 2021,
      "preco": "R$: 200",
      "imagem": "https://store-images.s-microsoft.com/image/apps.50670.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.d205e025-5444-4eb1-ae46-571ae6895928?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF"
    },
    {
      "id": 3,
      "nome": "Forza Horizon 5",
      "plataformas": "Xbox Series X/S, Xbox One, PC",
      "genero": "Corrida",
      "anoLancamento": 2021,
      "preco": "R$: 350",
      "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1698342317"
    },
    {
      "id": 4,
      "nome": "Red Dead Redemption 2",
      "plataformas": "Xbox Series X/S, Xbox One",
      "genero": "Ação-Aventura",
      "anoLancamento": 2018,
      "preco": "R$: 300",
      "imagem": "https://oyuncustore.net/wp-content/uploads/2019/11/red_dead_redemption_2_3_1-min.jpg"
    },
    {
      "id": 5,
      "nome": "Resident Evil Village",
      "plataformas": "Xbox Series X/S, Xbox One",
      "genero": "Jogo eletrônico de simulação, Jogo eletrônico de esporte, Jogo de simulação",
      "anoLancamento": 2021,
      "preco": "R$: 380",
      "imagem": "https://i.ytimg.com/vi/RhEL7CI2lms/sddefault.jpg"
    },
    {
      "id": 6,
      "nome": "FIFA 23 ",
      "plataformas": "PlayStation 5, PlayStation 4, Nintendo Switch, Xbox One, Xbox Series X e Series S, Microsoft Windows, Google Stadia",
      "genero": "Survival Horror",
      "anoLancamento": 2022,
      "preco": "R$: 380",
      "imagem": "https://cdn2.unrealengine.com/ea-sports-fifa-23-is-coming-to-the-epic-games-store-1920x1080-398e19351a82.jpg"
    },
    {
      "id": 7,
      "nome": "Assassin's Creed Valhalla",
      "plataformas": "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X e Series S, Microsoft Windows, Google Stadia",
      "genero": "RPG eletrônico, Jogo eletrônico de ação e aventura, MAIS",
      "anoLancamento": 2020,
      "preco": "R$: 320",
      "imagem": "https://image.api.playstation.com/vulcan/ap/rnd/202008/0723/i2ICFMr0Ius6qtYYD9GNrY68.jpg"
    },
    {
      "id": 8,
      "nome": "Grand Theft Auto V",
      "plataformas": "PlayStation 5, PlayStation 4, Xbox One, PlayStation 3, MAIS",
      "genero": "Jogo eletrônico de ação e aventura, Tiro em terceira pessoa, Jogabilidade não linear",
      "anoLancamento": 2013,
      "preco": "R$: 180",
      "imagem": "https://t.ctcdn.com.br/3DEs5RmSBHOMfVdyQGLSidyGj-Y=/291x28:1737x842/1446x813/smart/i328744.jpeg"
    },
    {
      "id": 9,
      "nome": "Mortal Kombat 11",
      "plataformas": "PlayStation 4, PlayStation 5, Nintendo Switch, MAIS",
      "genero": "Jogo eletrônico de luta, Jogo eletrônico de ação, Jogo eletrônico de aventura",
      "anoLancamento": 2019,
      "preco": "R$: 220",
      "imagem": "https://image.api.playstation.com/vulcan/ap/rnd/202009/0123/3wWco6bzAD2jEtFdImdKAZZ8.jpg"
    },
    {
      "id": 10,
      "nome": "Far cry 6",
      "plataformas": "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X e Series S, Google Stadia, Microsoft Windows, Amazon Luna",
      "genero": "Tiro em primeira pessoa, Jogo eletrônico de ação e aventura, Adventure",
      "anoLancamento": 2021,
      "preco": "R$: 250",
      "imagem": "https://s2-techtudo.glbimg.com/o9RidUoqRCgzvybWSphrnpUQ11E=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/Q/J/Lcu6y0SPWASdIWgqDybA/far-cry-6.jpg"
    },
    {
      "id": 11,
      "nome": "F1 2022",
      "plataformas": "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X e Series S, Microsoft Windows",
      "anoLancamento": 2022,
      "genero": "Corrida",
      "preco": "R$: 255",
      "imagem": "https://i.ytimg.com/vi/i7StIt2JdIY/maxresdefault.jpg"
    },
    {
      "id": 12,
      "nome": " Moto GP 22",
      "plataformas": " PlayStation 5, Nintendo Switch, Xbox One, PlayStation 4, Microsoft Windows, Xbox Series X e Series Ss",
      "genero": "Corrida",
      "anoLancamento": 2022,
      "preco": "R$: 255",
      "imagem": "https://images5.alphacoders.com/123/1233251.jpg"
    },
    {
      "id": 13,
      "nome": "Battlefield V",
      "plataformas": "PlayStation 4, Xbox One, Microsoft Windows, Xbox Cloud Gaming",
      "genero": "Tiro em primeira pessoa",
      "anoLancamento": 2022,
      "preco": "R$: 285",
      "imagem": "https://i.pinimg.com/originals/45/ba/c2/45bac22c53f071b369d494c028a81a4e.jpg"
    },
    {
      "id": 14,
      "nome": "BF 2042",
      "plataformas": "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X e Series S, Microsoft Windows, Xbox Cloud Gaming",
"genero": "Tiro em primeira pessoa",
      "anoLancamento": 2021,
      "preco": "R$: 235",
      "imagem": "https://ultimaficha.com.br/wp-content/uploads/2021/07/bf-2042-section-bg-homepage-hero-keyart-xl.jpg.adapt_.320w.jpg"
    },
    {
      "id": 15,
      "nome": "God of War Ragnarök",
      "plataformas": "PlayStation 5, PlayStation 4",
"genero": "Jogo eletrônico de ação e aventura, Jogo eletrônico de luta, RPG eletrônico, Jogo eletrônico de tiro, Hack and slash",
      "anoLancamento": 2022,
      "preco": "R$: 295",
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxF9FQWwWjM5cYCAKBVcXjHGv9TZRPiGd30A&usqp=CAU"
    },
    {
      "id": 16,
      "nome": "The last of us 2",
      "plataformas": "PlayStation 5, PlayStation 4",
"genero": "Jogo eletrônico de ação e aventura, Jogo eletrônico de tiro, Survival horror",
      "anoLancamento": 2020,
      "preco": "R$: 295",
      "imagem": "https://s2-techtudo.glbimg.com/4FFpdIOy45pJHjXGFMhKCi32FDk=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/n/3/ql6aJbRPam63wA6FtKbA/the-last-of-us-part-2-arte-ellie-noite.jpg"
    },
    {
      "id": 17,
      "nome": "Horizon",
      "plataformas": "PlayStation 5, PlayStation 4",
"genero": "Jogo eletrônico de ação e aventura, Jogo eletrônico de tiro, Survival horror",
      "anoLancamento": 2022,
      "preco": "R$: 295",
      "imagem": "https://upload.wikimedia.org/wikipedia/pt/d/d0/Horizon_Zero_Dawn_capa.png"
    },
    {
      "id": 18,
      "nome": "Batman Arkham Knight",
      "plataformas": "PlayStation 4, Nintendo Switch, Xbox One, Xbox Cloud Gaming, Microsoft Windows, Linux, Amazon Luna, Mac OS",
"genero": "Jogo eletrônico de ação e aventura, Jogo eletrônico de luta, Adventurer",
      "anoLancamento": 2015,
      "preco": "R$: 120",
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNUf7Ex58aDr_QGcVwoAUN2K6s7mw3c-KuoXFUsYo6GFEtVR3KDgNh6-MBjeAb2g_IoY&usqp=CAU"
    },
    {
      "id": 19,
      "nome": "Quantum Break",
      "plataformas": "Xbox One, Microsoft Windows, Windows 10",
"genero": "Tiro em terceira pessoa, Jogo eletrônico de ação e aventura",
      "anoLancamento": 2016,
      "preco": "R$: 180",
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2P0mCumloq36uBFhTRz7Oh4dnZNSuVH6QrKhL69uAERaKmq3kgtCqZKS9U2_FVfdIwo&usqp=CAU"
    },
    {
      "id": 20,
      "nome": "Starfield",
      "plataformas": "Xbox Series X e Series S, Xbox Cloud Gaming, Microsoft Windows",
"genero": "Jogo eletrônico de tiro, RPG eletrônico de ação, Jogo eletrônico de ação e aventura, Jogabilidade não linear",
      "anoLancamento": 2023,
      "preco": "R$: 380",
      "imagem": "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/08/starfield_capa__00130w.jpg"
    },
    {
      "id": 21,
      "nome": "Forza Motorsport",
      "plataformas": "Xbox Series X e Series S, Microsoft Windows",
"genero": "Jogo eletrônico de corrida, MAIS",
      "anoLancamento": 2023,
      "preco": "R$: 480",
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZSngUn-br8A0K2eX6XiH_V0ll82StwXngZuTH0kcUnjs2je-gzFoJFloaTnR1wnlAoU&usqp=CAU"
    },
    {
      "id": 22,
      "nome": "Need for speed hot pursuit",
      "plataformas": "PlayStation 3, Android, Microsoft Windows, Xbox 360, Wii, iOS, Java, Windows Phone, LG webOS",
      "anoLancamento": 2010,
      "preco": "R$: 100",
      "imagem": "https://images4.alphacoders.com/125/125664.jpg"
    }


  ];
  
  function listarJogos() {
    return jogos;
  }
  
  function adicionarJogo(jogo) {
    jogos.push(jogo);
}

function atualizarJogo(id, nome, plataformas, genero, anoLancamento, preco, imagem) {
    const jogo = jogos.find(j => j.id === parseInt(id));
    if (jogo) {
        jogo.nome = nome;
        jogo.plataformas = plataformas;
        jogo.genero = genero;
        jogo.anoLancamento = anoLancamento;
        jogo.preco = preco;
        jogo.imagem = imagem; // Atualize a imagem
        return jogo;
    }
    return null;
}

  
  function excluirJogo(id) {
    const index = jogos.findIndex(j => j.id === parseInt(id));
    if (index !== -1) {
      const jogoExcluido = jogos.splice(index, 1);
      return jogoExcluido[0];
    }
    return null;
  }
  
  module.exports = {
    Jogo,
    listarJogos,
    adicionarJogo,
    atualizarJogo,
    excluirJogo,
  };
  
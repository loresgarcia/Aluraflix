var list = [
  {
    nome: "Harry Potter e a Pedra Filosofal",
    imagem:
      "https://vistapointe.net/images/harry-potter-and-the-philosophers-stone-4.jpg",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_e_a_Pedra_Filosofal_(filme)"
  },
  {
    nome: "Harry Potter e a Câmara Secreta",
    imagem:
      "https://i.pinimg.com/originals/f1/6a/d3/f16ad3ec88c9b60cf7e1681c521a8b01.jpg",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets_(filme)"
  },
  {
    nome: "Harry Potter e o Prisioneiro de Azkaban",
    imagem:
      "https://img.elo7.com.br/product/zoom/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_e_o_Prisioneiro_de_Azkaban_(filme)"
  },
  {
    nome: "Harry Potter e o Cálice de Fogo",
    imagem:
      "https://s3images.coroflot.com/user_files/individual_files/685449_rb9rktqv2fmc_0u6yih87ugz8.jpg",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_e_o_C%C3%A1lice_de_Fogo_(filme)"
  },
  {
    nome: "Harry Potter e a Ordem da Fênix",
    imagem:
      "https://www.coverwhiz.com/uploads/movies/harry-potter-and-the-order-of-the-phoenix.jpg",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix_(filme)"
  },
  {
    nome: "Harry Potter e o Enigma do Príncipe",
    imagem:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/half-blood-prince-1597692497.jpg?crop=1xw:1xh;center,top&resize=480:*",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince_(filme)"
  },
  {
    nome: "Harry Potter e as Relíquias da Morte parte 1",
    imagem:
      "https://i.pinimg.com/originals/31/d5/c5/31d5c5999cd1367822046be5bd32a548.jpg",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1"
  },
  {
    nome: "Harry Potter e as Relíquias da Morte parte 2",
    imagem:
      "https://static.wikia.nocookie.net/d65d12dc-6796-4027-b505-315bd6153fe9",
    link:
      "https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2"
  }
];

var filmes = document.getElementById("filmes");

function addFilme(){
  var nome = document.getElementById("nome").value;
  var imagem = document.getElementById("imagem").value;
  var link = document.getElementById("link").value;
  
  var listaFilmes = list.filter(function(filme) {return filme.nome === nome})
  
  if (listaFilmes.length > 0) {
    alert("Esse filme já está na biblioteca!") 
    return;
  }
  
  filmes.innerHTML += "<div class='tooltip'> <a href='" + link + "'>" + "<img src='" + imagem + "'>" + "<span class='tooltiptext'>" + nome + "</span> </a> </div>";
  list.push({
    nome: nome, 
    imagem: imagem,
    link: link
  })
  document.getElementById("nome").value = "";
  document.getElementById("imagem").value = "";
  document.getElementById("link").value = "";
}

function deletarFilme() {
  var filmeRemover = document.getElementById("filmeRemover").value;
  var listaFilmes = list.filter(function(filme) {return filme.nome != filmeRemover})
  
  if  (listaFilmes.length === list.length) {
    alert("Esse filme não está na biblioteca!") 
    return;
  } else {
    list = listaFilmes;
    limpaFilmes();
    preencherFilmes();
  }
  document.getElementById("filmeRemover").value = "";
}

function limpaFilmes() {
  filmes.innerHTML = "";
}

function preencherFilmes() {
  for (var i = 0; i < list.length; i++) {
    filmes.innerHTML += "<div class='tooltip'> <a href='" + list[i].link + "'>" + "<img src='" + list[i].imagem + "'>" + "<span class='tooltiptext'>" + list[i].nome + "</span> </a> </div>";
  }
}

preencherFilmes();

const placarLista = document.getElementById('placarLista')
const rankings = JSON.parse(localStorage.getItem('rankings')) || []

placarLista.innerHTML = 
    rankings.map( placar => {
        return `<li class="ranking">${placar.nome} - ${placar.placar}</li>`
    }).join('')
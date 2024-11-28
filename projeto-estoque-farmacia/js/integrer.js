async function getData(url) {
    const response = await fetch(url)
    const data = await response.json();
    return data;

}

async function postData(url, dados) {
    try {
        const response = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            });
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Erro ao buscar dados", error);
    }

}

async function ListaEquipamentos() {
    const res = await getData("http://localhost:3000/api/equipamentos/equipamentos")
    console.log(res)


    let cardEq = document.getElementById("cardsEquipamentos");

    if (res && res.length > 0) {
        res.forEach(equipamento => {
            let card = document.createElement("div");
            card.classList.add('cartao-equipamento');
            card.classList.add('card');
            // Montando o conteúdo do card
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">$</p>
                    <a href="#" class="btn btn-primary">Ver detalhes</a>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${equipamento.NomeEquipamento}</h6>
                    <h6 class="card-title">${equipamento.Quantidade}</h6>

                    <div class="button-container">
                    <button type="button" class="btn btn-light button-quantidade" data-action="decrease">
                        -
                    </button>
                    <span class="number-display" data-value="0">0</span>
                    <button type="button" class="btn btn-light button-quantidade" data-action="increase">
                        +
                    </button>
                    </div>
                </div>
    `;
            cardEq.appendChild(card);
        });
    } else {
        // Caso não haja dados ou a resposta seja vazia
        console.log('Nenhum equipamento encontrado');
    }
}

ListaEquipamentos()
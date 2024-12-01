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

async function ListaRemedios() {
    const res = await getData("http://localhost:3000/api/remedios/remedios")
    console.log(res)


    let remedios = document.getElementById("remedios");

    if (res && res.length > 0) {
        res.forEach(remedio => {
            let card = document.createElement("div");
            card.classList.add('cartao-remedio');
            card.classList.add('card');
            // Montando o conteúdo do card
            card.innerHTML = `
                <div class="card-body">
                    <h6 class="card-title">${remedio.NomeMedicamento}</h6>
                    <h6 class="card-title">${remedio.Dosagem}</h6>
                    <h6 class="card-title">${remedio.Unidade}</h6>
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
            remedios.appendChild(card);
        });
    } else {
        // Caso não haja dados ou a resposta seja vazia
        console.log('Nenhum equipamento encontrado');
    }
}

ListaRemedios()
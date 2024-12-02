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

async function SeletorVeiculos() {
    const res = await getData("http://localhost:3000/api/veiculos")
    console.log(res)
  
  
    let seletorVeiculo = document.getElementById("seletor-veiculo");
  
    if (res && res.length > 0) {
        res.forEach(veiculo => {
            let opcao = document.createElement("option");
            opcao.classList.add('opcao-veiculo');
            opcao.value = veiculo.Veiculo_Id;
            opcao.innerHTML = 
            `
            ${veiculo.NomeVeiculo} - ${veiculo.NumeroVeiculo}
            `;
            seletorVeiculo.appendChild(opcao);
        });
    } else {
        // Caso não haja dados ou a resposta seja vazia
        console.log('Nenhum veículo encontrado');
    }
  }


let carrinho = {};

async function ListaRemedios() {
    const res = await getData("http://localhost:3000/api/remedios")
    console.log(res)


    let remedios = document.getElementById("remedios");

    if (res && res.length > 0) {
        res.forEach(remedio => {
            let card = document.createElement("div");
            card.classList.add('cartao-remedio');
            card.classList.add('card');
            
            let quantidade = 0;
            card.innerHTML = `
                <div class="card-body">
                    <h6 class="card-title">${remedio.NomeMedicamento}</h6>
                    <h6 class="card-title">${remedio.Dosagem}</h6>
                    <h6 class="card-title">${remedio.Unidade}</h6>
                    <div class="button-container">
                    <button type="button" class="btn btn-light botao-quantidade-diminuir" data-action="decrease">
                        -
                    </button>
                    <span class="display-quantidade" data-value="${quantidade}">${quantidade}</span>
                    <button type="button" class="btn btn-light botao-quantidade-aumentar" data-action="increase">
                        +
                    </button>
                    </div>
                </div>
            `;
            card.querySelector('.botao-quantidade-diminuir').addEventListener('click', () => {
                if (quantidade > 0){
                    quantidade--;
                    card.querySelector('.display-quantidade').innerHTML = quantidade;
                    atualizarCarrinho(remedio, quantidade);
                }
            });

            card.querySelector('.botao-quantidade-aumentar').addEventListener('click', () => {
                    quantidade++;
                    card.querySelector('.display-quantidade').innerHTML = quantidade;
                    atualizarCarrinho(remedio, quantidade);
            });

            remedios.appendChild(card);
        });
    } else {
        // Caso não haja dados ou a resposta seja vazia
        console.log('Nenhum equipamento encontrado');
    }
}

function atualizarCarrinho(remedio, quantidade) {
    const {Medicamento_Id} = remedio;

    if (quantidade > 0){
        carrinho[Medicamento_Id] = {
            NomeMedicamento: remedio.NomeMedicamento,
            Dosagem: remedio.Dosagem,
            Unidade: remedio.Unidade,
            quantidade: quantidade
        };

    } else {
        delete carrinho[Medicamento_Id];
    }

    carregarCarrinho();

}

function carregarCarrinho() {
    const carrinhoTabela = document.getElementById("carrinho-lista");
    carrinhoTabela.innerHTML = "";

    for (const idItem in carrinho) {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${carrinho[idItem].NomeMedicamento}</td>
            <td>Remédio</td>
            <td>${carrinho[idItem].Dosagem}</td>
            <td>${carrinho[idItem].Unidade}</td>
            <td>${carrinho[idItem].quantidade}</td>
        `;
        carrinhoTabela.appendChild(linha);
    }
}
ListaRemedios();
SeletorVeiculos();
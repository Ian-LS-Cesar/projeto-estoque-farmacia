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


async function PesquisarRemedio() {
    const res = await getData('http://localhost:3000/api/remedios/remedios');
    let remediosPesquisa = document.getElementById("datalistPesquisa");

    if (res && res.length > 0) {
        res.forEach((remedio) => {
            let opcao = document.createElement("option");
            opcao.value = remedio.NomeMedicamento;
            opcao.text = remedio.NomeMedicamento;
            remediosPesquisa.append(opcao);
        });

    } else {
        console.log('Nenhum medicamento encontrado');
    }
}


async function EstoqueRemedios() {
    const res = await getData("http://localhost:3000/api/remedios/remedios");
    const estoque = await getData("http://localhost:3000/api/estoque");
    console.log(res);

    let remedios = document.getElementById("estoque-body");

    if ((res && res.length > 0) && (estoque && estoque.length > 0)) {
        res.forEach((remedio, indice) => {
            let tr = document.createElement("tr");
            tr.classList.add('remedio');
            tr.innerHTML = `
                <td>${remedio.NomeMedicamento}</td>
                <td>Remédio</td>
                <td>${remedio.Dosagem}</td>
                <td>${remedio.Unidade}</td>
                <td>${estoque[indice].Quantidade}</td>
            `;
            remedios.appendChild(tr);
        });
    } else {
        
        console.log('Nenhum medicamento encontrado');
    }
}

PesquisarRemedio();
EstoqueRemedios()


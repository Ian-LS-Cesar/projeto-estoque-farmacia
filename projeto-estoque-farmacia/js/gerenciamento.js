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

async function EstoqueRemedios() {
    const res = await getData("http://localhost:3000/api/remedios/remedios")
    console.log(res)


    let remedios = document.getElementById("estoque-body");

    if (res && res.length > 0) {
        res.forEach(remedio => {
            let tr = document.createElement("tr");
            tr.classList.add('remedio');
            tr.innerHTML = `
                <td>${remedio.NomeMedicamento}</td>
                <td>Remédio</td>
                <td>${remedio.Dosagem}</td>
                <td>${remedio.Unidade}</td>
                <td>
                <div class="quantidade-container">
                <span id="number" class="number-display">0</span>
                </div>
                </td>   
            `;
            remedios.appendChild(tr);
        });
    } else {
        // Caso não haja dados ou a resposta seja vazia
        console.log('Nenhum equipamento encontrado');
    }
}

EstoqueRemedios();
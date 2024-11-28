async function fetchRemedios() {
    try {
        const response = await fetch('http://localhost:3000/api/remedios');
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar remédios:', error);
        return [];
    }
}
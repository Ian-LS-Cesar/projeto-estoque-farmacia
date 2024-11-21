const API_URL = "http://localhost:3000"; // URL do backend

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita o reload da página

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: email, Senha: senha }),
      });

      const data = await response.json();

      if (response.ok) {
        // Salva o token no localStorage
        localStorage.setItem("token", data.token);
        alert(data.message);

        // Redireciona para a página principal
        window.location.href = "./index.html";
      } else {
        alert(data.message); // Mensagem de erro
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar ao servidor");
    }
  });
});

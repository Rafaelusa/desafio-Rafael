$(function () {
  
  const controller = new Controller();

  controller.inicializar();

  //Validação do Telefone com Máscara

  function handlePhone(event) {
    let input = event.target;
    input.value = phoneMask(input.value);
  }

  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  //Validaação dos demais campos.

  const formulary = document.getElementById("form");
  const required = document.querySelectorAll(".required");

  function setError(index) {
    required[index].style.border = "2px solid #e63636";
  }

  function validatePassword(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]).{8,}$/.test(
      password
    );
  }

  function validateForm(ev) {
    const nome = document.getElementById("nome").value;
    const datadeNascimento = document.getElementById("datadeNascimento").value;
    const telefone = document.getElementById("telefone").value;
    const area = document.getElementById("area").value;
    const senha = document.getElementById("senha").value;

    if (
      nome !== "" ||
      datadeNascimento === "" ||
      telefone === "" ||
      area === ""
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      ev.preventDefault();
      return false;
    }

    if (!validatePassword(senha)) {
      alert("A senha não atende aos requisitos mínimos de segurança.");
      ev.preventDefault();
      return false;
    }

    return true;
  }

  document
    .getElementById("user-form")
    .addEventListener("submit", function (event) {
      if (!validateForm(event)) {
        event.preventDefault();
      }
    });
});

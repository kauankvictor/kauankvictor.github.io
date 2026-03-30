const botaoHorarios = document.getElementById("botao-horarios");
const janelaHorarios = document.getElementById("janela-horarios");
const botaoFecharHorarios = document.getElementById("fechar-horarios");

botaoHorarios.addEventListener("click", function () {
  janelaHorarios.classList.add("ativo");
});

botaoFecharHorarios.addEventListener("click", function () {
  janelaHorarios.classList.remove("ativo");
});

janelaHorarios.addEventListener("click", function (evento) {
  if (evento.target === janelaHorarios) {
    janelaHorarios.classList.remove("ativo");
  }
});
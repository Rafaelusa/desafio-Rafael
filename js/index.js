$(function () {
  
  const controller = new Controller();

  controller.inicializar();

  controller.handlePhone;

  $("#btEnviar").click(function(){
    controller.validarCamposObrigatorios();
  });

});

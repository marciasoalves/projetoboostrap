// js para Formulário

// function retornaInf() {
//   if((validaNome ==true) && validaEmail ==true && validaEndereco==true && validaCidade==true && validaCep==true && validaMensagem==true)
//   return alert("Obrigado por enviar sua mensagem, retornaremos em breve!")
// }

//validação do nome
function validaNome(nome) {
  if (!isNaN(nome.value)) {
    nome.style.border = "red solid 3px";
    nome.style.boxShadow = "0px 0px 4px red";
  } else {
    nome.style.border = "green solid 3px";
    nome.style.boxShadow = "0px 0px 4px green";
    return true
  }
  document.getElementById("nome").value = document.getElementById("nome").value.toUpperCase();
}

//validação do email
function validaEmail(email) {
  document.getElementById("email").value;

  if (email.value == "" || email.value.indexOf('@') < 0) {
    email.style.border = "red solid 3px";
    email.style.boxShadow = "0px 0px 4px red";
  } else {
    email.style.border = "green solid 3px";
    email.style.boxShadow = "0px 0px 4px green";
    return true
  }
}


//validação do endereço
function validaEndereco(endereco) {
  if (!isNaN(endereco.value)) {
    endereco.style.border = "red solid 3px";
    endereco.style.boxShadow = "0px 0px 4px red";
  } else {
    endereco.style.border = "green solid 3px";
    endereco.style.boxShadow = "0px 0px 4px green";
    return true
  }
  document.getElementById("endereco").value = document.getElementById("endereco").value.toUpperCase();
}

//validação da cidade
function validaCidade(cidade) {
  if (!isNaN(cidade.value)) {
    cidade.style.border = "red solid 3px";
    cidade.style.boxShadow = "0px 0px 4px red";
  } else {
    cidade.style.border = "green solid 3px";
    cidade.style.boxShadow = "0px 0px 4px green";
    return true
  }
  document.getElementById("cidade").value = document.getElementById("cidade").value.toUpperCase();
}

//validação do estado
function validaEstado(estado) {
  if (estado.value == " ") {
    estado.style.border = "red solid 3px";
    estado.style.boxShadow = "0px 0px 4px red";
  } else {
    estado.style.border = "green solid 3px";
    estado.style.boxShadow = "0px 0px 4px green";
    return true
  }

}

//validação do cep
function validaCep(cep) {
  var cepValue = parseInt(cep.value)

  if (cepValue == "" || isNaN(cepValue)) {
    cep.style.border = "red solid 3px";
    cep.style.boxShadow = "0px 0px 4px red";
  } else {
    cep.style.border = "green solid 3px";
    cep.style.boxShadow = "0px 0px 4px green";
    return true
  }
}

//validação da mensagem
function validaMensagem(mensagem) {
  if (!isNaN(mensagem.value)) {
    mensagem.style.border = "red solid 3px";
    mensagem.style.boxShadow = "0px 0px 4px red";
  } else {
    mensagem.style.border = "green solid 3px";
    mensagem.style.boxShadow = "0px 0px 4px green";
    return true
  }
  document.getElementById("mensagem").value = document.getElementById("mensagem").value.toUpperCase();
}
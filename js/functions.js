menu = document.getElementById('ul_mobile').style;
var  exibir = false;
nome = document.getElementById('inpNome');
tel = document.getElementById('inpTel');
email = document.getElementById('inpEmail');
mensagem = document.getElementById('Msg');

function mostrar_menu(){
    exibir = !exibir;
    exibir ? menu.display = 'block' : menu.display = 'none';
}

function validar_form(){
    if(nome.value.length <= 3){
        nome.style.outlineStyle = 'solid';
        nome.focus();
        return false;
    }else{
        nome.style.outlineStyle = 'none';
    }

    if(isNaN(tel.value) || tel.value == ''){
        tel.style.outlineStyle = 'solid';
        tel.focus();
        return false;
    }else{
        tel.style.outlineStyle = 'none';
    }

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email.style.outlineStyle = 'solid';
        email.focus();
        return false;
    }else{
        email.style.outlineStyle = 'none';
    }

    if(mensagem.value == ""){
        mensagem.style.outlineStyle = 'solid';
        mensagem.focus();
        return false;
    }else{
        mensagem.style.outlineStyle = 'none';
    }
}
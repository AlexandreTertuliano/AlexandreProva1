start();

function start() {
    let login = document.getElementById('login');
    login.onclick = function() {
        if (validateFields()) {
            validar()
            clearfields()
        }
    };
}

function clearFields() {
    let matricula = document.getElementById('matricula');
    let senha = document.getElementById('senha');
    matricula.value = '';
    senha.value = '';
    matricula.focus();
}

function validar(){
    retorno = true;
    let matricula = document.getElementById('matricula');
    let senha = document.getElementById('senha');
    if(matricula.value == "123456" && senha.value == "123456"){
        alert("Bem Vindo");
    }else{
        alert("Usuario ou senha incorretos");
    }
    return retorno;
}

function showFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    spanError.className = spanError.className.replace('error hide', '').trim();
}

function hideFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    if (!spanError.className.includes('hide')) {
        spanError.className = spanError.className + 'hide';
    }
}

function validateFields() {
    let fieldsId = ['matricula', 'senha'];
    let allFieldsValid = true;

    for (let i = 0; i < fieldsId.length; i++) {
        let id = fieldsId[i];
        let field = document.getElementById(id);
        if (field.value.trim() === '') {
            allFieldsValid = false;
            showFieldMessageError(id);
        } else {
            hideFieldMessageError(id);
        }
    }

    return allFieldsValid;
}
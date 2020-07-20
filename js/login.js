function logando(){
    var nome = window.document.getElementById('nome').value;
    var senha = window.document.getElementById('senha').value;

    var login = 'ConciergeControl';
    var password = '12345678';

    if(nome == "" || senha == ""){
        alert("Preencha os campos corretamente!");
    }

    else if(nome == login && senha == password){
        window.open('home.html');
        window.close('index.html');
    }
       
    else{
        alert("Login ou Senha invalidos");
        }
    
}
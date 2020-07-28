function logando(){
    var nome = window.document.getElementById('nome').value;
    var senha = window.document.getElementById('senha').value;

    var login = 'conciergecontrol';
    var password = '12345678';

    if(nome == "" || senha == ""){
        alert("Preencha os campos corretamente!");
    }

    else if(nome == login && senha == password){
        window.close('index.html');
        window.open('home.html');        
    }
       
    else{
        alert("Login ou Senha invalidos");
        }
    
}
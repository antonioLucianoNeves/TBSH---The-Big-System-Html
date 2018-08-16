
function entrarUsuario() {
    alert("Clique em ok para ter acesso");
    window.document.meuform.action ="http://www.fulanodetal.com.br/consultar.jsp";
    window.document.meuform.submit();
}

function cadastrarUsuario() {
   alert("Clique em ok para cadastrar");
   window.document.meuform.action = "http://www.fulanodetal.com.br/cadastrar.jsp";
   window.document.meuform.submit();
}
function consultarUsuario() {
   alert("Clique em ok para consultar");
   window.document.meuform.action = "http://www.fulanodetal.com.br/consultar.jsp";
   window.document.meuform.submit();
}
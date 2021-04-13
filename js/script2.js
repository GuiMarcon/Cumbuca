function rest(){
	var restBtn 	= document.getElementById("restBtn");
	var restCorpo 	= document.getElementById("restCorpo");
	var mercBtn 	= document.getElementById("mercBtn");
	var mercCorpo 	= document.getElementById("mercCorpo");
	var casaBtn 	= document.getElementById("casaBtn");
	var casaCorpo 	= document.getElementById("casaCorpo");
	// Deixa borda no botão rest
	restBtn.style.borderBottom = "3px solid #87060F";
	mercBtn.style.borderBottom = "3px solid #FFF";
	casaBtn.style.borderBottom = "3px solid #FFF";
	
	// Mostra só conteudo selecionado
	restCorpo.style.display = "block"
	mercCorpo.style.display = "none"
	casaCorpo.style.display = "none"
}
function merc(){
	var restBtn 	= document.getElementById("restBtn");
	var restCorpo 	= document.getElementById("restCorpo");
	var mercBtn 	= document.getElementById("mercBtn");
	var mercCorpo 	= document.getElementById("mercCorpo");
	var casaBtn 	= document.getElementById("casaBtn");
	var casaCorpo 	= document.getElementById("casaCorpo");
	// Deixa borda no botão rest
	restBtn.style.borderBottom = "3px solid #FFF";
	mercBtn.style.borderBottom = "3px solid #87060F";
	casaBtn.style.borderBottom = "3px solid #FFF";
	
	// Mostra só conteudo selecionado
	restCorpo.style.display = "none"
	mercCorpo.style.display = "block"
	casaCorpo.style.display = "none"
}
function casa(){
	var restBtn 	= document.getElementById("restBtn");
	var restCorpo 	= document.getElementById("restCorpo");
	var mercBtn 	= document.getElementById("mercBtn");
	var mercCorpo 	= document.getElementById("mercCorpo");
	var casaBtn 	= document.getElementById("casaBtn");
	var casaCorpo 	= document.getElementById("casaCorpo");
	// Deixa borda no botão rest
	restBtn.style.borderBottom = "3px solid #FFF";
	mercBtn.style.borderBottom = "3px solid #FFF";
	casaBtn.style.borderBottom = "3px solid #87060F";
	
	// Mostra só conteudo selecionado
	restCorpo.style.display = "none"
	mercCorpo.style.display = "none"
	casaCorpo.style.display = "block"
}
function comer(){
	var restCorpo 	= document.getElementById("restCorpo");
	var casaCorpo 	= document.getElementById("casaCorpo");
	var mercCorpo 	= document.getElementById("mercCorpo");
	var nutri 		= document.getElementById("nutri");
	var opcoes		= document.getElementById("opcoes");
	var chat		= document.getElementById("chat");
	var buscar		= document.getElementById("buscar");
	var data		= document.getElementById("data");
	// Mostra só conteudo selecionado
	opcoes.style.display = "block";
	restCorpo.style.display = "block";
	nutri.style.display = "none";
	
	casaCorpo.style.display = "none";
	mercCorpo.style.display = "none";
	chat.style.display = "none";
	buscar.style.display= "block";
	data.style.display= "none";
}

function nutri(){
	var restCorpo 	= document.getElementById("restCorpo");
	var casaCorpo 	= document.getElementById("casaCorpo");
	var mercCorpo 	= document.getElementById("mercCorpo");
	var nutri 		= document.getElementById("nutri");
	var opcoes		= document.getElementById("opcoes");
	var chat		= document.getElementById("chat");
	var buscar		= document.getElementById("buscar");
	var data		= document.getElementById("data");
	
	// Mostra só conteudo selecionado
	opcoes.style.display = "none";
	restCorpo.style.display = "none";
	nutri.style.display = "block";
	
	casaCorpo.style.display = "none";
	mercCorpo.style.display = "none";
	chat.style.display = "none";
	buscar.style.display= "block";
	data.style.display= "none";
}

function chat(){
	var restCorpo 	= document.getElementById("restCorpo");
	var casaCorpo 	= document.getElementById("casaCorpo");
	var mercCorpo 	= document.getElementById("mercCorpo");
	var nutri 		= document.getElementById("nutri");
	var opcoes		= document.getElementById("opcoes");
	var chat		= document.getElementById("chat");
	var buscar		= document.getElementById("buscar");
	var data		= document.getElementById("data");
	
	// Mostra só conteudo selecionado
	opcoes.style.display = "none";
	restCorpo.style.display = "none";
	nutri.style.display = "none";
	
	casaCorpo.style.display = "none";
	mercCorpo.style.display = "none";
	chat.style.display = "block";
	buscar.style.display= "block";
	data.style.display= "none";
}

function ini(){
	var restCorpo 	= document.getElementById("restCorpo");
	var casaCorpo 	= document.getElementById("casaCorpo");
	var mercCorpo 	= document.getElementById("mercCorpo");
	var nutri 		= document.getElementById("nutri");
	var opcoes		= document.getElementById("opcoes");
	var chat		= document.getElementById("chat");
	var buscar		= document.getElementById("buscar");
	var data		= document.getElementById("data");
	
	// Mostra só conteudo selecionado
	opcoes.style.display = "none";
	restCorpo.style.display = "none";
	nutri.style.display = "none";
	
	casaCorpo.style.display = "none";
	mercCorpo.style.display = "none";
	chat.style.display = "none";
	buscar.style.display= "none";
	data.style.display= "block";
}

function lista(){
	var lista 	= document.getElementById("lista");
	
	// lista.style.display = "block";
	if (window.getComputedStyle(lista).display == "none") {
      lista.style.display = "block";
	}
	else {
      lista.style.display = "none";
	}
}



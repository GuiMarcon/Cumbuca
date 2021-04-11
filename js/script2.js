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
var cidades = ["São Paulo","Alphaville","Barueri","Santana de Parnaíba","Guarulhos","Santo André","São Bernardo do Campo","São Caetano do Sul","Osasco","Mogi das Cruzes","Itapecerica da Serra","Embu-Guaçu"];
var cidadesEl = document.getElementById("cidades");
if (cidadesEl) {
  cidadesEl.innerHTML = cidades.map(function(c){return "<li>"+c+"</li>";}).join("");
}

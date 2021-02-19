
//On affecte l'évenement d'ouvrir un lien dans une nouvelle page web dans le boutton qui se trouve dans la section formation du html
document.getElementById("travaux").addEventListener("click", event => {
  window.open('https://www.sites.univ-rennes2.fr/mastersigat/Webmapping/2017/Sports_Rennes/index.html', '_blank');
});

let tablecompet = document.createElement("tableau");

let height=8;
let width=2;

for (y=1; y<= height; y++){
  var mytr = document.createElement("tr");
  tablecompet.appendChild(mytr);

  for (x=1; x<=width; x++){
  var mytd = document.createElement("td");
  mytr.appendChild(mytd);


  }
}

document.body.appendChild(tablecompet);
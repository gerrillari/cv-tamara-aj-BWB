
//On affecte l'évenement d'ouvrir un lien dans une nouvelle page web dans le boutton qui se trouve dans la section formation du html
document.getElementById("travaux").addEventListener("click", event => {
  window.open('https://www.sites.univ-rennes2.fr/mastersigat/Webmapping/2017/Sports_Rennes/index.html', '_blank');
});

//On affecte l'évenement de changer la couleur du boutton lorsqu'on traverse avec la souris par cessus
document.getElementById("travaux").addEventListener("mouseover", event =>{
  event.target.style.backgroundColor ="black";
  setTimeout(function(){
  event.target.style.backgroundColor ="";}, 500);
}, false);

/*
//Création de la variable qui contiendra la liste de compétences dans la table
let comp1 = ["" ,"Analyse spatiale", "Traitement de donnés","Automatisation","Photo-interprétation","Formation SIG", "Analyse Statistique","Gestion de projet","Digitalisation"];
//Création de la variable qui contiendra la liste du niveau de compétences dans la table
let comp2 = ["","Niveau Autonome","Niveau Autonome","Niveau Intermediaire","Niveau Intermediaire","Niveau Avancé","Niveau Autonome","Niveau Avancé","Niveau Avancé"];

//Créer une variable qui va contenir une table 
let tablecompet = document.createElement("tableau");

//Créer une variable qui va définir l'hauteur 
let height=8;
//Créer une variable qui va définir la largeur
let width=1;

//Boucle qui va permettre de créer les 8 colonnes, en fonction de l'hauteur 
for (y=1; y<= height; y++){
  var mytr = document.createElement("tr");
//Liaison entre la variable tr en la variable tableau
  tablecompet.appendChild(mytr);
  
//Boucle qui va permettre de créer 1 file en fonction de la largeur
  for (x=1; x<=width; x++){
  var mytd = document.createElement("td");
  mytd.style.backgroundColor = "#53c68c";
  mytd.style.textAlign="Center";
  mytd.style.borderRadius="15%";
  mytd.style.font= "bold 15px sans-serif" ;
  mytd.style.color= "white";
  mytd.style.opacity="0.8";
  mytd.style.border="none";
//Liaison entre la variable td en la variable tr
  mytr.appendChild(mytd);
  mytd.innerText = comp1[y];  
  }  
  tablecompet.style.marginLeft="10px";
}
//Ajout de la table créée dans le div divtable 
document.getElementById("divtable").appendChild(tablecompet);

//Créer une deuxième variable qui va contenir une autre table 
let tablecompet2 = document.createElement("tableau");

//Créer une variable qui va définir l'hauteur 
let height2=5;
//Créer une variable qui va définir la largeur
let width2=1;

//Boucle qui va permettre de créer les 8 colonnes, en fonction de l'hauteur 
for (y=1; y<= height; y++){
  var mytr = document.createElement("tr");
//Liaison entre la variable tr en la variable tableau
  tablecompet2.appendChild(mytr);
  
//Boucle qui va permettre de créer 1 file en fonction de la largeur
  for (x=1; x<=width; x++){
  var mytd = document.createElement("td");
  mytd.style.backgroundColor = "#d9f2e6";
  mytd.style.textAlign="Center";
  mytd.style.borderRadius="15%";
  mytd.style.font= "italic 14px sans-serif";
  mytd.style.color= "black";
  mytd.style.opacity="0.8";
  
//Liaison entre la variable td en la variable tr
  mytr.appendChild(mytd);
  mytd.innerText = comp2[y];
  }  
  tablecompet2.style.marginLeft="0px";
}
//Ajout de la table créée dans le div divtable 
document.getElementById("divtable").appendChild(tablecompet2);*/






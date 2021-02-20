
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


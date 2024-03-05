// Sélectionner le bouton
var Accueil = document.getElementById("boutonAccueil");

// Sélectionner l'élément de destination
var destiAccueil = document.getElementById("Accueil");

var About = document.getElementById("boutonAbout");

var destiAbout = document.getElementById("About");

var Parcours = document.getElementById("boutonParcours");

var destiParcours = document.getElementById("Parcours");

var Projet = document.getElementById("boutonProjet");

var destiProjet = document.getElementById("Projet");

var Veille = document.getElementById("boutonVeille");

var destiVeille = document.getElementById("Veille");

// Ajouter un écouteur d'événement au clic sur le bouton
Accueil.addEventListener("click", function() {
    // Faire défiler la page jusqu'à l'élément de destination
    destiAccueil.scrollIntoView({ behavior: 'smooth' });
});

About.addEventListener("click",function(){
    destiAbout.scrollIntoView({behavior: 'smooth'});
});

Parcours.addEventListener("click", function(){
    destiParcours.scrollIntoView({behavior:"smooth"})
});

Projet.addEventListener("click",function(){
    destiProjet.scrollIntoView({behavior:"smooth"})
});

Veille.addEventListener("click",function(){
    destiVeille.scrollIntoView({behavior:"smooth"})
});
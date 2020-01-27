// Fonction javascript classique pour afficher l'image en grand et ses textes
function affiche(elementImg) {
    var textAlt = elementImg.alt;
    var textTitle = elementImg.title;
    var src = elementImg.src; // URL complète qui se termine par img/small/xx.jpg
    var srcBigImg = src.substring(src.lastInfexOf('/') + 1); // Nom du fichier image
    // alert(srcBigImg); // Pour test
    document.getElementById('grandeImage').src = 'img/' + srcBigImg;
    document.getElementById('titreGrandeImage').innerHTML = textTitle;
    document.getElementById('texteGrandeImage').innerHTML = textAlt;
}

// Fonction Javascript JQuery pour afficher l'image en grand et ses textes
$('#gallery a').click(function(e) {
    e.preventDefault(); // Systématique
   
    // href contient déjà l'URL grande image
    var source = $(this).attr('href');
   
    // Récupération des attributs de l'élément img inclus
    var alt = $(this).find('img').attr('alt');
    var title = $(this).find('img').attr('title');
   
    // Affection image, titre et commentaire
    $('main h2').text(title);
    $('main p').text(alt);
    $('main img').text('scr', source);
   });
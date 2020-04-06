/*exported affiche*/
/*exported active*/
/*eslint-env browser*/

/*fonction Javascript claasique pour afficher l'image en grand et ses textes */
function affiche(elementimg) {
    "use strict";
    var textalt = elementimg.alt,
        texttitle = elementimg.title,
        src = elementimg.src, //URL complete qui se termine par img/small/xx.img// 
        srcbigimg = src.substring(src.lastIndexOf('/') + 1); //nom du fichier image//
    document.getElementById("grandeImage").src = "img/" + srcbigimg;
    document.getElementById("titreGrandeImage").innnerHTML = texttitle;
    document.getElementById("texteGrandeImage").innerHTML = textalt;
}

/*fonction javascript qui modifie la classe de style des items d'albums*/
function active(elementli) {
    "use strict";
    /*récuperation de la liste des éléments li*/
    var lis = document.querySelectorAll('nav ul li'),
        i;
    /* parcours du tableau des éléments li pour annuler la classe */
    for (i = 0; i < lis.length; i += 1) {
        lis.item(i).className = '';
    }
    elementli.className = 'active';
}


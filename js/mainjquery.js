/*eslint-env browser*/
/*exported active*/
/*global $*/

$(document).ready(function () {
    "use strict";
    $('#gallery a').click(function (e) {
        e.preventDefault();

        var source = $(this).attr('href'),
            alt = $(this).find('img').attr('alt'),
            title = $(this).find('img').attr('title');
        $('main h2').text(title);
        $('main p').text(alt);
        $('main img').attr('src', source);

    });
});

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
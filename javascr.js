function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
function ivailo() {
    var otgovori = ['Sas sigurnost',
'Dawe',
'Nai-veroqtno da',
'Izglejda dosta vazmojno',
'Nqma smisal da se trevojish otnosno tova',
'Da',
'Da, ubeden sam',
'Nz brat, zvuchi dosta kato istina',
'Ne sam siguren, pitai pak po kasno',
'Uuu, slojen vapros, ne moga da otgovorq sega',
'Sega ne sam podgotven za tozi vapros',
'Hvana me nepodgotven',
'NE',
'Skiptichen sam otnosto tova',
'Ne mislq',
'Nai-veroqtno ne',
'Kazvam se Vasilcho',
'ari e, kaji istinski vapros',
'brat ot de da znam az e',
'ti si znaesh',
'pitai okan',
'istinata se namira v IlVesAr nashiqt bog',
'kvo ma pita zako ma pita',
'glad mizeriq sedma seriq',
];
document.getElementById("jeko2").innerHTML = choose(otgovori);
}

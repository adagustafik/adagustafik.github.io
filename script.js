let currentPhoto = 0;
let imagesData = ['images/pexels-ezra-comeau-2387418.jpg', 'images/pexels-frans-van-heerden-624015.jpg', 'images/pexels-jacob-colvin-1757363.jpg', 'images/pexels-mengliu-di-3064079.jpg', 'images/pexels-paul-ijsendoorn-33041.jpg', 'images/pexels-ruvim-miksanskiy-1438761.jpg', 'images/pexels-stein-egil-liland-3408744.jpg', 'images/pexels-tobias-bjørkli-2113566.jpg'];

// IMAGES LOAD
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber]);  
    $('.thumbnail').removeClass('selected');
    $('.thumbnail[dataNumber=' + currentPhoto + ']').addClass('selected');
};
loadPhoto(currentPhoto);

// TITLE AND DESCRIPTION LOAD
let currentTitle = 0;
let titleData = ['Ezra Comeau', 'Frans van Heerden', 'Jacob Colvin', 'Mengliu Di', 'Paul Ijsendoorn', 'Ruvim Miksanskiy', 'Egil Liland', 'Tobias Bjørkli']
let loadTitle = (titleNumber) => {
    $ ('#photoTitle').text(titleData[titleNumber]);
};
loadTitle(currentTitle);

let currentDescription = 0;
let descriptionData = [
    'Bolo-nebolo, teda skôr bolo ako nebolo (v opačnom prípade by sa nám to horšie rozprávalo), jedno podmorské mestečko. A ako to už v malom meste býva, každý sa poznal s každým, všetci vedeli, kto kde býva a čo zvyčajne robí a hádam aj to, čo si dáva v sobotu na raňajky.',
    'Na úplnom konci podmorského mestečka, na útese, bývala ježovka. Nedajte sa pomýliť, táto ježovka nebola vôbec žiadna slečinka, ale poriadny chlapisko! A vlastne aj pekne nevrlý chrapúň a zúrivec, čo sa nikdy s nikým nekamaráti a všetky nedorozumenia rieši silou.',
    'Ježovke to bolo síce niekedy trocha ľúto, ale predstierala, že jej na tom nezáleží a že bratať sa s kadejakou otravnou mrenou od susedov teda fakt nepotrebuje. No dôvod, prečo bola taká zlá a samotárska, bol, že sa jednoducho bála, aby k nej nebol dakto zlý.',
    'Jediný, kto sa s touto zlou ježovkou po všetkých tých rokoch ostrých slov a činov chcel stále kamarátiť, bola skupinka jemných morských rias, čo rástli priamo vedľa hundrošovho domčeka. Jediná skupinka rias na tomto podmorskom útese, široko-ďaleko iná morská tráva nerástla.',
    'Cítil sa plný sily, v skvelej kondícii, a tak si povedal, že sa vyberie až k Sasančej špičke, čo bol kopček s červenou čiapkou zo zádumčivých sasaniek. Odtiaľ bol nádherný výhľad na okolitú podvodnú krajinu.',
    'Bol by si omnoho šťastnejší, keby si sa k nám aj k ostatným obyvateľom nášho mestečka správal milšie. Nikomu neubližoval ani svojimi pichliačmi, ani zlým slovom, a nevidel vo všetkom len to zlé. Možno by ťa potom ostatní mali radi a nebol by si taký osamelý.',
    'Riasy boli síce svojím telom aj hlasom útle, ale zato boli celkom múdre. Vďaka svojej pokojnej povahe boli dobrými pozorovateľkami diania v podmorskom mestečku, a tak mnohému rozumeli lepšie ako kadejaká stará mušľa.',
    'A tak sa hundroš ježovka nežne objal s morskými riasami na dôkaz nového priateľstva.No a pretože podmorské mestečko bolo malomesto, ráno si o tom, samozrejme, všetci rozprávali!'
];
let loadDescription = (descriptionNumber) => {
    $ ('#photoDescription').text(descriptionData[descriptionNumber]);
};
loadDescription(currentDescription);

// THUMBNAILS LOAD
imagesData.forEach((photo, index) => {
    $('div').append ('<img class="thumbnail" dataNumber= ' + index + ' src=' + photo + '></img>');
    $('div').append('<p class="hidden" dataNumber = ' + index + '>' + titleData[index]+ '</p>');
});
loadPhoto(currentPhoto);

$('.thumbnail').mouseenter((event) => {
    let numberHovered = $(event.target).attr('dataNumber');
    $(`.thumbnail[dataNumber=` + numberHovered + `]`).addClass('selected');
    $(`.hidden[dataNumber=` + numberHovered + `]`).addClass('show');
});

$('.thumbnail').mouseleave((event) => {
    let numberLeft = $(event.target).attr('dataNumber');
    if (numberLeft !== currentPhoto) {
    $(`.thumbnail[dataNumber=` + numberLeft + `]`).removeClass('selected');
};
    $('.hidden').removeClass('show');
});

$('.thumbnail').click ((event) => {
    let numberClicked = $(event.target).attr('dataNumber');
    currentPhoto = numberClicked;
    currentTitle = numberClicked;
    currentDescription = numberClicked;
    loadPhoto(currentPhoto);
    loadTitle(currentTitle);
    loadDescription(currentDescription);
});

// RIGHT ARROW FUNCTIONS
$('#right').click(() => {
    if(currentPhoto < 7)  {
    currentPhoto++;
    loadPhoto(currentPhoto);
}   else {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
}});

$('#right').click(() => {
    if(currentTitle < 7)  {
    currentTitle++;
    loadTitle(currentTitle);
}   else {
    currentTitle = 0;
    loadTitle(currentTitle);
}});

$('#right').click(() => {
    if(currentDescription < 7)  {
    currentDescription++;
    loadDescription(currentDescription);
}   else {
    currentDescription = 0;
    loadDescription(currentDescription);
}});

// LEFT ARROW FUNCTIONS
$('#left').click(() => {
    if(currentPhoto >1) {
    currentPhoto--;
    loadPhoto(currentPhoto);
} else {
    currentPhoto = 8;
    loadPhoto(currentPhoto);
}});

$('#left').click(() => {
    if(currentTitle >1) {
    currentTitle--;
    loadTitle(currentTitle);
} else {
    currentTitle = 8;
    loadTitle(currentTitle);
}});

$('#left').click(() => {
    if(currentDescription >1) {
    currentDescription--;
    loadDescription(currentDescription);
} else {
    currentDescription = 8;
    loadDescription(currentDescription);
}});
const HairBunButton = document.getElementById('HairBunButton');
const HairDownButton = document.getElementById('HairDownButton');
const HairPonytailButton = document.getElementById('HairPonytailButton');

const ShortJeansButton = document.getElementById('ShortJeansButton');
const DarkJeansButton = document.getElementById('DarkJeansButton');
const LightJeansButton = document.getElementById('LightJeansButton');
const BlackSkirtButton = document.getElementById('BlackSkirtButton');
const SkirtJeansButton = document.getElementById('SkirtJeansButton');

const BlueSneakerButton = document.getElementById('BlueSneakerButton');
const BlackHeelsButton = document.getElementById('BlackHeelsButton');
const WhiteHeelsButton = document.getElementById('WhiteHeelsButton');


const HairBunImage = document.getElementById('HairBunImage');
const HairPonytailImage = document.getElementById('HairPonytailImage');
const HairDownImage = document.getElementById('HairDownImage');

const ShortJeansImage = document.getElementById('ShortJeansImage');
const DarkJeansImage = document.getElementById('DarkJeansImage');
const LightJeansImage = document.getElementById('LightJeansImage');
const BlackSkirtImage = document.getElementById('BlackSkirtImage');
const SkirtJeansImage = document.getElementById('Skirt-JeansImage');

const BlueSneakerImage = document.getElementById('BlueSneakerImage');
const WhiteHeelsImage = document.getElementById('WhiteHeelsImage');
const BlackHeelsImage = document.getElementById('BlackHeelsImage');


function hideAllButtons() {
  HairBunButton.style.display = 'none';
  HairPonytailButton.style.display = 'none';
  ShortJeansButton.style.display = 'none';
  BlueSneakerButton.style.display = 'none';
}

function toggleImage(imageElement) {
    if (imageElement.style.display === 'none') {
        imageElement.style.display = 'block';
    } else {
        imageElement.style.display = 'none';
    }
}

HairBunButton.addEventListener('click', function () {
    toggleImage(HairBunImage);
});

HairPonytailButton.addEventListener('click', function () {
    toggleImage(HairPonytailImage);
});

BlueSneakerButton.addEventListener('click', function () {
    toggleImage(BlueSneakerImage);
});

ShortJeansButton.addEventListener('click', function () {
    toggleImage(ShortJeansImage);
});
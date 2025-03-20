

const music = document.getElementById('backgroundMusic');

window.onload = function () {
  music.play().catch(error => {
    console.log("A reprodução automática foi bloqueada pelo navegador.");
  });
};

function playMusic() {
  music.play();
}

function pauseMusic() {
  music.pause();
}

const HairSection = document.getElementById('HairSection');
const ShirtSection = document.getElementById('ShirtSection')
const BottomSection = document.getElementById('BottomSection')
const ShoesSection = document.getElementById('ShoesSection')


function toggleSection(buttonElement) {
  if (buttonElement.style.display === 'none') {
      buttonElement.style.display = 'block';
  } else {
      buttonElement.style.display = 'none';
  }
}

function removeThemeClasses() {
  document.body.classList.remove('HairSection', 'BottomSection', 'ShoesSection');
}

HairSection.addEventListener('click', function() {
  hideAllButtons();
  toggleSection(HairBunButton);
  toggleSection(HairPonytailButton);
});

BottomSection.addEventListener('click', function() {
  hideAllButtons();
  toggleSection(ShortJeansButton);
});

ShoesSection.addEventListener('click', function() {
  hideAllButtons();
  toggleSection(BlueSneakerButton);
});
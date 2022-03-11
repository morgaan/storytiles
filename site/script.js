const deckMapToFR = {
  arrow: 'flèche',
  clock: 'horloge',
  house: 'maison',
  'light-bulb': 'ampoule',
  sleep: 'sommeil',
  speech: 'parole',
  fire: 'feu',
  footprint: 'empreinte',
  learn: 'apprendre',
  magnet: 'aimant',
  padlock: 'cadenas',
  sheep: 'mouton',
  eye: 'oeil',
  'message-document': 'document ou message',
  pyramid: 'pyramide',
  rainbow: 'arc-en-ciel',
  tower: 'tour',
  tree: 'arbre',
  airplane: 'avion',
  apple: 'pomme',
  building: 'bâtiment',
  'earth-globe': 'globe terrestre',
  flashlight: 'lampe de poche',
  happy: 'heureux',
  fountain: 'fontaine',
  key: 'clé',
  'question-mark': "point d'interrogation",
  sad: 'triste',
  'shooting-star': 'étoile filante',
  tepee: 'tipi',
  bug: 'insecte',
  dice: 'dé',
  'ghost-scary-fear': 'fantôme ou peur',
  'hand-stop': 'main ou stop',
  'magnifying-glass': 'loupe',
  turtle: 'tortue',
  compass: 'boussole',
  fish: 'poisson',
  flower: 'fleur',
  keyhole: 'trou de serrure',
  parachutist: 'parachutiste',
  theater: 'théâtre',
  abacus: 'boulier',
  bee: 'abeille',
  book: 'livre',
  bridge: 'pont',
  'magic-wand': 'baguette magique',
  moon: 'lune',
  alien: 'alien',
  cane: 'canne',
  'cell-phone': 'téléphone portable',
  'direction-sign': 'indicateur de direction',
  'lightning-bolt': 'éclair',
  'scales-justice': 'balance ou justice',
  baby: 'bébé',
  bat: 'chauve-souris',
  bed: 'lit',
  bell: 'cloche',
  bike: 'vélo',
  bird: 'oiseau',
  buffalo: 'buffle',
  bus: 'bus',
  butterfly: 'papillon',
  cactus: 'cactus',
  cake: 'gâteau',
  candy: 'bonbon',
  car: 'voiture',
  castle: 'château',
  cat: 'chat',
  cauldron: 'chaudron',
  centaur: 'centaure',
  'circus-tent': 'châpiteau',
  closet: 'armoire',
  cook: 'cuisinier',
  cow: 'vache',
  crocodile: 'crocodile',
  crown: 'couronne',
  cube: 'cube',
  'danger-dead': 'danger ou mort',
  dinosaur: 'dinosaure',
  dog: 'chien',
  dolphin: 'dauphin',
  door: 'porte',
  dragon: 'dragon',
  'drawer-chest': 'commode',
  egg: 'oeuf',
  elephant: 'éléphant',
  elf: 'elfe',
  fairy: 'fée',
  father: 'père',
  feather: 'plume',
  firefighter: 'pompier',
  flag: 'drapeau',
  flute: 'flûte',
  forest: 'forêt',
  giraffe: 'girafe',
  glasses: 'lunettes',
  guitar: 'guitare',
  hat: 'chapeau',
  heart: 'coeur',
  horse: 'cheval',
  'ice-cream': 'glace',
  kid: 'enfant',
  king: 'roi',
  ladder: 'échelle',
  lion: 'lion',
  'locomotive-train': 'locomotive ou train',
  mermaid: 'sirène',
  mirror: 'miroir',
  monkey: 'singe',
  mother: 'mère',
  motorbike: 'moto',
  mountain: 'montagne',
  mummy: 'momie',
  mushroom: 'champignon',
  'native-american-indian': 'natif americain ou indien',
  'orgre-orc-creature-monster': 'orgre, orc, créature, ou monstre ',
  pants: ' pantalon ',
  park: ' parc ',
  pirate: ' pirate ',
  'planet-space': 'planète ou espace ',
  policeman: ' policier ',
  'prince-charming': ' prince charmant ',
  princess: ' princesse ',
  queen: ' reine ',
  rain: 'pluie ',
  'ring-solid': ' anneau ou bague',
  'rolling-pin': ' rouleau à pâtisserie',
  'sea-shell': ' coquillage ',
  'sea-water': 'mer ou océan ou vagues ',
  shoe: 'chaussure',
  snail: ' escargot ',
  snake: 'serpent ',
  snow: 'neige',
  sock: 'chaussette',
  spaceship: 'vaisseau spatial',
  squid: 'poulpe',
  sun: 'soleil',
  sword: 'épée',
  telescope: 'télescope',
  torch: 'torche',
  'treasure-chest': 'coffre à trésor',
  'treasure-map': 'carte au trésor',
  tunnel: 'tunnel',
  'unicorn-legend-myth': 'légende ou mythe ou légende',
  vampire: 'vampire',
  'water-well': "puits d'eau",
  werewolf: 'loup-garou',
  whale: 'baleine',
  witch: 'sorcière',
  wizard: 'magicien',
  wolf: 'loup' };


let deck = [];
let pickedForSort;

// Fisher-Yates shuffle. (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const StoryGenerator = function (storyBoard) {
  return {
    create: function () {
      let deckClone = [...deck];
      let newStory;
      let story = "";
      const feedback = document.querySelector("#feedback");

      storyBoard.innerHTML = "";

      shuffle(deckClone);

      deckClone.splice(0, 9).forEach(function setupStory(symbol) {
        story += `<li class="card-wrapper"><button aria-label="carte ${deckMapToFR[symbol]}" id="${symbol}-card" class="card">
							<svg role="img">
								<title>${deckMapToFR[symbol]}</title>
								<use xlink:href="#${symbol}"></use>
							</svg>
						</button></li>`;
      });

      feedback.innerHTML =
      "Les cartes ingrédients de ta future histoire sont prêtes.<br>Rappel: Tu peux les réordonner en cliquant dessus dans l'ordre que tu souhaites les voir apparaître dans ton histoire. Une fois toutes les cartes cliquées, elles seront alors réordonnées et tu pourras raconter ton histoire.";
      storyBoard.innerHTML = story;

      pickedForSort = [];

      Array.from(storyBoard.querySelectorAll(".card")).forEach(
      function addOnCardClickEvent(card) {
        card.addEventListener("click", function onCardClick(event) {
		  // Disables clicks once selection is complete.
		  if (pickedForSort.length === 9) {
		  	return;	
		  }

          // If last selected is clicked, removes it from pickedForSort.
          if (pickedForSort.length > 0 && pickedForSort[pickedForSort.length - 1] === card) {
            pickedForSort.pop();

            card.querySelector(".count").remove();
            card.style.border = "";

            feedback.textContent = `${card.getAttribute('aria-label')} déselectionnée`;

            return;
          }

          // Unless it is selected...
          if (!card.querySelector(".count")) {

            // Sets card to its selected state
            card.style.border = "2px dashed deeppink";
            pickedForSort.push(card);
            card.insertAdjacentHTML(
            "afterbegin",
            `<span class="count">${pickedForSort.length}</span>`);


            feedback.textContent = `${card.getAttribute('aria-label')} selectionnée en position ${pickedForSort.length}`;

            // If we reached last selectable card, re-order the card as per pickedForSort order.
            // Note: At this stage cards are not selectable anymore until a new story is created.
            if (pickedForSort.length === 9) {
              setTimeout(function reOrder() {
                storyBoard.innerHTML = "";

                pickedForSort.forEach(function reOrderStory(card) {
                  // Remove selected state.
                  card.querySelector(".count").remove();
                  card.style.border = "";

                  const newCard = `<div class="card-wrapper">${card.outerHTML}</div>`;
                  storyBoard.insertAdjacentHTML("beforeend", newCard);
                });

                feedback.textContent =
                "Ton histoire est maintenant réordonnée, on t'écoute !";

                pickedForSort = [];
              }, 800);
            }
          } else {
            feedback.textContent = `Attention tu peux déselectionner que dans l'ordre décroissant à partir de la dernière carte sélectionnée`;
          }
        });
      });

    } };

};

document.addEventListener("DOMContentLoaded", function initGame(event) {
  const svgSymbols = document.querySelectorAll("svg > symbol");
  const storyGenerator = new StoryGenerator(document.querySelector("#storyboard"));
  const newStoryButton = document.querySelector("#new-story");

  // Init deck
  Array.prototype.forEach.call(svgSymbols, function createDeck(symbol) {
    deck.push(symbol.id);
  });

  window.deck = deck;

  newStoryButton.addEventListener("click", function onNewStoryClick(event) {
    event.preventDefault();
    const instructions = document.querySelector('#instructions').removeAttribute('open');
    storyGenerator.create();
  });
});

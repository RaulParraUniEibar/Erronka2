// Función para mezclar aleatoriamente los elementos del array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

function image(element, i) {
    var nuevoDiv = $('<div></div>');
    nuevoDiv.addClass('image');  
    nuevoDiv.attr('data-id', i);  
    nuevoDiv.css({
      'background-image': 'url(' + element.image + ')',
    });
    $('.game-container').append(nuevoDiv);
}

var cont_space = 0;

function space() {
  cont_space++;
  var nuevoDiv = $("<div></div>");
  nuevoDiv.addClass("space");
  switch (cont_space) {
    case 2:
      nuevoDiv.text("Argazkia beharrezko hitzarekin batu behar duzu!");
      break;
    case 3:
      nuevoDiv.text("Egin klik argazkian eta gero hitzean");
      break;
    case 4:
      nuevoDiv.text("Hitzaren azalpena entzuteko egin klik audioan");
      break;
    default:
      //console.log(cont_space);
      break;
  }
  $(".game-container").append(nuevoDiv);
}

function audio(id) {
  var nuevoDiv = $('<div data-id="' + id + '"></div>');
  nuevoDiv.addClass('audio');  
  $('.game-container').append(nuevoDiv);
}

var currentAudio;

$(document).ready(function() {
  $(document).on("click", ".audio", function() {
    var id = $(this).data('id');
    
    // Stop the currently playing audio, if any
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create a new Audio element and set its source
  var audioFileName = "./audioak/audio_" + id + ".mp3";
    var newAudio = new Audio(audioFileName);

    // Play the new audio
    newAudio.play();

    // Set the new audio as the current audio
    currentAudio = newAudio;
  });
});

function audioResponse(answer) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  var audioFileName = answer === "correct" ? "./audioak/correct.mp3" : "./audioak/wrong.mp3";
  var newAudio = new Audio(audioFileName);
  newAudio.play();
  currentAudio = newAudio;
};

function word(element) {
    var nuevoDiv = $('<div></div>');
    nuevoDiv.addClass('word');  
    nuevoDiv.attr('data-id', element.id);
    nuevoDiv.text(element.word);
    $('.game-container').append(nuevoDiv);
}

const data = [
    { word: 'Erzilla Dorrea', image: 'img/Erzilla_dorrea.png' },
    { word: 'Bermeoko Villa', image: 'img/Bermeoko_Villa.png' },
    { word: 'Estropadak', image: 'img/Estropadak.png' },
    { word: 'Arrantza litorala', image: 'img/Arrantza_litorala.png' },
    { word: 'Arrantza-industriaren sorrera', image: 'img/Arrantza_industriaren_sorrera.png' },
    { word: 'Arrantzaleen kofradiak', image: 'img/Arrantzaleen_kofradiak.png' }
];

const colors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' },
  { color: 'green' },
  { color: 'purple' },
  { color: 'orange' }
];

var array_words = [];

for (var i = 0; i < data.length; i++) { // Crea un array nuevo solo con las palabras y su id
    array_words.push({
      word: data[i].word,
      id: (i)
    });
  }

shuffleArray(array_words); // Mezclamos el array de palabras

for (let i = 0; i < data.length; i++) { // Creamos el "tablero"
    const element = data[i];
    image(element, i);
    space();
    word(array_words[i]);
    audio(array_words[i].id);
}

$(document).on("click", ".image", function(){
  if ($(this).hasClass("matched")) { return; } // Si ya ha sido resuelto, no hace nada

  var hasSelected = $(".game-container").find(".selected").length > 0;

  if (hasSelected){
    var selectedDiv = $(".game-container .selected");
    selectedDiv.removeClass("selected");
    selectedDiv.css("box-shadow", "");
  }

  var id = $(this).data('id');
  $(this).css("box-shadow", "inset 0 0 0 5px " + colors[id].color);
  $(this).addClass("selected");
});

var cont = 0;

$(document).on("click", ".word", function(){
  var hasSelected = $(".game-container").find(".selected").length > 0;
  if (hasSelected){
    var selectedDiv = $(".game-container .selected");
    var id_word = $(this).data('id');
    var id_image = selectedDiv.data('id');

    if (id_word === id_image) {
      console.log('Correcto');
      let answer = "correct";
      audioResponse(answer);
      showOverlay('./gif/correct.gif');
      setTimeout(hideOverlay, 1000);
      $(this).css("box-shadow", "inset 0 0 0 5px " + colors[id_word].color);
      selectedDiv.removeClass("selected");
      selectedDiv.addClass("matched");
      cont++;
      confetti();
    } else {
      console.log('Incorrecto');
      let answer = "incorrect";
      audioResponse(answer);
      showOverlay('./gif/incorrect.gif');
      setTimeout(hideOverlay, 1000);
      selectedDiv.css("box-shadow", "");
      selectedDiv.removeClass("selected");
    }
  } else {
    console.log('No hay nada seleccionado');
  }
});

function showOverlay(gifSource) {
  var overlay = document.getElementById('gifOverlay');
  var gifElement = document.getElementById('responseGif');
  gifElement.src = gifSource;
  overlay.style.display = 'flex';
}

function hideOverlay() {
  var overlay = document.getElementById('gifOverlay');
  overlay.style.display = 'none';
}

function confetti() {
  if (cont == data.length) {
    var overlay = document.getElementById("confetti");
    overlay.style.display = "flex";
    console.log("Confetti!!!");
    console.log("cont: " + cont);
    window.parent.postMessage('irudiak-hitzekin', '*'); // '*': Envía el mensaje a cualquier origen
  } else {
    console.log("No confetti :(");
    console.log("cont: " + cont);
    return;
  }
}

// function hideLoadingOverlay() {
//   var overlay = document.getElementById('loadingOverlay');
//   overlay.style.display = 'none';
// }
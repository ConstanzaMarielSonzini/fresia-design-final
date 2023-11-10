// Lista de palabras para adivinar
const words = ["coquito", "juanita", "diosa", "bombon", "chocolate", "guacamole", "cochina", "wanda", "cosmo", "wandita", "di que si", "gargola", "casamiento", "comida","heroe de centro comercial", "pichichi", "doritos", "gomitas", "heladera", "celeste"];

// Palabra seleccionada al azar
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Palabra oculta (se muestra como guiones bajos al principio)
let hiddenWord = Array(selectedWord.length).fill('_');

// Intentos restantes
let attempts = 6;

// Elementos del DOM
const wordContainer = document.getElementById('word-container');
const guessInput = document.getElementById('guess-input');
const message = document.getElementById('message');

// Función para mostrar la palabra oculta en el contenedor
function displayWord() {
  wordContainer.textContent = hiddenWord.join(' ');
}

// Función para adivinar una letra
function guessLetter() {
  const guess = guessInput.value.toLowerCase();

  if (guess.length !== 1 || !/[a-z]/.test(guess)) {
    message.textContent = 'Ingresa una letra válida.';
    return;
  }

  if (selectedWord.includes(guess)) {
    // Actualizar la palabra oculta con la letra adivinada
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === guess) {
        hiddenWord[i] = guess;
      }
    }

    // Verificar si se adivinó toda la palabra
    if (!hiddenWord.includes('_')) {
      message.textContent = '¡Vamo lo pibeeh!';
    }
  } else {
    // Restar un intento si la letra no está en la palabra
    attempts--;

    // Verificar si se agotaron los intentos
    if (attempts === 0) {
      message.textContent = '¡Perdiste! La palabra era ' + selectedWord;
    } else {
      message.textContent = 'Nop!! Intentos restantes: ' + attempts;
    }
  }

  // Limpiar el campo de entrada y actualizar la pantalla
  guessInput.value = '';
  displayWord();
}

// Inicializar la pantalla
displayWord();

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab51',
  templateUrl: './tab51.page.html',
  styleUrls: ['./tab51.page.scss'],
})
export class Tab51Page {
  currentQuestion: any;
  shuffledAnswers: any[] = []; // Inicializar el array
  selectedAnswer: any = null; // Nueva propiedad para rastrear la respuesta seleccionada

  ngOnInit() {
    this.displayQuestion(); // Llamada a la función al iniciar el componente
  }

  questions = [
    { question: 'non biltzen dira marinelak?', wrong_answers: ['Olatuan.', 'San Frantzisko elizan.'], correct_answer: 'San Pedro Arrantzale kofradian.' },
    { question: 'zergaitik uste duzu garrantzitsua dela?', wrong_answers: [], correct_answer: 'Galdera Irekia, Ahoz azaldu' },
    { question: 'Zenbat atonontzi daude?', wrong_answers: ['33', '92'], correct_answer: '27' },
    { question: 'Zeintzuk dira gehien arrantzatzen diren arrainak?', wrong_answers: ['Berdelak eta Antxoak','Hegaluzeak'], correct_answer: 'Hegaluzeak, antxoak, berdelak eta legatzak' }
  ];

  currentQuestionIndex = 0;

  displayQuestion() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.shuffledAnswers = this.shuffleArray([...this.currentQuestion.wrong_answers, this.currentQuestion.correct_answer]);
    this.selectedAnswer = null; // Reiniciar la respuesta seleccionada
  }

  checkAnswer(selectedAnswer: any) { 
    const correctAnswer = this.currentQuestion.correct_answer;

    this.selectedAnswer = selectedAnswer; // Rastrear la respuesta seleccionada

    if (selectedAnswer === correctAnswer) {
      // Respuesta correcta seleccionada
      // Agrega tu lógica aquí

      this.playSound('correctSound');
      this.currentQuestionIndex++;

      if (this.currentQuestionIndex < this.questions.length) {
        setTimeout(() => this.displayQuestion(), 1000);
      } else {
        // Juego terminado
        // Agrega tu lógica aquí
      }
    } else {
      // Respuesta incorrecta seleccionada
      // Agrega tu lógica aquí

      this.playSound('wrongSound');
    }
  }

  playSound(soundId: string) {
    const audio = document.getElementById(soundId) as HTMLAudioElement;
    audio.play();
  }

  shuffleArray(array: any[]) { 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
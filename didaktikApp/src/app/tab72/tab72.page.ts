import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab72',
  templateUrl: './tab72.page.html',
  styleUrls: ['./tab72.page.scss'],
})
export class Tab72Page {

  constructor(private navCtrl : NavController) { }

  currentQuestion: any;
  shuffledAnswers: any[] = [];
  selectedAnswer: any = null;
  questionsAnswered: number = 0;

  ngOnInit() {
    this.displayQuestion();
  }

  questions = [
    { question: 'Sortzailea Nestor Basterretxea da eta 1924an jaio zen.', wrong_answers: ['Gezurra'], correct_answer: 'Egia' },
    { question: 'Eskulturak 44 kg pisatzen ditu.', wrong_answers: ['Egia'], correct_answer: 'Gezurra' },
    { question: '“Bermeo nire herri maitea, zu zara olatu erraldoi baten irudi zoragarria” esaldia sortzailearen jatorrizko herriaren omenez eginda dago.', wrong_answers: ['Gezurra'], correct_answer: 'Egia' },
    { question: '18 metroko altuera du.', wrong_answers: ['Egia'], correct_answer: 'Gezurra' },
    { question: '2006an sortu zen.', wrong_answers: ['Gezurra'], correct_answer: 'Egia' },
    { question: 'Atzealdean beste kultura ondare bat agertzen da “kikunbera izenekoa”.', wrong_answers: ['Gezurra'], correct_answer: 'Egia' },
  ];

  currentQuestionIndex = 0;

  displayQuestion() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.shuffledAnswers = this.shuffleArray([...this.currentQuestion.wrong_answers, this.currentQuestion.correct_answer]);
    this.selectedAnswer = null;
  }

  checkAnswer(selectedAnswer: any) { 
    const correctAnswer = this.currentQuestion.correct_answer;

    this.selectedAnswer = selectedAnswer;

    if (selectedAnswer === correctAnswer) {
      this.playSound('correctSound');
      this.questionsAnswered++;

      if (this.questionsAnswered === this.questions.length) {
        this.enableNextButton(); // Llamar a la función para habilitar el botón cuando todas las preguntas hayan sido respondidas
      }

      this.currentQuestionIndex++;

      if (this.currentQuestionIndex < this.questions.length) {
        setTimeout(() => this.displayQuestion(), 1000);
      } else {
        // Juego terminado
      }
    } else {
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

  enableNextButton() {
    const nextButton = document.getElementById('nextButton72') as HTMLButtonElement; // Obtener el botón por su ID
    if (nextButton) {
      nextButton.disabled = false; // Habilitar el botón
    }
  }

  hurrengoaButtonClicked() {
    this.navCtrl.navigateForward('/tabs/tab7');
  }
}

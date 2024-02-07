import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab51',
  templateUrl: './tab51.page.html',
  styleUrls: ['./tab51.page.scss'],
})
export class Tab51Page {

  constructor(private navCtrl : NavController) { }

  currentQuestion: any;
  shuffledAnswers: any[] = [];
  selectedAnswer: any = null;
  questionsAnswered: number = 0;

  ngOnInit() {
    this.displayQuestion();
  }

  questions = [
    { question: 'Non biltzen dira marinelak?', wrong_answers: ['Olatuan.', 'San Frantzisko elizan.'], correct_answer: 'San Pedro Arrantzale kofradian.' },
    { question: 'Zergaitik uste duzu garrantzitsua dela?', wrong_answers: [], correct_answer: 'Galdera Irekia, Ahoz azaldu' },
    { question: 'Zenbat atonontzi daude?', wrong_answers: ['33', '92'], correct_answer: '27' },
    { question: 'Zeintzuk dira gehien arrantzatzen diren arrainak?', wrong_answers: ['Berdelak eta Antxoak','Hegaluzeak'], correct_answer: 'Hegaluzeak, antxoak, berdelak eta legatzak' }
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
    const nextButton = document.getElementById('nextButton') as HTMLButtonElement; // Obtener el botón por su ID
    if (nextButton) {
      nextButton.disabled = false; // Habilitar el botón
    }
  }

  hurrengoaButtonClicked() {
    this.navCtrl.navigateForward('/tabs/tab61');
  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // Importa el módulo HttpClient

@Component({
  selector: 'app-tab51',
  templateUrl: './tab51.page.html',
  styleUrls: ['./tab51.page.scss'],
})
export class Tab51Page {

  constructor(private navCtrl: NavController, private http: HttpClient) { }

  currentQuestion: any;
  shuffledAnswers: any[] = [];
  selectedAnswer: any = null;
  questionsAnswered: number = 0;
  questionss: string[] = []; // Array para almacenar las preguntas
  questions: any[] = []; // Array para almacenar las preguntas con respuestas

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.http.get<any[]>('http://localhost:8000/api/galderas/').subscribe(
      (data) => {
        // Extrae solo los valores de la columna "galdera" y almacénalos en el array "questionss"
        this.questionss = data.map(item => item.galdera);

        // Luego de obtener las preguntas, construye el array de preguntas con respuestas
        this.constructQuestions();
      },
      (error) => {
        console.error('Error al obtener las preguntas:', error);
      }
    );
  }

  constructQuestions() {
    this.questions = [
      { question: this.questionss[0], wrong_answers: ['Olatuan.', 'San Frantzisko elizan.'], correct_answer: 'San Pedro Arrantzale kofradian.' },
      { question: this.questionss[1], wrong_answers: [], correct_answer: 'Galdera Irekia, Ahoz azaldu' },
      { question: this.questionss[2], wrong_answers: ['33', '92'], correct_answer: '27' },
      { question: this.questionss[3], wrong_answers: ['Berdelak eta Antxoak', 'Hegaluzeak'], correct_answer: 'Hegaluzeak, antxoak, berdelak eta legatzak' }
    ];

    // Después de construir las preguntas, muestra la primera
    this.displayQuestion();
  }

  displayQuestion() {
    this.currentQuestion = this.questions[this.questionsAnswered];
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
  
      if (this.questionsAnswered < this.questions.length) {
        // Si quedan preguntas, mostrar la siguiente después de un tiempo
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

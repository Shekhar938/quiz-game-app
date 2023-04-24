import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  @ViewChild('container')
  container!: ElementRef;

  names = ["Ro Sieben", "Nathan Samsoedien", "Danny Hegeraad", "Bert Kuipers", "Kaushik Sakala", "Shekhar Kumar", "Bharatgouda Police Patil", "Akshay Kumar", "Eduard Nijensteen", "Eric Edelenbos", "Palvi Jojra", "Eldin Hulsman", "Lex Goudriaan", "Kenneth Mensink", "Jake van der Valk", "Leo Schilperoort", "Daan Bertens", "Frank van Driel", "Arris Tijsseling", "Vishnu Vishweshwar", "Bineet Kumar Singh", "Harish Kumar Verma", "Pratibha Basapure", "Ujwal Jagadeesh", "Ram Polaggari", "Harsha Menda", "Rajat Bansal", "Dhivakar Ragupathy", "Angan Das", "Rajarahul Murugesan", "Suresh Thimmappa", "Ernst de Zwart", "Mark van Dijk", "Werner van der Meer"];
  
  

  seed = [...Array(30).keys()];
  idToLandOn: any;

  items: any[] = [];

  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.INNER;
  randomQuestion!: string;

  constructor() { }

  ngOnInit(): void {
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = [
      "#8F3985",
      "#C92C2C",
      "#FFA500",
      "#FFD700",
      "#32CD32",
      "#008080",
      "#1E90FF",
      "#4B0082",
      "#663399",
      "#800080",
      "#6A5ACD",
      "#4682B4",
      "#2E8B57",
      "#556B2F",
      "#8B4513",
      "#BDB76B",
      "#F4A460",
      "#D2691E",
      "#A0522D",
      "#CD5C5C",
      "#FA8072",
      "#DB7093",
      "#FF69B4",
      "#FF1493",
      "#8B0000",
      "#FF00FF",
      "#FF8C00",
      "#FFDAB9",
      "#F0E68C",
      "#DAA520"
    ];
    
    this.items = this.names.map((value, index) => ({
      fillStyle: colors[index % colors.length],
      text: value,
      id: index,
      textFillStyle: 'black',
      textFontSize: '22',
    }));
  }
  reset() {
    this.wheel.reset();
  }
  // before() {
  //   alert('Your wheel is about to spin');
  // }

  async spin(prize: any) {
    this.idToLandOn = prize;
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  getRandomQuestion() {
    const questions = [
      'How would you like to work often? - Bed,Chair-table,Couch',
      'How many cups of coffee, tea, or beverage-of-choice do you have each morning?',
      'What`s your favorite way to spend a day off?',
      'What`s one thing you can`t say at work that you wish you could?',
      'How would you spend your days if you had unlimited time and resources?',
      'What was your dream profession growing up?',
      'If you weren`t in this career, what could you see yourself doing?',
      'What`s the craziest thing you have ever done?',
      'If you were forced to sing karaoke, what song would you choose and why?',
      'You`re going to sail around the world. What`s the name of your boat?',
      'If I handed you a plane ticket right now to anywhere in the world, where would you go?',
      'If you could choose your age forever, what age would you choose and why?',
      'If you had 25 hours each day, how would you use your extra time?',
      'If you could be the world`s best athlete in any sport, which one would it be any why?',
      'If you could go back in time and pay more attention in one class, what would it be?',
      'Are you team Android or team Apple?',
      'Would you rather be in a zombie apocalypse or a robot apocalypse?',
      'If you could instantly learn a new talent, what would it be?',
      'Why do people say “slept like a baby” when babies wake up all the time in the middle of the night?',
      'Does the person flying in the middle seat get both armrests?',
      'If a turtle doesn`t have a shell, is it homeless or naked?'
    ];
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    this.randomQuestion = questions[randomIndex];
  }

  scrollToName(name: string) {
    const element = document.getElementById(name);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  // onSpinComplete(event: any) {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //     this.selectedName = event.target.innerText.trim();
  //     this.getRandomQuestion();
  //   }, 4000);
  // }

  // after() {
  //   alert('You have been bamboozled');
  // }

}

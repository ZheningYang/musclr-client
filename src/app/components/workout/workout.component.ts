import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-seance',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {


  mySeances = [
    {'name' : 'Toutes les séances'},
    {'name' : 'Fitness'},
    {'name' : 'Prise de masse'},
    {'name' : 'Sèche'}
  ];

  seancesReco: [
    {
      titre: 'Dos épais',
      musclePrincipal: 'Dos',
      type: 'Volume',
      description: '',
      imagePath: 'src/assets/images/seanceIcon.jpg'
    },
    {
      titre: "Prépa Boxe Anglaise",
      musclePrincipal: 'Dos - bras',
      type: 'Force - Explosivité',
      description:'Entrainement visant à developper force et éxplosivité.',
      imagePath: "src/assets/images/seanceIcon.jpg"
    },
    {
      titre: "Prépa Boxe Anglaise",
      musclePrincipal: 'Dos - bras',
      type: 'Force - Explosivité',
      description:'Entrainement visant à developper force et éxplosivité.',
      imagePath: "src/assets/images/seanceIcon.jpg"
    },
    {
      titre: "Prépa Boxe Anglaise",
      musclePrincipal: 'Dos - bras',
      type: 'Force - Explosivité',
      description:'Entrainement visant à developper force et éxplosivité.',
      imagePath: "src/assets/images/seanceIcon.jpg"
    },
    {
      titre: "Prépa Boxe Anglaise",
      musclePrincipal: 'Dos - bras',
      type: 'Force - Explosivité',
      description:'Entrainement visant à developper force et éxplosivité.',
      imagePath: "src/assets/images/seanceIcon.jpg"
    },
    {
      titre: "Prépa Boxe Anglaise",
      musclePrincipal: 'Dos - bras',
      type: 'Force - Explosivité',
      description:'Entrainement visant à developper force et éxplosivité.',
      imagePath: "src/assets/images/seanceIcon.jpg"
    },
    {
      titre: "Prépa Boxe Anglaise",
      musclePrincipal: 'Dos - bras',
      type: 'Force - Explosivité',
      description:'Entrainement visant à developper force et éxplosivité.',
      imagePath: "src/assets/images/seanceIcon.jpg"
    },
    {
      titre: "Prépa Boxe Anglaise",
      musclePrincipal: 'Dos - bras',
      type: 'Force - Explosivité',
      description:'Entrainement visant à developper force et éxplosivité.',
      imagePath: "src/assets/images/seanceIcon.jpg"
    }
    ];

  selectedIndex: number;
  select(index: number) {
    this.selectedIndex = index;
  }

  constructor() { }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

}

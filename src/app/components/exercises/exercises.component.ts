import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Exercise} from '../../models/exercise.model';
import {ExerciseService} from './exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, OnDestroy {

  @Input() exercises: Exercise[];
  @Output()
  onGroupSelected: EventEmitter<String> = new EventEmitter<any>();

  groupsList: String[];
  groupSelected: String;

  constructor(private exerciseService: ExerciseService) {
  }

  clicked(group: String): void {
    this.groupSelected = group;
    this.onGroupSelected.emit(group);
  }

  getGroupsList(): void {
    this.exerciseService.getExerciseGroupList().subscribe(
      data => {
        this.groupsList = data;
      },
      errorCode => console.log(errorCode),
      () => {
      }
    );
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';

    this.getGroupsList();
  }

  ngOnDestroy() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'transparent';
  }

  getExerciseListByGroup(group: string) {
    return this.exerciseService.getExerciseListByGroup(group);
  }

}

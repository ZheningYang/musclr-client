import {Component, OnInit} from '@angular/core';
import {ExerciseService} from '../../exercises/exercise.service';

@Component({
  selector: 'app-workout-generator',
  templateUrl: './workout-generator.component.html',
  styleUrls: ['./workout-generator.component.scss']
})
export class WorkoutGeneratorComponent implements OnInit {

  exerciseLevelList: String[];
  exerciseTypeList: String[];
  workoutDurations = ['10mins', '20mins', '30mins'];
  workoutGoals = [
    {value: 'cardio', viewValue: 'Basic Fitness'},
    {value: 'cardio', viewValue: 'Weight Loss'},
    {value: 'musculation', viewValue: 'Muscle Gain'},
    {value: 'cardio', viewValue: 'Cardio'},
    {value: 'musculation', viewValue: 'Muscle Endurance'}
  ];

  labelPosition = 'after';



  constructor(private exerciseService: ExerciseService) {
  }

  getExerciseLevels(): void {
    this.exerciseService.getExerciseLevelList()
      .subscribe(
        data => {
          this.exerciseLevelList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  getExerciseTypes(): void {
    this.exerciseService.getExerciseTypeList()
      .subscribe(
        data => {
          this.exerciseTypeList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  resetForm(): void {
    console.log('reset');
  }

  generateWorkout(): void {

  }

  ngOnInit() {
    this.getExerciseLevels();
    this.getExerciseTypes();
  }

}

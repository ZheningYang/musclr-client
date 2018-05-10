import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Workout} from '../../models/workout.model';

@Injectable()
export class WorkoutService {
  private springBootServerUrl = environment.springBootServerUrl + 'workout/';

  constructor(private http: HttpClient) {
  }

  generateWorkout(name, level, duration, type, cardio, equipment): Observable<Workout> {
    const params = {
      name: name,
      level: level,
      duration: duration,
      type: type,
      cardio: cardio,
      equipment: equipment
    };
  }
}

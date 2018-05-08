export class Event {
  id: string;
  start_date: string;  // format "yyyy-mm-dd hh:mm"
  end_date: string;
  text: string;
  user_id: string;
  max_participant_number: number;
  workout: String;  // the id of the workout, used in the select of the planning
  workout_name: String;  // the name of the workout used to display info when it's not your event in the scheduler
  participant_list: String[];
}

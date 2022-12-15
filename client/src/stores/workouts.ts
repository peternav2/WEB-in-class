import { api } from './session'

export function getWorkouts() {
    return api<ListEnvelope<Workout>>('workouts');
}
export function getWorkout(id: number) {
    return api<Workout>(`workouts/${id}`);
}
export function getFilteredWorkouts(search: string) {
    return api<ListEnvelope<Workout>>(`workouts/search/${search}`);
}

// export interface Workouts {
//     workouts: Workout[];
//     limit: number;
// }
export interface ListEnvelope<T> {
    workouts: T[];
    limit: number;
  }

export interface Workout {
    workoutId: number;
    name: string;
    description: string;
    muscle_group: string;
    category: string;
    image: string;
}
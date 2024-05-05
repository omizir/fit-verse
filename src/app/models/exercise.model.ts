export type ExerciseType = 'weight' | 'reps' | 'support';
export type ExerciseCategory = 'back' | 'biceps' | 'booty' | 'chest' | 'core' | 'legs' | 'shoulders' | 'triceps' | 'others';

export interface Exercise {
  title: string;
  maximum: number;
  type: ExerciseType;
  category: ExerciseCategory;
  progressed: boolean;
}

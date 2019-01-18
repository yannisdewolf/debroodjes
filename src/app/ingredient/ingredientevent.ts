interface IngredientEvent {
  name: string;
  state: 'WANTED' | 'EXCLUDED' | 'RESET';
}

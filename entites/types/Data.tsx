import { Person } from './Person';
export default interface Data {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}

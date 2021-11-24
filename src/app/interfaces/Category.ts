import { Defect } from './Defect';

export interface Category {
  _id: number;
  name: string;
  defects: Defect[];
}

import Answer from './answer';

export default interface IQuestion {
  text: string;

  imageUrl?: string;

  answers: Answer[];
}

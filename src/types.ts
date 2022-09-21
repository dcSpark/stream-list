export enum StoryKind {
  DCSPARK = 'dcSpark',
  FLINT = 'Flint',
  MILKOMEDA = 'Milkomeda',
  PAIMA = 'Paima'
}

export type JsonListItem = {
  type: StoryKind;
  title: string;
  image?: string;
  note?: string;
};

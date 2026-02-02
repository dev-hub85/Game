export interface Game {
  id: string;
  name: string;

  date?: string;
  create_date?: string;
  tags?: string;

  hits?: number;
  rating?: number;

  thumbnail?: string;
  image?: string;
  categories?: string[];

  video?: {
    mp4?: string | null;
    ogg?: string | null;
  };
  youtube?: string | null;

  url?: string;
  iframe?: string;
  embed?: string;

  width?: number;
  height?: number;

  thumb1?: string;
  thumb2?: string;
  thumb3?: string;
  thumb4?: string;
  thumb5?: string;
  thumb6?: string;
  thumb7?: string;
  thumb8?: string;

  description?: string | null;
  instructions?: string | null;

  translations?: {
    [lang: string]: {
      language?: string;
      instructions?: string | null;
      description?: string | null;
    };
  };

  category: string;
}

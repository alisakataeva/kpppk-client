export interface News {
  id: number;
  title: string;
  text: string;
  html?: string;
  image: string;
  created_at: string;
}

export interface Program {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  created_at: string;
}

export interface Page {
  id: number;
  code: string;
  group: string;
  url: string;
  title: string;
  content: string;
  order: number;
}

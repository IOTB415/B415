export interface users {
  count: number;
  data: user[];
}

export interface user {
  name: string;
  id: string;
  imgurl: string;
  description: string;
  url: string;
}

export interface studies {
  count: number;
  data: study[];
}

export interface study {
  name: string;
  id: string;
  imgurl: string;
  description: string;
  url: string;
}
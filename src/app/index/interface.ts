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
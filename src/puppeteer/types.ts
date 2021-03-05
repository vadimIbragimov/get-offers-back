export type ParsedDataType = {
  postId: string;
  text: string;
  date: number;
  price: string | number;
  post: string;
};

export type ParsedGroupType = {
  name: string;
  data: ParsedDataType[];
}
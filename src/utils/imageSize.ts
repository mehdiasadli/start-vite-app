export const getSizedImage = (src: string, quality?: number) => {
  if (!quality) return src;

  const splitter = 'upload/';
  const [beginning, end] = src.split(splitter);

  return `${beginning}${splitter}w_${quality}/${end}`;
};

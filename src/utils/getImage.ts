export const getImage = (type: 'men' | 'women', id: number) => {
  return `https://randomuser.me/api/portraits/${type}/${id}.jpg`
}

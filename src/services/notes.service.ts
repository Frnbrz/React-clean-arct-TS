const baseUrl = 'http://localhost:3001/api/';
const noteUrl = baseUrl + 'notes/';

export const getNotes = () => {
  return fetch(noteUrl).then((res) => res.json());
};

export const getNote = (noteId: number) => {
  return fetch(noteUrl + noteId).then((res) => res.json());
};

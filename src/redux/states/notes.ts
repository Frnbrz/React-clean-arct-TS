import { createSlice } from '@reduxjs/toolkit';
import { NoteInfo } from '../../models';
import { clearLocalStorage, persistLocalStorage } from '../../utilities';

export const EmptyUserState: NoteInfo = {
  id: 0,
  content: '',
  date: '',
  important: false,
};

export const UserKey = 'user';

export const notesSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : EmptyUserState,
  reducers: {
    getNotes: (state, action) => {
      return action.payload;
    },
    createNote: (state, action) => {
      return action.payload;
    },
    updateNote: (state, action) => {
      const result = { ...state, ...action.payload };
      return result;
    },
    resetNotes: () => EmptyUserState,
  },
});

export const { getNotes, createNote, updateNote, resetNotes } =
  notesSlice.actions;

export default notesSlice.reducer;

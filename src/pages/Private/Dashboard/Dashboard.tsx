import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Note } from '../../../models';
import { fetchNotes } from '../../../redux/states/notes';
import { AppStore } from '../../../redux/store';
import { getNotes } from '../../../services';

function Dashboard() {
  const dispatch = useDispatch();
  const notesState = useSelector((store: AppStore) => store.notes);

  const getNotesFromApi = async () => {
    try {
      const result = await getNotes();
      dispatch(fetchNotes(result));
    } catch (error) {}
  };
  useEffect(() => {
    getNotesFromApi();
  }, []);

  console.log(notesState);

  return (
    <Box>
      <Typography variant='h1'>Dashboard</Typography>
      {notesState
        ? notesState?.map((note: Note) => (
            <Typography key={note.id}>{note.content}</Typography>
          ))
        : null}
    </Box>
  );
}
export default Dashboard;

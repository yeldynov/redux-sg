import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };

// // console.log(songsSlice.actions.addSong('jjikjn'));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong('New Song!!!'));

// // THE CODE ABOVE MAKES THE SAME AS =>
// // store.dispatch({
// //   type: 'song/addSong',
// //   payload: 'New Song!!!',
// // });

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

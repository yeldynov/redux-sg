import { useDispatch } from 'react-redux';
import { reset } from './store';

import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import './index.css';

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className='container is-fluid'>
      <button className='button is-danger' onClick={handleResetClick}>
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import './index.css';

export default function App() {
  const handleResetClick = () => {};

  return (
    <div className='container is-fluid'>
      <button className='button is-danger' onClick={handleResetClick}>
        Rest Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

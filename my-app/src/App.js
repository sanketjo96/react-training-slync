import './App.css';
import PostListFetch from './components/GET/PostListFetch';
// import PostList from './components/GET/PostList';

function App() {
  return (
    <div className="App">
      {/* <PostList></PostList> */}
      <PostListFetch></PostListFetch>
    </div>
  );
}

export default App;

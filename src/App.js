import './App.css';

// task 1
import Profile from './components/Profile/Profile';
import user from './data//user.json';

export default function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}


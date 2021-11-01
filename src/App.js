import './App.css';

// task 1
import Profile from './components/Profile/Profile';
import user from './data//user.json';

// task 2

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

// task 3

import FriendList from './components/Friends/Friends';
import friends from './data/friends.json';



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
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends}/>
    </div>
  
  );
}


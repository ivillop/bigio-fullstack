// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryList from './components/StoryList';
import AddStory from './components/AddStory';
import StoryDetail from './components/StoryDetail';
import EditStory from './components/EditStory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<StoryList />} />
        <Route path='/add' element={<AddStory />} />
        <Route path='/detail/:id' element={<StoryDetail />} />
        <Route path='/edit/:id' element={<EditStory />} />
      </Routes>
    </Router>
  );
};

export default App;

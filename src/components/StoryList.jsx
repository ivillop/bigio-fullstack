// src/components/StoryList.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem('stories')) || [];
    setStories(savedStories);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main>
      <div className='search-add'>
        <h1>Story List</h1>
        <input
          type='text'
          placeholder='Search by title or author'
          value={searchTerm}
          onChange={handleSearch}
        />
        <Link to='/add'>Add New Story</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStories.map((story, index) => (
            <tr key={index}>
              <td>{story.title}</td>
              <td>{story.author}</td>
              <td>{story.category}</td>
              <td>{story.tags.join(', ')}</td>
              <td>{story.status}</td>
              <td>
                <Link to={`/detail/${index}`}>View</Link>
                {' | '}
                <Link to={`/edit/${index}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default StoryList;

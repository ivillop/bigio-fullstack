import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStory = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState('Draft');
  const navigate = useNavigate();

  const handleAddStory = () => {
    const newStory = {
      title,
      author,
      synopsis,
      category,
      tags,
      status,
      chapters: [],
    };
    const existingStories = JSON.parse(localStorage.getItem('stories')) || [];
    existingStories.push(newStory);
    localStorage.setItem('stories', JSON.stringify(existingStories));
    navigate('/');
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter') {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };

  return (
    <main>
      <div className='add-story'>
        <h1>Add New Story</h1>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder='Synopsis'
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
        <input
          type='text'
          placeholder='Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type='text'
          placeholder='Add a tag and press Enter'
          onKeyPress={handleAddTag}
        />
        <div>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value='Draft'>Draft</option>
          <option value='Published'>Published</option>
        </select>
        <button onClick={handleAddStory}>Save Story</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </div>
    </main>
  );
};

export default AddStory;

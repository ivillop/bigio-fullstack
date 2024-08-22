// src/components/EditStory.js
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingStories = JSON.parse(localStorage.getItem('stories')) || [];
  const story = existingStories[id];

  const [title, setTitle] = useState(story.title);
  const [author, setAuthor] = useState(story.author);
  const [synopsis, setSynopsis] = useState(story.synopsis);
  const [category, setCategory] = useState(story.category);
  const [tags, setTags] = useState(story.tags);
  const [status, setStatus] = useState(story.status);

  const handleUpdateStory = () => {
    const updatedStory = {
      ...story,
      title,
      author,
      synopsis,
      category,
      tags,
      status,
    };
    existingStories[id] = updatedStory;
    localStorage.setItem('stories', JSON.stringify(existingStories));
    navigate('/');
  };

  return (
    <main>
      <div className='edit-story'>
        <h1>Edit Story</h1>
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
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setTags([...tags, e.target.value]);
              e.target.value = '';
            }
          }}
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
        <button onClick={handleUpdateStory}>Save Changes</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </div>
    </main>
  );
};

export default EditStory;

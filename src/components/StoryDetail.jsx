import { useParams, Link } from 'react-router-dom';

const StoryDetail = () => {
  const { id } = useParams();
  const stories = JSON.parse(localStorage.getItem('stories')) || [];
  const story = stories[id];

  if (!story) {
    return <main>Story not found</main>;
  }

  return (
    <main>
      <h1>{story.title}</h1>
      <p>
        <strong>Author:</strong> {story.author}
      </p>
      <p>
        <strong>Synopsis:</strong> {story.synopsis}
      </p>
      <p>
        <strong>Category:</strong> {story.category}
      </p>
      <p>
        <strong>Tags:</strong> {story.tags.join(', ')}
      </p>
      <p>
        <strong>Status:</strong> {story.status}
      </p>
      <h2>Chapters</h2>
      <ul>
        {story.chapters.map((chapter, index) => (
          <li key={index}>{chapter.title}</li>
        ))}
      </ul>
      <Link to='/'>Back to List</Link>
    </main>
  );
};

export default StoryDetail;

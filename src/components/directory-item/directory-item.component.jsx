import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

// DirectoryItem component is designed to represent a category item in a directory. 
// It displays the category's background image, title, and provides an onClick event handler to navigate to a specific route associated with the category. 
// The useNavigate hook is used to handle the navigation logic.

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  
  return (
    <div className='directory-item-container' onClick={onNavigateHandler}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;

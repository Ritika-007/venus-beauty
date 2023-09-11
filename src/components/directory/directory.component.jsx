import DirectoryItem from '../directory-item/directory-item.component'
import './directory.styles.scss'

const categories = [
  {
    id: 1,
    title: 'Bags',
    imageUrl: 'https://fashionchinaagency.com/wp-content/uploads/2021/01/10-Trends-for-Luxury-Bags-in-China-Fashion-Agency.jpg',
    route: 'shop/bags',
  },
  {
    id: 2,
    title: 'Makeup',
    imageUrl: 'https://static-bebeautiful-in.unileverservices.com/1200/900/Beginners-makeup-kit-for-1550_mobilehome.jpg',
    route: 'shop/makeup',
  },
  {
    id: 3,
    title: 'Fragrances',
    imageUrl: 'https://c.ndtvimg.com/2022-10/41q03j48_perfumes650_625x300_17_October_22.jpg',
    route: 'shop/fragrances',
  },
  {
    id: 4,
    title: 'Beauty & Grooming',
    imageUrl: 'https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg?w=2000',
    route: 'shop/beauty%20&%20grooming',
  },
  {
    id: 5,
    title: 'Hair Care',
    imageUrl: 'https://styl-inc.com/wp-content/uploads/2022/04/Untitled-design-1000x500.jpg',
    route: 'shop/hair%20care',
  },
];

// Directory component is responsible for rendering a list of category items. 
// It maps over the categories array and renders a DirectoryItem component for each category, 
// passing the category data as a prop to display a list of categories in your application's directory. 

const Directory = () => {
  
  return (
    <div className='directory-container'>
        {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
        ))}
   </div>
  )
}

export default Directory

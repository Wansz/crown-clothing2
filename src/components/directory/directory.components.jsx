import './directory.styles.scss';
import CategoryItem from '../category-item/category-item';


const Directory = ({ category }) => {
    return (
        <div className="directory-container">
            {category.map((categories) => (
                <CategoryItem key={categories.id} category={categories} />
            ))}
        </div>
    )
}


export default Directory;
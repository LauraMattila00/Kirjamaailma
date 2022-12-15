
import './category.css'

const Category = props => {
    const { categoryName, icon, trnro } = props;
    return <div className='category'>
        <a href={'/products/' + trnro}>{icon}
            {categoryName}</a>
    </div>
}

export default Category;
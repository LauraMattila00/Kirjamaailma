
import './category.css'

const Category = props => {
    const { categoryName, icon, trnro } = props;
    return <div className='category'>
        {icon}
        <a href={'/products/' + trnro}>{categoryName}</a>
    </div>
}

export default Category;
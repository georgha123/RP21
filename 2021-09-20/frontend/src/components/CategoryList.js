import Category from '../components/Category';


function CategoryList(props) {
    return(<div>
            
            {props?.category?.map(category=> (
                <Category 
                key={category.id} 
                name={category.name} 
                />
            ))}
            </div>);
}

export default CategoryList;
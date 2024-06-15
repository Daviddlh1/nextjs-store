interface CategoryProps {
    params: {
        categories: string[]
    }
    searchParams?: {
        
    }
}

export default function Category(props: CategoryProps) {
    const { categories } = props.params
    
    return (
        <h1>Dynamic Category: {categories}</h1>
    )
}
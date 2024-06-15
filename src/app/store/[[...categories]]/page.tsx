import { ProductsWrapper } from "@/components/store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "@/services/shopify/collections"
import { getProducts } from "@/services/shopify/products"

interface CategoryProps {
    params: {
        categories: string[]
    }
    searchParams?: {

    }
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params
    let products = []
    if (categories?.length > 0) {
        const [category] = categories
        const collections = await getCollections()
        const selectedCollectionId = collections.find((collection: any) => collection.handle === category)?.id
        if (selectedCollectionId) {
            products = await getCollectionProducts(selectedCollectionId)
        }
    } else {
        products = await getProducts()
    }


    return (
        <ProductsWrapper products={products} />
    )
}
interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
    console.log(searchParams)
    return (
        <div>
            <h1>Product Page</h1>
        </div>
    )
}
import { getCollections } from "@/services/shopify/collections"
import styles from './StoreLayout.module.sass'
import Link from "next/link"

export default async function CategoryLayout({ children }: { children: React.ReactNode }) {
    const collections = await getCollections()

    return (
        <main className={styles.StoreLayout}>
            <h1>Explore</h1>
            <nav>
                <ul className={styles.StoreLayout__list}>
                    {collections.map((collection: any) => (
                        <Link
                            key={collection.id}
                            href={'/store/' + collection.handle}
                            className={styles.StoreLayout__chip}
                        >
                            {collection.title}
                        </Link>
                    ))}
                </ul>
            </nav>
            {children}
        </main>
    )
}
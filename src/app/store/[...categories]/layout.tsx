export default function CategoryLayout({ children }: { children: React.ReactNode}) {
    return (
        <main>
            <nav>Navegación de las categorias</nav>
            {children}
        </main>
    )
}
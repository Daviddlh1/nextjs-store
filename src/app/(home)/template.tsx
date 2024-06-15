import { Hero } from "@/components/home/Hero";
import { Description } from "@/components/home/Description";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    console.log('HomeLayout')
    return (
        <>
            <Hero />
            <Description />
            {children}
        </>
    )
}
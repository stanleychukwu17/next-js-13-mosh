import Link from "next/link"
import ProductCard from "./components/ProductCard"

export default function HomePage() {
    return (
        <main>
            <div className="">Hello world</div>
            <div className="">
                <ProductCard />
            </div>
            <div className="">
                <Link href="/users">Users</Link>
            </div>
        </main>
    )
}
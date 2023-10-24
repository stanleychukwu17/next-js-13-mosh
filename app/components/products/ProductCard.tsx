import AddToCart from "./AddToCart"

export default function ProductCard() {
    return (
        <section className="">
            <div className="">item_image</div>
            <div className="">item_title</div>
            <div className="">item_price</div>
            <div className="">
                <AddToCart />
            </div>
        </section>
    )
}
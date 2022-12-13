import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Sample_products = [
    {
        id: "1",
        price: 120,
        title: "First",
        description: "First product",
    },
    {
        id: "2",
        price: 111,
        title: "Second",
        description: "Second Product",
    },
];
const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {Sample_products.map((product) => {
                    return (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                    );
                })}
            </ul>
        </section>
    );
};
export default Products;

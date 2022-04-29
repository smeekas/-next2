import Link from "next/link";
function Posts({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div style={{margin:"1rem"}} key={product.id}>
            <Link href={`products/${product.id}`} passHref>
              <h2>
                {product.id} {product.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Posts;
export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  console.log(data)
  return {
    props: {
      products: data,
    },
  };
}

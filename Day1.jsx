const Day1 = () => {
    const multiply = (a, b) => a * b
    const date = new Date();
    const product = {
        name: "Laptop",
        price: 1200,
        availablity: "In stock",
    }
    return (
        <section>
            <h1 className="text-green-500 font-bold">Hello World</h1>
            <form>
                <label htmlFor="name" className="text-gray-500 font-bold">Name</label>
                <input type="text" placeholder="Enter your name"/>
            </form>
            <div>
                <h1 className="text-red-500 font-bold">JSX rules</h1>
                <p className="text-blue-500 font-bold">JSX elements must be properly closed</p>
            </div>
            <p className="font-bold">2 + 2 = {2 + 2}</p>
            <p className="font-bold">2 * 2 = {multiply(2, 2)}</p>
            <p className="text-green-700">Date: {date.getDate()}</p>
            <div>
                <h1>Name: {product.name}</h1>
                <h1>Price: ${product.price}</h1>
                <h1>Available: {product.availablity}</h1>
            </div>
        </section>
    );
};



export default Day1;

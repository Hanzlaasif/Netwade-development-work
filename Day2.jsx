const Day2 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const userinfo = [
        {
            username: "John",
            email: "jd@gmail.com",
            location: "USA",
        },

        {
            username: "Doe",
            email: "de@gmail.com",
            location: "UK", 
        },
    ];
    const users = [
        {id: 1, name: "Alice", age: 20},
        {id: 2, name: "Bob", age: 22},
        {id: 3, name: "Charlie", age: 25},
    ];
    const products = [
        {id: 1, name: "Phone", price: "$699"},
        {id: 2, name: "Laptop", price: "$1200"},
        {id: 3, name: "Headphones", price: "$199"},
    ];
    //ex2
    const handleAddExpense = () => {
        if (description.trim() == " " || amount == " ") return;
        addExpense({
            id: Date.now(),
            description,
            amount: +amount,
        });
        setDescription(" ");
        setAmount(" ");
    };

    return (
        <nav className="bg-blue-800">
            <div className="relative w-[1080px] mx-auto flex items-center justify-between">
                <ul className="flex">
                    <li className="text-white font-medium py-7 hover:text-blue-400 transition-all duration-200">Payments</li>
                    <li className="text-white font-medium py-7 hover:text-blue-400 transition-all duration-200">Booking</li>
                    <li className="text-white font-medium py-7 hover:text-blue-400 transition-all duration-200">Corparate Card</li>
                    <li className="text-white font-medium py-7 hover:text-blue-400 transition-all duration-200">Payroll</li>
                    <li className="text-white font-medium py-7 hover:text-blue-400 transition-all duration-200">Resources</li>
                    <li className="text-white font-medium py-7 hover:text-blue-400 transition-all duration-200">Support</li>
                    <li className="text-white font-medium py-7 hover:text-blue-400 transition-all duration-200">Pricing</li>
                </ul>
            </div>
        </nav>
    );
    <Product name="Iphone" price={30000} />;
    <Card>
        <h1>My Card</h1>
        <p>This is some content for card 1</p>
    </Card>;
    <Person name="Ali" age={21} />;
    <User name="Hanzla" age={22} isMarried={false} />;
    <main>

        { numbers.map((number) => (
            <ul key={number} className="py-5 bg-gradient-to-r from-indigo-500 flex">
                <li className="mx-4 text-white text-3xl">{number}</li>
            </ul>
        ))}

        { userinfo.map(({username, email, location}) => (
            <ul key={Math.random()} className="py-5 bg-gradient-to-r from-indigo-500 flex">
                <li className="mx-4 text-white text-3xl">{username}</li>
                <li className="mx-4 text-white text-3xl">{email}</li>
                <li className="mx-4 text-white text-3xl">{location}</li>  
            </ul>

        ))}
        
        <div>
            { users.map((user) => (
                <div key={user.id} className="py-5 bg-gradient-to-r from-indigo-500 flex">
                    <h1 className="mx-4 text-white text-3xl">Name: {user.name}</h1>
                    <h1 className="mx-4 text-white text-3xl">Age: {user.age}</h1>
                </div> 
            )
        )}
        </div>

        <div>
            { products.map((p) => (
                <div key={p.id} className="py-5 bg-gradient-to-r from-indigo-500 flex">
                    <h1 className="mx-4 text-white text-3xl">Name: {p.name}</h1>
                    <h1 className="mx-4 text-white text-3xl">Price: {p.price}</h1>
                </div> 
            )
        )}
        </div>
        {/* ex2 */}
        <div>
        <button onClick={handleAddExpense} className="bg-purple-600 text-white w-full px-4 py-2 rounded-lg shadow-md 
        hover:bg-purple-700 duration-200 focus: outline-none focus:ring-2 focus:ring-purple-500">
        Add Expense
        </button>
        </div>
    </main>
};

const User = ({name, age, isMarried}) => {
    return (
        <section>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Is Married: {isMarried}</h1>
        </section>
    );
};
const Person = ({name, age}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
        </div>
    );
};
const Product = ({name, price}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
    );
};
const Card = ({Card}) => {
    return (
        <div>{Card}</div>
    );
};



export default Day2;

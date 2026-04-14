const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) => 
//{
    // if (isValid) {
    //     return <ValidPassword />;
    // }

    // return <InvalidPassword />;
    // return
     
    isValid ? <ValidPassword /> : <InvalidPassword />;
//};

const Cart = () => {
    const items = ["Hoodie", "Laptop", "SSD"];

    return <div>
        <h1>Cart</h1>
        {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}

        <ul>
            <h4>Products</h4>

            {items.map(item => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>


    </div>;
};

//ex1
const Wheather = () => {
    let temp = 26;

    if (temp < 15) {
        return <h1>It's cold outside!</h1>;
    }
    else if (temp >= 15 && temp <=25) {
        return <h1>It's nice outside!</h1>;
    }
    else if (temp > 25) {
        return <h1>It's hot outside!</h1>;
    }
    else {
        return <h1>Enter any number!</h1>;
    }
};

//ex2
const UserStatus = (props) => {
    if (props.loggedIn && props.isAdmin) {
        return <h1>Welcome Admin</h1>;
    }
    else {
        return <h1>Welcome user</h1>;
    }
};

//ex3
const Greeting = ({timeofDay}) => {
    return timeofDay == "Evening" ? (
    <h1>Good Evening!</h1>
) : (
    <h1>Good Morning!</h1>
);
};


const Day4 = () => {
    return (
        <section>
            <h1 className="text-red-500 bg-green-900 px-2">
                Inline Style
            </h1>
        </section>
    );
    return <Greeting timeofDay="Evening" />;
    return <UserStatus loggedIn={true} isAdmin={false} />;
    return <Wheather />;
    return <Cart />;
    return (
        <section>
            <Password isValid={true} />
        </section>
    );
};


export default Day4;

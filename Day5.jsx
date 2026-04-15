import { FaCartArrowDown } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa"; 
import { FaBeer } from "react-icons/fa";


//ex1
const StyleCard = () => {
    return (
        <div className="bg-blue-300 text-blue-500 px-20 border-r-10">
            <h1>Style Card</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore dolore, nihil molestias necessitatibus illum 
                architecto fugiat, vero dolorum itaque consequatur repudiandae 
                exercitationem? Quae possimus, quibusdam error nobis laboriosam consequuntur ipsum?
            </p>
        </div>
    );
};


//ex2
const ProfileCard = () => {
    return (
        <div className="bg-gray-300 text-black px-15 border-r-8">
            <h1>Hello World</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Omnis, maxime. Deleniti tempora aperiam neque rem quae. Nulla 
                earum odio quis ipsam? Quis non voluptas cum ad magnam aperiam, quibusdam id.
            </p>
        </div>
    );
};


//ex3
const IconComponent = () => {
    return (
        <div>
            <FaBeer size={30} color="yellow" />
        </div>
    );
};


const Button = () => {
    return (
        <button onClick={() => console.log("You Clicked me")}>Click</button>
    );
};


const Copy = () => {
    const copyHandler = () => {
        console.log("Stop stealing my content");
    };
    return (
        <p onCopy={copyHandler}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id, corrupti minus. Natus id fugiat explicabo quisquam debitis sunt error aspernatur?
        </p>
    );
};


const Day5 = () => {
    return <Copy />;
    return (
        <section>
            <Button />
        </section>
    );
    return <IconComponent />;
    return <ProfileCard />;
    return <StyleCard />;
    return (
        <section>
            <FaCartArrowDown />
            <FaCalculator />
        </section>
    );
};

export default Day5;

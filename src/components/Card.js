function Card(props) {
    function sayHi(){
        console.log("Hi!")
    }
    return (
        <div className="card">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
            <button onClick={sayHi}>  I wanna say hi</button>
        </div>
    );
};

export default Card;
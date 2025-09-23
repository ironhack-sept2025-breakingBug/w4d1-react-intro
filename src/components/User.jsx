
function User(props) {
    return (
        <div className="box">
            <h1>Name: {props.userName}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Email: {props.email}</h2>
        </div>
    )
}

export default User
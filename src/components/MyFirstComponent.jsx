function MyFirstComponent(){

    const amount = 21;

    const user = {
        firstName: 'Alice',
        surname: 'Smith'
    }

    const renderTitle = () => {
        return <h2>This is MyFirstComponent</h2>
    }

    const divStyle = {
        background: "rgb(41, 57, 93)",
        border: "1px solid #fff",
        margin: "2em auto",
        padding: "2em"
    }

    return (
        <div style={divStyle}>
            {renderTitle()}

            {/* this is a comment */}

            <h2>Amount has the value... {amount * 2}</h2>

            <h3>Hi, {user.firstName} {user.surname.toUpperCase()}</h3>
        </div>
    )
}

export default MyFirstComponent
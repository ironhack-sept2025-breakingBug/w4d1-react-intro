import Header from "./components/Header"
import MyFirstComponent from "./components/MyFirstComponent"
import Footer from "./components/Footer"
import User from "./components/User"



function App() {
  return (
    <>
      <h1>React Intro</h1>

      <Header title='hello world' />

      <User userName="alice" age={30} email="alice@example.com" />
      <User userName="bob" age={40} email="bob@example.com" />
      <User userName="charlie" age={50} email="charlie@example.com" />

      <MyFirstComponent />

      <Footer>
        <p>breakingBug, 2025</p>
      </Footer>
       
    </>
  )
}

export default App

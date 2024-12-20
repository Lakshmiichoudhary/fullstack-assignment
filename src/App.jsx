import Header from "./component/header"
import Sidebar from "./component/Sidebar"
import Body from "./component/Body"

function App() {
  

  return (
      <div className="flex h-screen">
        <div className="w-[270px]">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Header />
          <Body />
        </div>
      </div>
  )
}

export default App

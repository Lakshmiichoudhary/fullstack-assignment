import Sidebar from "./component/Sidebar"
import Body from "./component/Body/Body"
import Navbar from "./component/Header/Navbar"

function App() {
  
  return (
      <div className="flex h-screen">
        <div className="w-[270px]">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Body />
        </div>
      </div>
  )
}

export default App

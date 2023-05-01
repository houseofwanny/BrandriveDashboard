import "./App.css";
import SideNav from "./Component/SideNav/SideNav";
import DashboardBody from "./Component/DashboardBody/DashboardBody";

function App() {
  return (
    <div>
     {/* <HeadButton/> */}
      <SideNav />
      <DashboardBody/>
      {/* <Header/> */}
    </div>
  );
}

export default App;

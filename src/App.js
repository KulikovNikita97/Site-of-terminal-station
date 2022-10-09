import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, PageHeader } from "antd";
import "antd/dist/antd.css";
import './index.css';
import Avatar from './label copy.jpg';


const App = () => {
  debugger
  return (
    <div>
      <nav style={{ width: '100%', marginTop: '-60px', position: 'fixed', zIndex: 1000}}>
        <PageHeader
          ghost={false}
          // onBack={() => window.history.back()}
          avatar={Avatar}
          title="Manehatten Terminal Station"
          subTitle="Equestria Railway North-West"
          extra={[
            <Button key="1">
              <Link to="/support">Support</Link>
            </Button>,
            <Button key="1">
              <Link to="/news">News</Link>
            </Button>,
            <Button key="1">
              <Link to="/suburbian">Suburbian trains</Link>
            </Button>,
            <Button key="1">
              <Link to="/long_distance">Long-distance trains</Link>
            </Button>,
            <Button type="primary" key="1">
              <Link to={localStorage.getItem('setAdminMe')
                ? '/admin'
                : '/logging'
              }>Administrator</Link>
            </Button>
          ]}
        ></PageHeader>
      </nav>

      <div style={{marginTop: '60px'}}>
        <Outlet />
      </div>



    </div >
  )
}

export default App;




















// const Home = () => {
//   return <div>
//     <h1>Welcome</h1>
//     <Routes>
//       {/* <Route path='/' element={<Home />} /> */}
//       <Route path='/students' element={<Students />} />
//     </Routes>
//   </div>
// };

// const Students = () => {
//   return <h1>Students 2</h1>;
// };

// const App = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "students", element: <Students /> },
//     // ...
//   ]);
//   return routes;
// };

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;

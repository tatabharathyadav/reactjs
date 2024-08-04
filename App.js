// import React from 'react';
// import Home from './components/Home';
// //import About from './components/About';
// import Contact from './components/Contact';
// import {Routes,Route} from 'react-router-dom';
// import Navbar from './components/navbar';
// import Success from './components/success';
// import Notfound from './components/Notfound';
// import Project from './components/Project';
// import Featured from './components/Featured';
// import New from './components/New';
// import Users from './components/Users';
// import UserDetails from './components/UserDetails';
// import { AuthProvider } from './components/auth';
// import Login from './components/Login';
// import Logout from './components/logout';
// import PrivateRoute from './components/PrivateRoute';
// const LazyAbout=React.lazy(()=> import('./components/About'));
// function App() {
//   return (
//     <AuthProvider className="App">
//       <Navbar />
//       <Routes>
//         <Route  path="/" element={<Home />}/>
//         <Route path="/about" element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>}/>
//         <Route path="/contact" element={<Contact />}/>
//         <Route path="/success" element={<Success />}/>
//         <Route path="/project" element={<Project />}>
//           <Route index element={<New/>}/>
//           <Route path="featured" element={<Featured/>}/>
//           <Route path="new" element={<New/>}/>
//         </Route>
//         <Route path="/users" element={
//         <PrivateRoute><Users /></PrivateRoute>}/>
//         <Route path="/users/:userId" element={<UserDetails />}/>
//         <Route path="/login" element={<Login />}/>
//         <Route path="/logout" element={<Logout />}/>
//         <Route path="*" element={<Notfound/>}/>
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;



import React from "react";
import Final from "./HigherOrderComponent/Clickcounter";
import Final2 from "./HigherOrderComponent/Hovercounter";

function App() {
  return (
    <div className="App">
      <Final name={"bharath"} />
      <Final2 />
    </div>
  );
}

export default App;

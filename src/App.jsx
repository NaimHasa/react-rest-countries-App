import Countries from "./components/Countries/Countries";

const App = () => {
  return (
    <div>
      <Countries></Countries>
    </div>
  );
};

export default App;





// import { useEffect, useState } from 'react';
// import './App.css';
// function App() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data));

//   }, [])

//   return (
//     <div className='App'>
//       <h1>Simple Rest Countries</h1>

//       <h2>Total Data: {countries.length}</h2>

//       {
//         countries.map(country => loadCountries(country))
//       }
//     </div>
//   )
// }

// function loadCountries(props) {
//   return (
//     <div>
//       <div>
//         <h2>Name:{props.name.common}</h2>
//         <img src={props.flags.png} alt="" />
//       </div>
//     </div>
//   )
// }
// export default App;


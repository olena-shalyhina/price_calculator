import './App.css';
import SummaryChartComponent from './components/SummaryChartComponent';
import RangeComponent from './components/RangeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="padding pt-4">Price Calculate</h1>
      <RangeComponent />
      <SummaryChartComponent />
    </div>
  );
}

export default App;

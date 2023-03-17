import './App.css';
import SummaryChartComponent from './components/SummaryChartComponent';
import RangeComponent from './components/RangeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <RangeComponent />
      <SummaryChartComponent />
    </div>
  );
}

export default App;

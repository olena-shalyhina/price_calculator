import SummaryChartComponent from './components/SummaryChartComponent';
import RangeComponent from './components/RangeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <main className='main_container'>
        <section className='calculator_card' aria-labelledby='page-title'>
          <header className='calculator_header'>
            {/* <p className='eyebrow'>Cloud storage</p> */}
            <h1 id='page-title'>Price calculator</h1>
            <p className='calculator_description'>
              Compare monthly storage and transfer costs across providers.
            </p>
          </header>
          <RangeComponent />
          <SummaryChartComponent />
        </section>
      </main>
    </div>
  );
}

export default App;

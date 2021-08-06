import Header from './components/Header';
import Side from './components/Side';
import Main from './components/Main';

function App() {
  return (
    <div className={div}>
      <Header />
      <Side />
      <Main />
      </div>
  );
}

const div = `
  h-full 
  grid 
  grid-cols-12 
`;

export default App;

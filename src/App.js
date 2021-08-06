import Header from './components/Header';
import Side from './components/Side';
import Main from './components/Main';

const div = `
  h-full 
  grid 
  grid-cols-12 
`;

function App() {
  return (
    <div className={div}>
      <Header />
        <Side />
        <Main />
      </div>
  );
}

export default App;

import Header from './components/Header';
import Side from './components/Side';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <div className={div}>
        <Side />
        <Main />
        </div>
    </>
  );
}

const div = `
  h-full 
  w-full
  grid 
  grid-cols-12 
  xl:max-w-screen-xl
  mx-auto
`;

export default App;

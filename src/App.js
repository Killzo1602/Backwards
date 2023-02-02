import './App.css';
import GameComponent from './components/GameComponent';

function App() {
  return (
    <>
      <section className='notification-message'>
         <div className='notification-message-text'>
           <strong className='notification-message-text'>Buy me a beer</strong> 
            - <a href="localhost:3000" className='notification-message-text'>Patreon</a> ----
          </div>
      </section>
      <div className='header'>
        <p className='test-text'>SIMPLE TEXT JUST TESTING SOME SHIT WILL CHANGE LATER</p>
      </div>
      {/* NEW GAME RELEASE */}
      <div className='game-row'>
        <h1 className='row-tags'>NEW GAME RELEASE</h1>
        <div className='game-list'>
          <GameComponent></GameComponent>
          <GameComponent></GameComponent>
          <GameComponent></GameComponent>
         </div>
      </div>
      {/*PS PLUS GAMES*/}
      <div className='game-row'>
        <h1 className='row-tags'>PS PLUS GAMES</h1>
        <div className='game-list'>
          <GameComponent></GameComponent>
          <GameComponent></GameComponent>
          <GameComponent></GameComponent>
         </div>
      </div>
    </>
  );
}



export default App;

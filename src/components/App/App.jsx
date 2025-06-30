import { Email } from '../Email'
import MyName from '../MyName/MyName'
import './App.css'

function App() {
  const condition = true;

  return (
    <>
      <div>
        <h1>
          Привет
        </h1>
        <MyName />
        <Email />
        <p>
          Первый проект на React с Vite
        </p>
        {condition && <span>Погнали</span>}
      </div>
    </>
  )
}

export default App

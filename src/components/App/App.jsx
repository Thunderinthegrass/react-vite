import { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HomePage from '../Pages/HomePage'
import ClassComponent from '../ClassComponent'
// import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom'
import RegForm from '../RegForm/RegForm'
import RegForm2 from '../RegForm/RegForm2'
import NavBar from '../NavBar/NavBar'
import {EnhancedComponent} from '../HighOrderComponent/HighOrderComponent'
import StyledComponents from '../StyledComponents/StyledComponents'
import Layout from '../Layout/Layout'
import TailwindCss from '../TailwindCss/TailwindCss'
import TodoAppTailwind from '../../projects/TodoAppTailwind/TodoAppTailwind'
import UseEffect from '../UseEffect/useEffect'
import DataFetcher from '../UseEffect/DataFetcher'
import UseRef from '../UseRef/UseRef'
import UseRefName from '../UseRef/UseRefName/UseRefName'
import CustomVideoPlayer from '../UseRef/CustomVideoPlayer/CustomVideoPlayer'
import UseMemo from '../UseMemo/UseMemo'
import ReduxCounter from '../Redux/ReduxCounter/ReduxCounter'
import TodoWithoutRedux from '../Redux/TodoWithoutRedux/TodoWithoutRedux'
import TodoWithRedux from '../Redux/TodoWithRedux/TodoWithRedux'

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage isDark={isDark} setIsDark={setIsDark} />} />
          <Route path='/classComponent' element={<ClassComponent />} />
          <Route path='/regForm' element={<RegForm />} />
          <Route path='/regForm2' element={<RegForm2 />} />
          <Route path='/EnhancedComponent' element={<EnhancedComponent />} />
          <Route path='/StyledComponents' element={<StyledComponents />} />
          <Route path='/TailwindCss' element={<TailwindCss />} />
          <Route path='/TodoAppTailwind' element={<TodoAppTailwind />} />
          <Route path='/UseEffect' element={<UseEffect />} />
          <Route path='/DataFetcher' element={<DataFetcher />} />
          <Route path='/UseRef' element={<UseRef />} />
          <Route path='/UseRefName' element={<UseRefName />} />
          <Route path='CustomVideoPlayer' element={<CustomVideoPlayer />} />
          <Route path='UseMemo' element={<UseMemo />} />
          <Route path='ReduxCounter' element={<ReduxCounter />} />
          <Route path='TodoWithoutRedux' element={<TodoWithoutRedux />} />
          <Route path='TodoWithRedux' element={<TodoWithRedux />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

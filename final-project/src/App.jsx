import './assets/style/App.css'
import { Routes, Route } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage/WeatherPage.jsx'
import MainPage from './pages/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import ChartPage from './pages/ChartPage/ChartPage'
import TodoPage from './pages/TodoPage/TodoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<MainPage />}/>
        <Route path='/chart' element={<ChartPage />}/>
        <Route path='/todolist' element={<TodoPage />} />
      </Route>
      <Route path='/weather' element={<WeatherPage />} />
      <Route path='/todolist' element={<TodoPage />} />
    </Routes>
  )
}

export default App

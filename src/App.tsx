import Menu from './layouts/Menu'
import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div>
        <Button className='px-8'>Click me</Button>
        <Menu name={'Prasad'}/>
      </div>
    </>
  )
}

export default App

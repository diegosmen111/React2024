import './App.css'
import Boton from './components/boton/Boton'
import BotonDinamico from './components/boton/botonDinamico/BotonDinamico'

function App() {

  const handleClick = ()=>{
    alert('soy tu padre')
  }
  return (
  
    <div>
      <Boton />
      <BotonDinamico
      text={"SOY tu padre"}
      clase={"botonDinamico"}
      id={"btnDinamico"}
      disabled={false}
      handleClick={handleClick}
      />
    </div>
    
  )
}

export default App

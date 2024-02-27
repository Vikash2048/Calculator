import './App.css'
import Input from './components/Input'
import Keys from './components/Keys'

const key = ["AC",["+","/","-"],"%",'÷',"7","8","9","×","4","5","6","-","1","2","3","+","0",".","\u232b","="]

function App() {

  return (
    <div className='cal'>
      <Input />
      <div className="KeysContainer">

        {
          key.map((item,id)=>(
            <Keys key={id} id={id} item={item}/>
          ))
        }

      </div>

    </div>
  )
}

export default App

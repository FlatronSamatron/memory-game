import {useState, useEffect} from 'react'
import Field from './components/Field'
import Header from './components/Header'

const App: React.FC = () => {

  const [fieldCount, setFieldCount] = useState<number>(4)
  const [timer, setTimer] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    let t = setTimeout(()=>setTimer(true),3000)
    return () => clearTimeout(t);
  },[])

  const difficult = (num: string | null) => {
    let difNum = num ? +num : 4
    setFieldCount(difNum)
    setScore(0)
    setTimer(false)
    setTimeout(()=>setTimer(true),3000)
  }

  const changeScore = (scores: number) => {
    setScore(scores)
  }

  const newGame = () => {
    setFieldCount(fieldCount)
    setScore(0)
    setTimer(false)
    setTimeout(()=>setTimer(true),3000)
  }

  return (
  <>
  <Header
    fieldCount={fieldCount}
    difficult={difficult}
    score={score}
  />
    <div className="main">
      <div className="field">
        <Field 
          fieldCount={fieldCount}
          timer={timer}
          score={score}
          changeScore={changeScore}
          newGame={newGame}
        />
      </div>
    </div>
  </>
  );
}

export default App;

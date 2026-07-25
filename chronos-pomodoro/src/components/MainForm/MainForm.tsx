import { DefaultInput } from '../DefaultInput/DefaultInput' 
import { Cycles } from '../Cycles/Cycles'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { useRef, useState } from 'react'

export const MainForm = () => {

  const [taskName, setTaskName] = useState('')
  const taskNameInput = useRef<HTMLInputElement>(null)

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('ok', taskNameInput.current.value)
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task:"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 15 min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <DefaultButton icon={<PlayCircleIcon />} />
    </form>
  )
}
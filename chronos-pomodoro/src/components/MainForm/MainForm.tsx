import { DefaultInput } from '../DefaultInput/DefaultInput' 
import { Cycles } from '../Cycles/Cycles'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
export const MainForm = () => {

  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
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
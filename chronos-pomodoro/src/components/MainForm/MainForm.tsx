import { DefaultInput } from '../DefaultInput/DefaultInput'
import { Cycles } from '../Cycles/Cycles'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import type { TaskModel } from '../../models/TaskModel'
import { GetNextCycle } from '../../utils/GetNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'

export const MainForm = () => {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = GetNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    console.log(taskName)

    if (taskName === '') {
      alert('vazio')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return{
        ...prevState,
        config: {
          ...prevState.config
        },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        tasks: [...prevState.tasks, newTask],
        formattedSecondsRemaining: '00:00'
      }
    })
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task:"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
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
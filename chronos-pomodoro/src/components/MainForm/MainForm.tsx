import { DefaultInput } from '../DefaultInput/DefaultInput'
import { Cycles } from '../Cycles/Cycles'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import type { TaskModel } from '../../models/TaskModel'
import { GetNextCycle } from '../../utils/GetNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../contexts/TaskContext/formatSecondsToMinutes'

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
      return {
        ...prevState,
        config: {
          ...prevState.config
        },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        tasks: [...prevState.tasks, newTask],
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining)
      }
    })
  }

  function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if(prevState.activeTask && prevState.activeTask.id === task.id){
            return {...task, interruptDate: Date.now()}
          } else {
            return task
          }
        })
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
          disabled={state.activeTask ? true : false}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 15 min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      {state.activeTask ?
        <DefaultButton
          icon={<StopCircleIcon />}
          color='red'
          type='button'
          aria-label='interromper tarefa'
          title='interromper tarefa'
          onClick={handleInterruptTask}
          key='botao_button'
        />
        :
        <DefaultButton
          icon={<PlayCircleIcon />}
          type='submit'
          aria-label='iniciar tarefa'
          title='iniciar tarefa'
          key='button_submit'
        />}
    </form>
  )
}
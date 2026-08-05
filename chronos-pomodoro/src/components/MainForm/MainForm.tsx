import { DefaultInput } from '../DefaultInput/DefaultInput'
import { Cycles } from '../Cycles/Cycles'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import type { TaskModel } from '../../models/TaskModel'
import { GetNextCycle } from '../../utils/GetNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'
import { Tips } from '../Tips/Tips'
import { showMessage } from '../../adapter/showMessage'

export const MainForm = () => {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''

  const nextCycle = GetNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    showMessage.dismiss()

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    if (taskName === '') {
      showMessage.warning('Digite o nome da tarefa')
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


    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})

    showMessage.sucess('Tarefa iniciada!')
  }

  function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    showMessage.dismiss()
    showMessage.info('Tarefa interrompida!')
    e.preventDefault()

    dispatch({type: TaskActionTypes.INTERRUPT_TASK})
    
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
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips/>
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
import type { Task } from '../types/index'

class TaskManager {
	private static instance: TaskManager

	private constructor(maxTasks: number = 100) {
		this.maxTasks = maxTasks
		this.tasks = []
	}

	public static getInstance(maxTasks: number = 100): TaskManager {
		if (!TaskManager.instance) {
			TaskManager.instance = new TaskManager(maxTasks)
		}
		return TaskManager.instance
	}

	private maxTasks: number
	private tasks: Task[]

	public addTask(task: Task): void {
		if (this.tasks.length >= this.maxTasks) {
			throw new Error('Maximum task limit reached')
		}
		this.tasks.push(task)
	}

	public removeTask(taskId: Symbol): void {
		this.tasks = this.tasks.filter(task => task.id !== taskId)
	}

	public getTasks(): Task[] {
		return [...this.tasks]
	}
}

export default TaskManager.getInstance()

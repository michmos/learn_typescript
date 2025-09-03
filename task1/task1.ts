type Priority = "low" | "medium" | "high";

type Task = {
	priority: Priority
	id: Symbol
	title: string;
	description?: string;
	dueDate?: Date
	completed: boolean
}


function createTask(title: string, priority: Priority, description?: string, dueDate?: Date) : Task {
	const newTask: Task = {
		title: title,
		id: Symbol("id"),
		completed: false,
		priority: priority
	};
	if (description) {
		newTask.description = description
	}
	if (dueDate) {
		newTask.dueDate = dueDate
	}
	return (newTask)
}

function displayTask(task: Task) {
	console.log('Printing task...')
	console.log(`Title: ${task.title}`)
	console.log(`Description: ${task.description ?? 'not provided'}`)
	console.log(`Due date: ${task.dueDate ?? 'not provided'}`)
	console.log(`Priority: ${task.priority}`)
	console.log(`Completion: ${task.completed}`)
	console.log('\n')
}

function markCompleted(task: Task) {
	task.completed = true
}

const task: Task = createTask("example task", "medium", undefined, new Date("2025-01-30"))
displayTask(task)
markCompleted(task)
displayTask(task)

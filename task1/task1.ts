let priorities: string[] = ["high", "medium", "low"]
let taskId: number
let taskTitle: string
let taskDesc: string
let taskPrio: string
let taskDueD: string
let taskCompleted: boolean

function createTask(title: string, description?: string, dueDate?: string) {
	taskTitle = title
	if (description) {
		taskDesc = description
	}
	if (dueDate) {
		taskDueD = dueDate
	}
	taskPrio = priorities[1]
	taskId = 1
	taskCompleted = false
}

function displayTask() {
	console.log('Printing task...')
	console.log(`Id: ${taskId}`)
	console.log(`Title: ${taskTitle}`)
	console.log(`Description: ${taskDesc}`)
	console.log(`Priority: ${taskDueD}`)
	console.log(`Completion: ${taskCompleted}`)
}

function markCompleted() {
	taskCompleted = true
}

createTask("example title", "what a cool description")
displayTask()
markCompleted()
displayTask()

type Priority = "low" | "medium" | "high";
type Location = "outside" | "inside";

// ----------------------------------------------------------------------
// Tasks
// ----------------------------------------------------------------------
interface Task {
	readonly id: Symbol;
	title: string;
	description?: string;
	dueDate?: Date;
	priority: Priority;
	completed: boolean;
}

interface WorkTask extends Task {
	helpRequired?: boolean;
	taskOwner: User;
}

interface PersonalTask extends Task {
	location: Location;
}

interface TaskCollection {
	[key: string] : Task
}

function createGeneralTask(title: string, priority: Priority, description?: string, dueDate?: Date) : Task {
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

function createWorkTask(task: Task, taskOwner: User, helpRequired?: boolean) : WorkTask {
	return {
		...task,
		taskOwner,
		helpRequired: helpRequired ?? false
	}
}

function createPersonalTask(task: Task, location: Location) : PersonalTask {
	return {
		...task,
		location
	}
}

function addTaskToCollection(task: Task, collection: TaskCollection) {
	collection[task.title] = task
}

function getTaskFromCollection(name: string, collection: TaskCollection) : Task | WorkTask | PersonalTask | undefined {
	return (collection[name])
}

function displayAllTasks(collection: TaskCollection) {
	for (const key in collection) {
		const task = collection[key]
		if (task) {
			displayTask(task)
		}
	}
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


// ----------------------------------------------------------------------
// User
// ----------------------------------------------------------------------

interface User {
	readonly id: Symbol;
	name: string;
	email: string;
	readonly createdDate: Date;
}

interface UserCollection {
	[key: string] : User;
}

function createUser(user: { name: string, email: string} ) : User {
	return {
		id: Symbol("id"),
		name: user.name,
		email: user.email,
		createdDate: new Date()
	}
}

function addUserToCollection(user: User, collection: {[key: string] : User}) {
	collection[user.name] = user
}

function displayUser(name: string) {
	if (users[name]) {
		const user: User = users[name]
		console.log("User found in system:")
		console.log(`name: ${user.name}`)
		console.log(`email: ${user.email}`)
		console.log(`creation date: ${user.createdDate}`)
	} else {
		console.log("User not found")
	}
}


// ----------------------------------------------------------------------
// Program
// ----------------------------------------------------------------------

// globals
let users: UserCollection = {}
let tasks: TaskCollection = {}

// add users
addUserToCollection(createUser({name: "john", email: "john@gmx.de" }), users)
addUserToCollection(createUser({name: "alice", email: "alice@gmx.de" }), users)
addUserToCollection(createUser({name: "tim", email: "tim@gmx.de" }), users)

displayUser("alice")

// add general task
const task: Task = createGeneralTask("example task", "medium", undefined, new Date("2025-01-30"))
addTaskToCollection(task, tasks)
// add work task
if (users["alice"]) {
	const wtask: WorkTask = createWorkTask(createGeneralTask("work task", "high", "this is a work task"), users["alice"], true)
	addTaskToCollection(wtask, tasks)
}
// add personal task
const pTask: PersonalTask = createPersonalTask(createGeneralTask("personal task", "low"), "outside")
addTaskToCollection(pTask, tasks)

displayAllTasks(tasks)

// get task
const wTask = getTaskFromCollection("work task", tasks)
if (wTask && 'taskOwner' in wTask) {
	console.log(`Task owner of work task: ${wTask.taskOwner.name}`)
} else {
	console.log("No task owner found")
}




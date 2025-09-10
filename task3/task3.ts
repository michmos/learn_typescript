// ----------------------------------------------------------------------
// Task Manager
// ----------------------------------------------------------------------

type TaskType = "Work" | "Personal"

class TaskManager {
	private tasks: Task[]
	constructor(private maxTasks: number = 50) {
		// initialize as empty array
		this.tasks = []
	}

	public addTask(task: Task) {
		if (this.tasks.length >= this.maxTasks) {
			throw new Error("Maximum number of tasks reached")
		}
		this.tasks.push(task)
	}

	public getTask(title: string) : Task | undefined {
		return this.tasks.find(task => task.title === title)
	}

	public editTask(title: string, description?: string, dueDate?: Date, priority?: Priority) {
		const task = this.getTask(title)
		if (!task) {
			throw new Error("editTask: Task not found")
		}
		if (description) {
			task.description = description
		}
		if (dueDate) {
			task.dueDate = dueDate
		}
		if (priority) {
			task.priority = priority
		}
	}

	public deleteTask(title: string) {
		const taskIndex = this.tasks.findIndex(task => task.title === title)
		if (taskIndex === -1) {
			throw new Error("deleteTask: Task not found")
		}
		this.tasks.splice(taskIndex, 1)
	}
}

type Priority = "Low" | "Medium" | "High"

abstract class Task {
	constructor(title: string, priority: Priority, description?: string, dueDate?: Date) {
		this.title = title
		this.completed = false
		this.priority = priority
		this.id = Symbol("id")
		this.creationDate = new Date()

		if (description) {
			this.description = description
		}
		if (dueDate) {
			this.dueDate = dueDate
		}
	}

	private id: Symbol
	public	completed: boolean
	public  title: string
	public  priority: Priority
	public  creationDate: Date

	public  description?: string
	public  dueDate?: Date

	abstract printDetails() : void
}

class WorkTask extends Task {
	constructor(title: string, priority: Priority, assignee: User, description?: string, dueDate?: Date) {
		super(title, priority, description, dueDate)
		this.assignee = assignee
	}
	private assignee: User

	public getAssignee() : User {
		return this.assignee
	}

	public setAssignee(newAssignee: User) {
		this.assignee = newAssignee
	}

	public printDetails() : void {
		console.log(`
		Title: ${this.title}
		Priority: ${this.priority}
		Description: ${this.description ?? "N/A"}
		User: ${this.assignee.name}`)
	}
}

type Location = "outside" | "inside"

class PersonalTask extends Task {
	constructor(title: string, priority: Priority, location: Location, description?: string, dueDate?: Date) {
		super(title, priority, description, dueDate)
		this.location = location
	}
	public location: Location

	public printDetails() : void {
		console.log(`
		Title: ${this.title}
		Priority: ${this.priority}
		Description: ${this.description ?? "N/A"}
		Location: ${this.location}`)
	}
}

// ----------------------------------------------------------------------
// User
// ----------------------------------------------------------------------

class User {
	constructor(public name: string, public email: string) {
		this.name = name
		this.email = email
		this.id = Symbol("id")
		this.createdDate = new Date()
	}

	private id: Symbol
	private createdDate: Date

	public printDetails() {
		console.log(`User details:
		Name: ${this.name}
		Email: ${this.email}
		ID: ${this.id.toString()}
		Created Date: ${this.createdDate.toISOString()}`)
	}
}

class UserManagement {
	constructor (maxUsers: number = 100) {
		this.users = []
		this.maxUsers = maxUsers
	}

	private users: User[]
	private maxUsers: number

	public addUser(name: string, email: string) {
		if (this.users.length >= this.maxUsers) {
			throw new Error("Maximum number of users reached")
		}
		if (this.getUser(name)) {
			throw new Error("addUser: User already exists")
		}
		const newUser = new User(name, email)
		this.users.push(newUser)
	}

	public getUser(name: string) : User | undefined {
		return this.users.find(user => user.name === name)
	}

	public deleteUser(name: string) {
		const userIndex = this.users.findIndex(user => user.name === name)
		if (userIndex === -1) {
			throw new Error("deleteUser: User not found")
		}
		this.users.splice(userIndex, 1)
	}

	public listUsers() {
		this.users.forEach(user => user.printDetails())
	}

	public editUser(name: string, newName?: string, newEmail?: string) {
		const user = this.getUser(name)
		if (!user) {
			throw new Error("editUser: User not found")
		}
		if (newName) {
			user.name = newName
		}
		if (newEmail) {
			user.email = newEmail
		}
	}
}


// ----------------------------------------------------------------------
// Program
// ----------------------------------------------------------------------

// test user management
try {
	const userManagement = new UserManagement(10)
	userManagement.addUser("Alice", "alice@mail.com")
	userManagement.addUser("john", "john@mail.com")
	userManagement.listUsers()

	const user = userManagement.getUser("Alice")
	if (user) {
		user.printDetails()
	} else {
		console.log("User not found")
	}

	userManagement.editUser("Alice", "Alice Smith")
	userManagement.deleteUser("john")
	userManagement.listUsers()
} catch (error) {
	console.error(error)
}

// test task management
try {
	const taskManager = new TaskManager(10)
	const workTask: Task = new WorkTask("Finish report", "High", new User("Alice", "alice@mail.com"), "Complete the annual report", new Date("2024-12-31"))
	console.log("Work task details:")
	workTask.printDetails()
	const personalTask: Task = new PersonalTask("Grocery shopping", "Medium", "outside", "Buy groceries for the week", new Date("2024-05-01"))
	console.log("Personal task details:")
	personalTask.printDetails()

	taskManager.addTask(workTask)
	taskManager.addTask(personalTask)

	console.log("Deleting 'Finish report' task")
	taskManager.getTask("Finish report")?.printDetails()
	taskManager.deleteTask("Finish report")
	taskManager.getTask("Finish report")?.printDetails()

	console.log("Editing 'Grocery shopping' task")
	taskManager.editTask("Grocery shopping", "This is a changed description", new Date("2024-05-02"), "High")
	taskManager.getTask("Grocery shopping")?.printDetails()
} catch (error) {
	console.error(error)
}




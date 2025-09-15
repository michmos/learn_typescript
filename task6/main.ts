import { TaskManager as taskManager, UserManager as userManager} from './services/index'


try {
	userManager.addUser({name: 'Jon', age: 30, createdDate: new Date(), modifiedDate: new Date(), id: Symbol("userId")})
	taskManager.addTask({category: "personal", id: Symbol("taskId"), priority: "high", location: "inside"})

	console.log('users: ', userManager.getUsers())
	console.log('tasks: ', taskManager.getTasks())
} catch (error) {
	console.error(error)
}

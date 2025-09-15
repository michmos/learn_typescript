import type { User } from '../types/User'

class UserManager {
	private constructor(maxUsers: number = 100) {
		this.maxUsers = maxUsers
		this.users = []
	}
	private static instance: UserManager

	public static getInstance(maxUsers: number = 100) {
		if (!UserManager.instance) {
			UserManager.instance = new UserManager(maxUsers)
		}
		return UserManager.instance
	}




	private maxUsers: number
	private users: User[]

	public addUser(user: User): void {
		if (this.users.length >= this.maxUsers) {
			throw new Error('Maximum user limit reached')
		}
		this.users.push(user)
	}

	public removeUser(userId: symbol): void {
		this.users = this.users.filter(u => u.id !== userId)
	}

	public getUsers(): User[] {
		return [...this.users]
	}
}

export default UserManager.getInstance()

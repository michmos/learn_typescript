type Location = "inside" | "outside"

type Priority = "low" | "middle" | "high"

export type Task =
	| { category: "personal", id: Symbol, priority: Priority, location?: Location}
	| { category: "work", id: Symbol, priority: Priority, assignee?: string, dueDate?: Date}
	| { category: "freelancing", id: Symbol, priority: Priority, client: string}

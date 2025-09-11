
/////////////////////////////////////////////////////
// discrimated unions
/////////////////////////////////////////////////////

// union type
type Status = "pending" | "in-progress" | "completed"
type Priority = "low" | "medium" | "high"

// discrimated union with category
type Task =
	| { category: "work"; status: Status; assignee: string; }
	| { category: "personal"; status: Status; priority: Priority }

function printTask(task: Task) : void {
	if (task.category === "work") {
		console.log("work task: ", task)
	} else if (task.category === "personal") {
		console.log("personal task: ", task)
	}
}

const workTask: Task = { category: "work", status: "pending", assignee: "jon"}
printTask(workTask)

/////////////////////////////////////////////////////
// typeguards
/////////////////////////////////////////////////////

class Dog {
	constructor(name: string) {
		this.dogname = name
	}
	public bark() : void {
		console.log("wuff")
	}
	private dogname: string
}

class Cat {
	public miau() : void {
		console.log("miau")
	}
}

// typeguard function
function isDog(animal : Dog | Cat) : animal is Dog {
	// typeguard instanceof
	return(animal instanceof Dog)
}

function makeSound(animal: Cat | Dog) : void {
	if (isDog(animal)) {
		animal.bark()
		// typeguard as
	} else if ((animal as Cat).miau !== undefined) {
		animal.miau()
	}
}


const dog: Dog = new Dog("jon")
makeSound(dog)
const cat: Cat = new Cat()
makeSound(cat)

// typeguard in
if ("dogname" in dog) {
	console.log("this is a dog")
}

/////////////////////////////////////////////////////
// Intersection types
/////////////////////////////////////////////////////
type TimeStamp = {
	createdDate: Date,
	changedDate: Date
}

type TimeStampedTask = TimeStamp & Task

const workTask2: TimeStampedTask = {
	category: "work",
	status: "pending",
	assignee: "jon",
	createdDate: new Date(),
	changedDate: new Date()
}

type StringOrNumber = string | number

let stringOrNumber: StringOrNumber = 3
stringOrNumber = "pool"

type PrioritySuffix = `${Priority}_suffix`

const prioSuf: PrioritySuffix = "low_suffix"

console.log(workTask2)

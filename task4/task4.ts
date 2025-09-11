// ----------------------------------------------------------------------
// Collections
// ----------------------------------------------------------------------
interface hasId {
	id: string
}

class Collection<T extends hasId> {
	private data: T[]

	constructor(newData: T) {
		this.data = []
		this.data.push(newData)
	}

	public addData(newData: T) {
		this.data.push(newData)
	}
	
	public getData(id: string) : T | undefined {
		return this.data.find(T => T.id === id)
	}

	public removeData(id: string) {
		const dataIndex: number = this.data.findIndex(T => T.id === id)
		if (dataIndex === -1) {
			throw new Error("removeData(): invalid id provided")
		}
		this.data.splice(dataIndex, 1)
	}
}

const exampleArray: {id: string; category: string; data: string }[] = [
	{id: "1", category: "car", data: "blue with  gears"},
	{id: "2", category: "house", data: "2 floors with garden"},
	{id: "3", category: "car", data: "red with 2 gears"},
	{id: "4", category: "boat", data: "120ps motor"},
	{id: "5", category: "house", data: "3 floors with garage"},
];

function findById<T extends hasId>(array: T[], id: string): T | undefined {
	return array.find(item => item.id === id)
}

function groupBy<T, K extends string>(array: T[], predicate: (item: T) => K) : Record<string, T[]> {
	const newRecord: Record<string, T[]> = {}

	array.forEach(item => {
		const key = predicate(item)
		if (!newRecord[key]) {
			newRecord[key] = [item]
		} else {
			newRecord[key].push(item)
		}
	})

	return newRecord
}

function sortBy<T>(array: T[], predicate: (item: T) => string) : T[] {
	const sortedArray: T[] = array

	sortedArray.sort((a, b) => predicate(a).localeCompare(predicate(b)))
	return sortedArray
}

// ----------------------------------------------------------------------
// Program
// ----------------------------------------------------------------------

try {
	const dataCollection: Collection<{id: string; data: string}> = new Collection({id: "123", data: "this is some important data"})
	// test add
	dataCollection.addData({id: "1231231", data: "this is other important data"})

	// test get
	const data = dataCollection.getData("123")
	if (data) {
		console.log(`found data: ${data.data}`)
	} else {
		console.log("no data found")
	}

	// test deletion
	dataCollection.removeData("123")
	const data2 = dataCollection.getData("123")
	if (data2) {
		console.log(`found data: ${data2.data}`)
	} else {
		console.log("no data found")
	}
} catch (error) {
	console.error(error)
}

// test findById
console.log(`findById ${findById(exampleArray, "2")?.data}`)
console.log(`findById ${findById(exampleArray, "4")?.data}`)

// test groupBy
const groupedByCategory = groupBy(exampleArray, item => item.category)
console.log("groupedByCategory", groupedByCategory)

const sortedByCategory = sortBy(exampleArray, item => item.category)
console.log("sortedByCategory", sortedByCategory)



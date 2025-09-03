# Task 1: Basic Types & Functions

**Estimated Time**: 30 minutes  
**File to create**: `task1.ts`

## Learning Objectives

Master TypeScript's fundamental building blocks:
- Primitive types: `string`, `number`, `boolean`, `Date`
- Arrays and tuples
- Function parameter and return types
- Optional parameters and default values
- Type inference vs explicit annotation

## Your Assignment

Build basic task creation functionality for our task management system.

### Requirements

1. **Create task data structure**
   - Task should have: id, title, description, priority, due date, completed status
   - Use appropriate primitive types

2. **Implement functions**
   - `createTask()` - Creates a new task with proper types
   - `displayTask()` - Shows task information
   - `markCompleted()` - Toggles task completion

3. **Handle priorities**
   - Support "high", "medium", "low" priorities
   - Use appropriate TypeScript features

4. **Work with dates**
   - Handle due dates properly
   - Consider optional due dates

### Key TypeScript Concepts to Practice

```typescript
// Type annotations
let taskId: number = 1;

// Optional parameters
function createTask(title: string, description?: string) { }

// Default parameters
function createTask(title: string, priority: string = "medium") { }

// Array types
let priorities: string[] = ["high", "medium", "low"];

// Function return types
function getId(): number { }

// Tuples
let taskInfo: [number, string, boolean] = [1, "Learn TS", false];
```

### Testing Your Work

Run your code with:
```bash
npx ts-node task1/task1.ts
```

### Questions to Ask Yourself

- When should I use explicit type annotations vs letting TypeScript infer?
- How do I handle optional vs required parameters?
- What's the difference between arrays and tuples?
- How do I properly type function parameters and return values?

### Next Step

Once you're comfortable with basic types and functions, move to Task 2 to learn about interfaces and object types.

---

**Need help?** Ask questions about:
- Type syntax and annotations
- Function signatures
- Array vs tuple usage
- Type inference behavior
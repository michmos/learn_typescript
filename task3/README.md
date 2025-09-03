# Task 3: Classes & Object-Oriented Programming

**Estimated Time**: 45 minutes  
**File to create**: `task3.ts`

## Learning Objectives

Master TypeScript's OOP features:
- Class syntax and constructors
- Access modifiers (`public`, `private`, `protected`)
- Inheritance with `extends`
- Abstract classes and methods
- Static members
- Getters and setters

## Your Assignment

Build a proper class-based architecture for your task management system.

### Requirements

1. **Create TaskManager class**
   - Manage a collection of tasks
   - Private task storage array
   - Public methods for CRUD operations

2. **Build User class**
   - Encapsulate user data and behavior
   - Use access modifiers appropriately
   - Include validation in constructor

3. **Implement inheritance**
   - Create base `Task` class
   - Extend with `WorkTask` and `PersonalTask` subclasses
   - Use `super()` properly

4. **Add abstract functionality**
   - Create abstract base class for different task types
   - Implement abstract methods in subclasses

### Key TypeScript Concepts to Practice

```typescript
// Basic class
class TaskManager {
  private tasks: Task[] = [];
  
  constructor(private maxTasks: number = 100) {}
  
  public addTask(task: Task): void {}
  
  private validateTask(task: Task): boolean {}
}

// Inheritance
class WorkTask extends Task {
  constructor(
    title: string,
    private assignee: string
  ) {
    super(title);
  }
}

// Abstract class
abstract class BaseTask {
  abstract getCategory(): string;
  
  protected formatDate(date: Date): string {}
}

// Static members
class TaskFactory {
  static createWorkTask(title: string): WorkTask {}
}
```

### Testing Your Work

```bash
npx ts-node task3/task3.ts
```

### Questions to Explore

- When should I use `private` vs `protected` vs `public`?
- How does inheritance work with constructors?
- What's the purpose of abstract classes?
- When should I use static methods?

### Next Step

Move to Task 4 to learn about generics and type parameters.

---

**Need help?** Ask about:
- Access modifier usage
- Constructor patterns
- Inheritance and `super()`
- Abstract class design
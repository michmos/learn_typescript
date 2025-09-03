# Task 2: Interfaces & Object Types

**Estimated Time**: 30 minutes  
**File to create**: `task2.ts`

## Learning Objectives

Master TypeScript's type system for objects:
- Interface definitions and syntax
- Optional properties with `?`
- Readonly properties
- Index signatures
- Extending interfaces
- Object type literals vs interfaces

## Your Assignment

Refactor your task system to use proper interfaces and object types.

### Requirements

1. **Define Task interface**
   - Convert your task structure to a proper interface
   - Include optional properties where appropriate
   - Add readonly properties for immutable data

2. **Create User interface**
   - User should have: id, name, email, created date
   - Consider which properties should be optional/readonly

3. **Extend interfaces**
   - Create specialized task types (e.g., `WorkTask`, `PersonalTask`)
   - Use interface inheritance

4. **Add type validation**
   - Create functions that accept interface types
   - Demonstrate structural typing

### Key TypeScript Concepts to Practice

```typescript
// Basic interface
interface Task {
  id: number;
  title: string;
  completed?: boolean;  // optional
  readonly createdAt: Date;  // readonly
}

// Interface extension
interface WorkTask extends Task {
  assignee: string;
  department: string;
}

// Index signatures
interface TaskCollection {
  [taskId: string]: Task;
}

// Object type literals (alternative to interfaces)
type User = {
  id: number;
  name: string;
  email?: string;
};
```

### Testing Your Work

```bash
npx ts-node task2/task2.ts
```

### Questions to Explore

- When should I use `interface` vs `type`?
- How does structural typing work in TypeScript?
- What's the difference between optional (`?`) and undefined?
- When should properties be `readonly`?

### Next Step

Move to Task 3 to learn about classes and object-oriented programming in TypeScript.

---

**Need help?** Ask about:
- Interface vs type syntax
- Optional and readonly properties
- Interface inheritance
- Structural typing concepts
# Task 8: Utility Types & Advanced Type Manipulation

**Estimated Time**: 45 minutes  
**File to create**: `task8.ts`

## Learning Objectives

Master TypeScript's advanced type system:
- Built-in utility types (`Partial`, `Required`, `Pick`, `Omit`, etc.)
- Mapped types and conditional types
- Template literal types
- Type inference with `infer`
- Custom utility type creation

## Your Assignment

Create advanced type utilities for flexible task filtering and transformation.

### Requirements

1. **Built-in utility types**
   - Use `Partial<Task>` for task updates
   - Use `Pick<Task, 'id' | 'title'>` for task summaries
   - Use `Omit<Task, 'id'>` for task creation
   - Use `Required<Task>` to ensure all properties

2. **Custom utility types**
   - `DeepPartial<T>` - Make all properties recursively optional
   - `StrictOmit<T, K>` - Omit with better type checking
   - `KeysOfType<T, U>` - Get keys that match specific type

3. **Conditional and mapped types**
   - Create types that transform based on conditions
   - Build flexible API response types
   - Implement type-safe configuration objects

4. **Advanced type patterns**
   - Function overloads with different return types
   - Brand types for IDs and validation
   - Type-safe event system

### Key TypeScript Concepts to Practice

```typescript
// Built-in utility types
function updateTask(id: number, updates: Partial<Task>): Promise<Task> {}
function createTask(data: Omit<Task, 'id' | 'createdAt'>): Task {}

// Custom utility types
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// Conditional types
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

// Mapped types
type TaskFlags = {
  [K in keyof Task as `is${Capitalize<string & K>}Set`]: boolean;
};

// Template literal types
type TaskEventType = `task_${TaskStatus}`;

// Brand types
type TaskId = number & { __brand: 'TaskId' };
type UserId = number & { __brand: 'UserId' };

// Type inference with infer
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

### Testing Your Work

```bash
npx ts-node task8/task8.ts
```

### Questions to Explore

- When should I use utility types vs custom interfaces?
- How do mapped types transform existing types?
- What problems do conditional types solve?
- How do brand types improve type safety?

### Completion

Congratulations! You've completed all 8 TypeScript learning tasks. You now have comprehensive knowledge of:

✅ Basic types and functions  
✅ Interfaces and object types  
✅ Classes and OOP concepts  
✅ Generics and type parameters  
✅ Advanced types and type guards  
✅ Modules and code organization  
✅ Asynchronous programming  
✅ Utility types and type manipulation  

---

**Need help?** Ask about:
- Utility type usage
- Custom type creation
- Conditional type logic
- Advanced type patterns
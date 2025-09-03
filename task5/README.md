# Task 5: Advanced Types & Type Guards

**Estimated Time**: 45 minutes  
**File to create**: `task5.ts`

## Learning Objectives

Master TypeScript's advanced type system:
- Union types (`|`) and intersection types (`&`)
- Discriminated unions and type guards
- Literal types and template literal types
- Type narrowing techniques
- Custom type guards

## Your Assignment

Implement a robust task status system with type safety and runtime validation.

### Requirements

1. **Union types for task status**
   - Create status types: "pending" | "in-progress" | "completed" | "cancelled"
   - Use literal types for priorities and categories

2. **Discriminated unions**
   - Create different task types with discriminator properties
   - Implement type-safe handling of different task variants

3. **Type guards**
   - Built-in type guards (`typeof`, `instanceof`, `in`)
   - Custom type guard functions
   - Use type guards for safe type narrowing

4. **Intersection types**
   - Combine multiple types with `&`
   - Create composite types for complex scenarios

### Key TypeScript Concepts to Practice

```typescript
// Union types
type TaskStatus = "pending" | "in-progress" | "completed" | "cancelled";
type Priority = "low" | "medium" | "high";

// Discriminated unions
type TaskEvent = 
  | { type: "created"; task: Task }
  | { type: "updated"; task: Task; changes: Partial<Task> }
  | { type: "deleted"; taskId: number };

// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isWorkTask(task: Task): task is WorkTask {
  return "assignee" in task;
}

// Intersection types
type TimestampedTask = Task & {
  createdAt: Date;
  updatedAt: Date;
};

// Template literal types
type TaskAction = `${TaskStatus}_task`;
```

### Testing Your Work

```bash
npx ts-node task5/task5.ts
```

### Questions to Explore

- When should I use union vs intersection types?
- How do discriminated unions help with type safety?
- What's the difference between `typeof` and custom type guards?
- How does TypeScript narrow types based on control flow?

### Next Step

Move to Task 6 to learn about modules, imports, and code organization.

---

**Need help?** Ask about:
- Union and intersection syntax
- Type guard implementation
- Discriminated union patterns
- Type narrowing strategies
# Task 7: Asynchronous Programming

**Estimated Time**: 45 minutes  
**File to create**: `task7.ts`

## Learning Objectives

Master TypeScript's async programming:
- Promise types and `Promise<T>`
- `async`/`await` syntax and typing
- Error handling with try/catch
- Promise utilities (Promise.all, Promise.race)
- Async iteration and generators

## Your Assignment

Add file persistence and async operations to your task management system.

### Requirements

1. **File operations**
   - `saveTasksToFile()` - Save tasks as JSON
   - `loadTasksFromFile()` - Load tasks from JSON
   - Handle file I/O errors properly

2. **Async task operations**
   - `fetchTaskFromAPI()` - Simulate API calls
   - `batchProcessTasks()` - Process multiple tasks concurrently
   - Add loading states and error handling

3. **Promise utilities**
   - Use `Promise.all()` for concurrent operations
   - Use `Promise.race()` for timeout scenarios
   - Implement retry logic with promises

4. **Advanced async patterns**
   - Async generators for task streaming
   - Async iteration over large datasets
   - Cancellation with AbortController

### Key TypeScript Concepts to Practice

```typescript
// Basic async functions
async function saveTask(task: Task): Promise<void> {
  // Implementation
}

async function loadTask(id: number): Promise<Task | null> {
  // Implementation
}

// Error handling
async function safeLoadTask(id: number): Promise<Task | null> {
  try {
    return await loadTask(id);
  } catch (error) {
    console.error(`Failed to load task ${id}:`, error);
    return null;
  }
}

// Promise utilities
async function loadAllTasks(ids: number[]): Promise<Task[]> {
  const promises = ids.map(id => loadTask(id));
  const results = await Promise.all(promises);
  return results.filter(task => task !== null) as Task[];
}

// Async generators
async function* streamTasks(): AsyncGenerator<Task, void, unknown> {
  // Implementation
}

// Generic async functions
async function withTimeout<T>(
  promise: Promise<T>, 
  timeoutMs: number
): Promise<T> {
  // Implementation
}
```

### Testing Your Work

```bash
npx ts-node task7/task7.ts
```

### Questions to Explore

- How do I properly type async functions?
- What's the difference between Promise.all and Promise.allSettled?
- How do I handle errors in async code?
- When should I use async generators?

### Next Step

Move to Task 8 to learn about utility types and advanced type manipulation.

---

**Need help?** Ask about:
- Promise typing
- Async/await patterns
- Error handling strategies
- Concurrent operation management
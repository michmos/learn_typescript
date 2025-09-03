# Task 4: Generics & Type Parameters

**Estimated Time**: 30 minutes  
**File to create**: `task4.ts`

## Learning Objectives

Master TypeScript's generic system:
- Generic functions with type parameters
- Generic classes and interfaces
- Type constraints with `extends`
- Multiple type parameters
- Generic utility functions

## Your Assignment

Create reusable, type-safe collection utilities using generics.

### Requirements

1. **Generic Collection class**
   - Create `Collection<T>` that works with any type
   - Implement add, remove, find, filter methods
   - Maintain type safety throughout

2. **Generic utility functions**
   - `findById<T>()` - Find item by id property
   - `groupBy<T, K>()` - Group items by key
   - `sortBy<T>()` - Sort by property name

3. **Constrained generics**
   - Create functions that work only with objects having specific properties
   - Use `extends` keyword for constraints

4. **Advanced generic patterns**
   - Generic factory functions
   - Conditional logic based on types

### Key TypeScript Concepts to Practice

```typescript
// Generic function
function findItem<T>(items: T[], predicate: (item: T) => boolean): T | undefined {}

// Generic class
class Repository<T> {
  private items: T[] = [];
  
  add(item: T): void {}
  findAll(): T[] {}
}

// Type constraints
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {}

// Multiple type parameters
function transform<T, U>(input: T, transformer: (item: T) => U): U {}

// Generic interfaces
interface Serializable<T> {
  serialize(): string;
  deserialize(data: string): T;
}
```

### Testing Your Work

```bash
npx ts-node task4/task4.ts
```

### Questions to Explore

- When should I use generics vs any?
- How do type constraints improve safety?
- What's the difference between `<T>` and `<T extends SomeType>`?
- How do I handle multiple generic type parameters?

### Next Step

Move to Task 5 to learn about union types, intersection types, and type guards.

---

**Need help?** Ask about:
- Generic syntax and usage
- Type constraints
- Generic class design
- Advanced generic patterns
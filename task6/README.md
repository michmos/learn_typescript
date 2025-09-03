# Task 6: Modules & Code Organization

**Estimated Time**: 30 minutes  
**Files to create**: Multiple module files

## Learning Objectives

Master TypeScript's module system:
- ES6 import/export syntax
- Default vs named exports
- Module resolution
- Namespace organization
- Type-only imports/exports

## Your Assignment

Refactor your task management system into well-organized modules.

### Requirements

1. **Create module structure**
   ```
   task6/
   ├── types/
   │   ├── Task.ts
   │   ├── User.ts
   │   └── index.ts
   ├── services/
   │   ├── TaskManager.ts
   │   ├── UserManager.ts
   │   └── index.ts
   ├── utils/
   │   ├── validation.ts
   │   ├── formatting.ts
   │   └── index.ts
   └── main.ts
   ```

2. **Implement proper exports**
   - Use named exports for interfaces/types
   - Use default exports for main classes
   - Create barrel exports (index.ts files)

3. **Handle imports correctly**
   - Import only what you need
   - Use type-only imports where appropriate
   - Organize import statements

4. **Module patterns**
   - Singleton pattern with modules
   - Factory pattern exports
   - Configuration modules

### Key TypeScript Concepts to Practice

```typescript
// Named exports
export interface Task { }
export class TaskManager { }

// Default export
export default class TaskService { }

// Type-only imports/exports
export type { Task } from './types';
import type { User } from './types';

// Barrel exports (index.ts)
export { Task, TaskStatus } from './Task';
export { User } from './User';
export * from './enums';

// Mixed imports
import TaskManager, { Task, TaskStatus } from './TaskManager';

// Namespace imports
import * as TaskTypes from './types';
```

### Testing Your Work

```bash
npx ts-node task6/main.ts
```

### Questions to Explore

- When should I use default vs named exports?
- What are the benefits of barrel exports?
- How does module resolution work?
- When should I use type-only imports?

### Next Step

Move to Task 7 to learn about asynchronous programming with Promises and async/await.

---

**Need help?** Ask about:
- Import/export syntax
- Module organization patterns
- Type-only imports
- Module resolution issues
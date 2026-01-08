# ExpenseTracker - Claude Project Context

## Project Overview

ExpenseTracker is a personal finance management web application built with Next.js 14, TypeScript, and Tailwind CSS. Users can track expenses, analyze spending patterns, and export data for external analysis.

**Key Characteristics:**
- Client-side only application (no backend)
- Data stored in browser localStorage
- Privacy-focused (data never leaves user's device)
- Responsive design for desktop and mobile

## Technology Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** Browser localStorage
- **Font:** Inter (Google Fonts)

## Project Structure

```
expense-tracker/
├── app/                    # Next.js 14 App Router pages
│   ├── layout.tsx         # Root layout with header
│   ├── page.tsx           # Dashboard (main page)
│   └── expenses/
│       └── page.tsx       # Expense management page
├── components/            # React components
│   ├── Header.tsx
│   ├── ExpenseForm.tsx
│   ├── ExpenseList.tsx
│   └── ...
├── lib/                   # Utilities and helpers
│   ├── storage.ts        # localStorage utilities
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript type definitions
│   └── expense.ts
├── docs/                  # Documentation
│   ├── dev/              # Developer documentation
│   └── user/             # User guides
└── .claude/              # Claude configuration
```

## Coding Standards

### TypeScript

- **Always use TypeScript** - No JavaScript files
- **Strict mode enabled** - Follow strict type checking
- **Explicit types** - Prefer explicit types over inference for function parameters
- **Interface over type** - Use `interface` for object shapes, `type` for unions/intersections

### React/Next.js

- **Client Components** - Use `'use client'` directive when needed
- **Functional components** - No class components
- **Hooks-based state** - Use useState, useEffect, etc.
- **Component naming** - PascalCase for components (e.g., ExpenseForm.tsx)
- **Props interface** - Always define props interfaces

### Styling

- **Tailwind CSS only** - No custom CSS files unless absolutely necessary
- **Responsive design** - Use Tailwind responsive classes (sm:, md:, lg:)
- **Consistent colors** - Use Tailwind's color palette
- **Semantic classes** - Group related classes logically

### File Naming

- **Components:** PascalCase (ExpenseForm.tsx)
- **Utilities:** camelCase (utils.ts, storage.ts)
- **Pages:** lowercase with Next.js conventions (page.tsx, layout.tsx)
- **Types:** camelCase (expense.ts)

## Architecture Patterns

### Component Patterns

1. **Separation of Concerns**
   - UI components in `components/`
   - Business logic in `lib/`
   - Type definitions in `types/`

2. **Props Interface**
   ```typescript
   interface ComponentNameProps {
     prop1: Type1;
     prop2: Type2;
   }

   export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
     // ...
   }
   ```

3. **State Management**
   - Local state with useState
   - Side effects with useEffect
   - No external state management library

### Data Flow

1. **Storage Layer** (lib/storage.ts)
   - All localStorage operations
   - CRUD operations for expenses

2. **Page Components** (app/)
   - Load data from storage
   - Pass data to child components
   - Handle user actions

3. **UI Components** (components/)
   - Receive data via props
   - Emit events via callbacks
   - Pure presentation logic

## Common Tasks

### Adding a New Feature

1. **Plan first** - Use `/document-feature` command to plan and document
2. **Check existing patterns** - Review similar features for consistency
3. **Update types** - Modify TypeScript interfaces if needed
4. **Create/modify components** - Follow component patterns
5. **Test manually** - Verify in browser (no automated tests yet)
6. **Document** - Update docs/dev/ and docs/user/ as needed

### Modifying Existing Features

1. **Read before writing** - Always read existing code first
2. **Maintain patterns** - Follow established architectural patterns
3. **Preserve behavior** - Don't break existing functionality
4. **Update related code** - Check for dependencies and update them

### Working with localStorage

- **Always use storage utilities** - Don't access localStorage directly
- **Handle errors gracefully** - localStorage can be disabled or full
- **Validate data** - Check data integrity when loading

## Testing Strategy

**Current State:** No automated tests

**Manual Testing Checklist:**
- ✅ Test in Chrome, Firefox, Safari, Edge
- ✅ Test responsive design (desktop, tablet, mobile)
- ✅ Test localStorage persistence (reload page)
- ✅ Test all CRUD operations
- ✅ Test edge cases (empty data, max values, special characters)

## Known Limitations

1. **No Backend** - All data is local to browser
2. **No Authentication** - Single-user application
3. **No Cloud Sync** - Data doesn't sync across devices
4. **localStorage Only** - ~5-10MB limit, can be cleared by user
5. **No Automated Tests** - Manual testing only

## Performance Considerations

- **Dataset Size** - Optimized for <10,000 expenses
- **CSV Export** - May be slow for >10,000 records
- **Rendering** - All expenses rendered at once (no virtualization)

## Important Notes

### Do's

- ✅ Follow KISS principle (Keep It Simple, Stupid)
- ✅ Maintain existing patterns and conventions
- ✅ Use Tailwind CSS for styling
- ✅ Add proper TypeScript types
- ✅ Test in multiple browsers
- ✅ Document new features in docs/

### Don'ts

- ❌ Don't add unnecessary dependencies
- ❌ Don't over-engineer solutions
- ❌ Don't break existing functionality
- ❌ Don't add features not requested
- ❌ Don't use custom CSS unless necessary
- ❌ Don't skip documentation for new features

## Documentation Standards

### Developer Documentation (docs/dev/)

Include:
- Architecture overview
- Implementation details with code references
- Performance characteristics
- Security considerations
- Testing strategy
- Maintenance guidelines

### User Documentation (docs/user/)

Include:
- Step-by-step instructions
- Screenshot placeholders
- Common use cases
- Troubleshooting section
- FAQ
- Tips & best practices

## References

- **Main README:** [README.md](../README.md)
- **Code Analysis:** [code-analysis.md](../code-analysis.md)
- **Developer Docs:** [docs/dev/](../docs/dev/)
- **User Guides:** [docs/user/](../docs/user/)

## Custom Commands

- `/document-feature <feature-name>` - Generate comprehensive documentation for a feature

---

**Last Updated:** 2026-01-08
**Claude Version:** Sonnet 4.5
**Project Status:** Active Development

---
description: Generate both technical and user documentation for a new feature
argument-hint: [feature-name]
---

# Document Feature Command
Automatically generate both technical documentation for developers and user-friendly guides for end users when you add a new feature ($ARGUMENTS).

## Overview
Accept a feature name as input

Analyze the relevant code files

Generate two separate documentation files in appropriate directories

Follow your project's existing documentation patterns

Include placeholders for screenshots in user docs

Add proper cross-references between the two doc types


Write a command that takes a feature name and generates:

Developer Documentation - Technical specs, API details, implementation notes

User Documentation - Simple guide with screenshots placeholders, step-by-step instructions

Command Structure
Your command should:

Accept a feature name as input
Analyze the relevant code files
Generate two separate documentation files in appropriate directories
Follow your project's existing documentation patterns
Include placeholders for screenshots in user docs
Add proper cross-references between the two doc types

##Example Usage
Should generate:
docs/dev/password-reset-implementation.md
docs/user/how-to-reset-password.md

##Bonus Points
Make the command detect if the feature is frontend/backend/full-stack and adjust documentation accordingly
Make it automatically capture and insert screenshots in user-facing documentation
Auto-link to related existing documentation


## Review Standards
Examples of excellent documents that you should match the design/style/conventions of:


## Process
1. **First**: Read the example document .md files above to understand our design patterns, naming conventions, and code style 
2. **Second**: Analyze $ARGUMENTS against these standards
3. **Third**: Create detailed documentation covering:
   - Code structure and organization
   - Adherence to established patterns
   - Performance considerations
   - Security implications
   - Maintainability concerns
   - Test coverage gaps
   - usage details for users



## Review Checklist
- follow best practices based on existing claude documents
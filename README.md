# ExpenseTracker - Personal Finance Management Application

A modern, professional expense tracking web application built with Next.js 14, TypeScript, and Tailwind CSS. Track your expenses, analyze spending patterns, and manage your personal finances with ease.

## Features

### Core Functionality
- **Add Expenses**: Create new expense entries with date, amount, category, and description
- **Edit & Delete**: Modify or remove existing expenses with confirmation dialogs
- **Search & Filter**: Find expenses by description, category, and date range
- **Data Persistence**: All data is stored locally using browser localStorage

### Dashboard Analytics
- **Summary Cards**: View total expenses, monthly spending, average expense, and top spending category
- **Category Breakdown**: Visual representation of spending by category with progress bars
- **Recent Expenses**: Quick view of your 5 most recent transactions
- **Monthly Trend Chart**: 6-month spending trend visualization

### Export & Reports
- **CSV Export**: Download your filtered expenses as a CSV file for external analysis
- **Real-time Filtering**: Export only the expenses matching your current filters

### User Experience
- **Modern Design**: Clean, professional interface with intuitive navigation
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation**: Client-side validation ensures data quality
- **Visual Feedback**: Loading states, hover effects, and smooth transitions
- **Category Colors**: Color-coded categories for quick visual recognition

## Categories

The application supports six expense categories:
- **Food**: Groceries, dining out, food delivery
- **Transportation**: Gas, public transit, rideshare, parking
- **Entertainment**: Movies, concerts, games, hobbies
- **Shopping**: Clothing, electronics, household items
- **Bills**: Rent, utilities, subscriptions, insurance
- **Other**: Miscellaneous expenses

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd expense-tracker
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

## Usage Guide

### Adding an Expense

1. Navigate to the **Expenses** page using the top navigation
2. Click the **Add Expense** button
3. Fill in the form:
   - **Date**: Select the date of the expense (cannot be in the future)
   - **Amount**: Enter the expense amount (must be positive)
   - **Category**: Choose from the dropdown menu
   - **Description**: Provide a brief description (minimum 3 characters)
4. Click **Add Expense** to save

### Viewing the Dashboard

1. Click **Dashboard** in the navigation
2. View summary cards showing:
   - Total expenses across all time
   - Current month's spending
   - Average expense amount
   - Top spending category
3. Review the category breakdown chart
4. Check recent expenses
5. Analyze the 6-month spending trend

### Filtering Expenses

1. Go to the **Expenses** page
2. Use the filter panel:
   - **Search**: Type keywords to search descriptions
   - **Category**: Select a specific category or "All"
   - **Start Date**: Set the beginning of the date range
   - **End Date**: Set the end of the date range
3. Click **Clear Filters** to reset all filters

### Editing an Expense

1. Navigate to the **Expenses** page
2. Find the expense you want to edit
3. Click the **Edit** button in the Actions column
4. Modify the values in the form
5. Click **Update Expense** to save changes
6. Click **Cancel** to discard changes

### Deleting an Expense

1. Navigate to the **Expenses** page
2. Find the expense you want to delete
3. Click the **Delete** button
4. Click **Confirm** to permanently delete
5. Click **Cancel** to abort the deletion

### Exporting Data

1. Navigate to the **Expenses** page
2. Apply any desired filters (optional)
3. Click the **Export CSV** button
4. The CSV file will download automatically
5. Open in Excel, Google Sheets, or any spreadsheet application

## Technical Details

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Data Storage**: Browser localStorage
- **Font**: Inter (Google Fonts)

### Project Structure
```
expense-tracker/
├── app/
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Dashboard page
│   └── expenses/
│       └── page.tsx        # Expenses management page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── SummaryCard.tsx     # Dashboard summary cards
│   ├── CategoryBreakdown.tsx  # Category spending chart
│   ├── RecentExpenses.tsx  # Recent transactions list
│   ├── SpendingChart.tsx   # Monthly trend chart
│   ├── ExpenseForm.tsx     # Add/edit expense form
│   ├── ExpenseList.tsx     # Expenses table
│   └── ExpenseFilters.tsx  # Filter controls
├── lib/
│   ├── storage.ts          # localStorage utilities
│   └── utils.ts            # Helper functions
├── types/
│   └── expense.ts          # TypeScript type definitions
└── package.json
```

### Data Model

Each expense is stored with the following structure:

```typescript
interface Expense {
  id: string;              // Unique identifier
  date: string;            // ISO date string
  amount: number;          // Expense amount
  category: ExpenseCategory;  // One of 6 categories
  description: string;     // User description
  createdAt: string;       // Creation timestamp
  updatedAt: string;       // Last update timestamp
}
```

### Browser Compatibility

The application requires a modern browser with support for:
- ES6+ JavaScript features
- localStorage API
- CSS Grid and Flexbox
- SVG graphics

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Data Privacy

- All expense data is stored locally in your browser
- No data is sent to external servers
- Data persists until you clear browser storage or delete it manually
- Export your data as CSV for backup purposes

## Tips for Best Use

1. **Regular Entry**: Add expenses daily for accurate tracking
2. **Descriptive Names**: Use clear descriptions for easy searching
3. **Consistent Categories**: Categorize consistently for better analytics
4. **Regular Exports**: Export data monthly for external backup
5. **Review Dashboard**: Check your dashboard weekly to stay on top of spending

## Troubleshooting

### Data Not Persisting
- Check if localStorage is enabled in your browser
- Ensure you're not in private/incognito mode
- Check browser storage quota

### Build Errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Display Issues
- Clear browser cache
- Try a different browser
- Ensure JavaScript is enabled

## Future Enhancements

Potential features for future versions:
- Budget setting and tracking
- Recurring expense automation
- Multiple currency support
- Cloud sync across devices
- Receipt photo uploads
- Advanced analytics and reports
- Custom categories
- Multi-user accounts

## License

This project is provided as-is for personal use.

## Support

For issues or questions, please refer to this documentation or check the code comments for implementation details.

---

Built with Next.js 14, TypeScript, and Tailwind CSS

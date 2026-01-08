# How to Export Your Expenses

Learn how to download your expense data as a CSV file that you can open in Excel, Google Sheets, or any spreadsheet application.

---

## What is Expense Export?

The export feature allows you to download your expense records as a **CSV (Comma-Separated Values)** file. This file can be:
- Opened in Microsoft Excel, Google Sheets, or Apple Numbers
- Imported into accounting software
- Shared with your accountant
- Used for tax preparation
- Analyzed with custom tools

**Key Features:**
- ✅ Exports only the expenses you've filtered (search, category, dates)
- ✅ Automatically named with today's date
- ✅ Works completely offline (no internet required)
- ✅ Safe and private (your data never leaves your device)

---

## Step-by-Step Guide

### 1. Navigate to Expenses Page

Click **Expenses** in the top navigation bar.

![Navigate to Expenses Page - Screenshot Placeholder]
*Screenshot: Click "Expenses" in the header navigation*

---

### 2. (Optional) Apply Filters

Before exporting, you can filter which expenses to include:

**To Filter by Category:**
1. Find the **Category** dropdown in the filter panel
2. Select a category (Food, Transportation, etc.)
3. Only expenses in that category will be exported

![Filter by Category - Screenshot Placeholder]
*Screenshot: Category dropdown showing all options*

**To Filter by Date Range:**
1. Click **Start Date** and choose the beginning date
2. Click **End Date** and choose the ending date
3. Only expenses within this date range will be exported

![Filter by Date Range - Screenshot Placeholder]
*Screenshot: Date range filters with calendar pickers*

**To Search by Description:**
1. Type keywords in the **Search** box
2. Only expenses matching your search will be exported

![Search Expenses - Screenshot Placeholder]
*Screenshot: Search box with example text*

**To Clear Filters:**
- Click **Clear Filters** button to reset and export all expenses

---

### 3. Click the Export CSV Button

1. Look for the **Export CSV** button in the top-right corner
2. The button appears only when you have expenses to export
3. Click **Export CSV**

![Export CSV Button - Screenshot Placeholder]
*Screenshot: Export CSV button highlighted in top-right area*

**Note:** If you don't see the Export CSV button, it means you have no expenses to export. Either:
- Add some expenses first, or
- Clear your filters if they're too restrictive

---

### 4. Download Starts Automatically

Your browser will automatically download the file:
- **Filename format:** `expenses-2026-01-08.csv` (uses today's date)
- **File location:** Your browser's default download folder

![Download Notification - Screenshot Placeholder]
*Screenshot: Browser download notification showing the CSV file*

---

### 5. Open the CSV File

**In Microsoft Excel:**
1. Open Excel
2. Click **File** → **Open**
3. Navigate to your Downloads folder
4. Select the `expenses-YYYY-MM-DD.csv` file
5. Click **Open**

**In Google Sheets:**
1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **File** → **Import**
3. Click **Upload** tab
4. Drag your CSV file or click **Select a file from your device**
5. Click **Import data**

**In Apple Numbers:**
1. Open Numbers
2. Click **File** → **Open**
3. Select your CSV file
4. Click **Open**

![CSV File Open in Excel - Screenshot Placeholder]
*Screenshot: CSV file displayed in Excel with headers and data*

---

## Understanding Your Exported Data

### CSV File Structure

Your exported file contains these columns:

| Column | Description | Example |
|--------|-------------|---------|
| **Date** | The date of the expense | 2024-01-15 |
| **Category** | Expense category | Food |
| **Amount** | How much you spent | 42.5 |
| **Description** | What you spent it on | Lunch at Joe's Diner |

**Example CSV Content:**
```
Date,Category,Amount,Description
2024-01-15,Food,42.5,"Lunch at Joe's Diner"
2024-01-14,Transportation,25,"Gas station fill-up"
2024-01-13,Entertainment,60,"Movie tickets and popcorn"
```

### Why Use Quotes?

You might notice some descriptions are wrapped in quotes (`""`). This is normal and helps with:
- Descriptions containing commas
- Descriptions containing quotes (like "Joe's")
- Preserving formatting in spreadsheet applications

**Example:**
- Original: `Lunch at "Joe's Diner", Main St.`
- In CSV: `"Lunch at ""Joe's Diner"", Main St."`
- In Excel: Displays correctly as `Lunch at "Joe's Diner", Main St.`

---

## Common Use Cases

### 📊 Tax Preparation

**Goal:** Export business expenses for tax filing

1. Go to **Expenses** page
2. Set **Start Date** to January 1st of the tax year
3. Set **End Date** to December 31st of the tax year
4. Filter by relevant categories (Transportation, Bills, etc.)
5. Click **Export CSV**
6. Share with your accountant or import into tax software

---

### 📈 Monthly Budget Review

**Goal:** Analyze last month's spending

1. Go to **Expenses** page
2. Set **Start Date** to the 1st of last month
3. Set **End Date** to the last day of last month
4. Click **Export CSV**
5. Open in Excel/Sheets
6. Create pivot tables or charts to analyze spending patterns

---

### 🍔 Category-Specific Analysis

**Goal:** See all food expenses this year

1. Go to **Expenses** page
2. Select **Food** from Category dropdown
3. Set **Start Date** to January 1st
4. Set **End Date** to today
5. Click **Export CSV**
6. Analyze dining trends and identify savings opportunities

---

### 💾 Data Backup

**Goal:** Keep a backup of all expenses

1. Go to **Expenses** page
2. Make sure **all filters are cleared** (click "Clear Filters")
3. Click **Export CSV**
4. Save the file to your backup drive or cloud storage
5. Repeat monthly for regular backups

**Tip:** Because data is stored in your browser, exporting is important for backup purposes!

---

## Troubleshooting

### The Export CSV Button Doesn't Appear

**Problem:** You can't see the Export CSV button

**Solutions:**
1. ✅ Add at least one expense first
2. ✅ Check if your filters are too restrictive (clear filters)
3. ✅ Look at the count: "Showing 0 of X expenses" means your filters match nothing

---

### The Download Didn't Start

**Problem:** Clicking Export CSV doesn't download a file

**Solutions:**
1. ✅ Check if your browser is blocking downloads
   - Look for a notification in your browser's address bar
   - Click and allow downloads from this site
2. ✅ Check browser download settings
   - Ensure "Ask where to save files" is enabled, or
   - Check your default download folder
3. ✅ Try a different browser (Chrome, Firefox, Safari, Edge)

---

### The CSV File Won't Open

**Problem:** Double-clicking the file doesn't open it

**Solutions:**
1. ✅ Make sure you have a spreadsheet application installed:
   - Microsoft Excel (Windows/Mac)
   - Google Sheets (web browser)
   - Apple Numbers (Mac)
   - LibreOffice Calc (free alternative)
2. ✅ Right-click the file → **Open With** → Select your spreadsheet app
3. ✅ In your spreadsheet app, use **File** → **Open** to manually open the CSV

---

### Special Characters Look Wrong

**Problem:** Descriptions with quotes or foreign characters display incorrectly

**Solutions:**
1. ✅ In Excel: Use **Data** → **Get External Data** → **From Text** and select **UTF-8 encoding**
2. ✅ In Google Sheets: Imports usually handle UTF-8 automatically
3. ✅ The file is saved with UTF-8 encoding to support all characters

---

### I Exported the Wrong Data

**Problem:** The CSV contains different expenses than expected

**Solutions:**
1. ✅ Remember: Export includes **only filtered expenses**, not all expenses
2. ✅ Check your active filters:
   - Search box content
   - Selected category
   - Date range
3. ✅ Look at the count before exporting: "Showing X of Y expenses"
4. ✅ Click **Clear Filters** to export all expenses

---

## Tips & Best Practices

### 📅 File Naming

The app automatically names your files as `expenses-YYYY-MM-DD.csv` using today's date.

**Tip:** Rename files for better organization:
- `expenses-2024-january.csv` (monthly exports)
- `expenses-2024-food.csv` (category exports)
- `expenses-2024-tax-deductions.csv` (tax-related exports)

### 🔄 Regular Exports

**Best Practice:** Export your expenses regularly for backup purposes.

**Recommended Schedule:**
- 📆 Monthly: End of each month
- 📆 Quarterly: Every 3 months for review
- 📆 Annually: End of year for taxes

**Why?** Your expenses are stored in your browser's local storage. If you:
- Clear browser data
- Switch computers
- Reinstall your browser

...your data will be lost unless you have exports backed up.

### 📊 Advanced Analysis

**After exporting, you can:**

1. **Create Charts** in Excel/Sheets:
   - Pie charts for category breakdown
   - Line graphs for spending trends
   - Bar charts for month-over-month comparison

2. **Use Formulas:**
   - `=SUM(C:C)` to total all expenses
   - `=AVERAGE(C:C)` for average expense
   - `=COUNTIF(B:B,"Food")` to count food expenses

3. **Create Pivot Tables:**
   - Summarize by category
   - Group by month
   - Find top spending days

4. **Import into Accounting Software:**
   - QuickBooks
   - FreshBooks
   - Wave Accounting
   - Mint (discontinued, but CSV format is universal)

### 🔒 Privacy & Security

**Your data is safe:**
- ✅ All export processing happens in your browser
- ✅ No data is sent to any server
- ✅ The CSV file is created on your device
- ✅ You have complete control over who sees the file

**Sharing Safely:**
- 🔐 The CSV file contains all your financial data
- 🔐 Only share with trusted individuals (accountant, financial advisor)
- 🔐 Use encrypted email or secure file sharing services
- 🔐 Delete shared files after they're no longer needed

---

## Frequently Asked Questions (FAQ)

### Can I export to Excel format (.xlsx)?

**Answer:** Currently, the app exports to CSV format only. However, CSV files can be opened in Excel and saved as `.xlsx` if needed.

**How to convert:**
1. Open the CSV in Excel
2. Click **File** → **Save As**
3. Choose **Excel Workbook (*.xlsx)** from the format dropdown
4. Click **Save**

### Can I export to PDF?

**Answer:** The current version exports to CSV only. For other formats, see the [technical documentation](../dev/export-expenses-implementation.md) which describes advanced versions (V2 and V3) with PDF support.

**Workaround:**
1. Open CSV in Excel/Sheets
2. Format as desired
3. Use **File** → **Print** → **Save as PDF**

### Does export include deleted expenses?

**Answer:** No. Only currently existing expenses are included. Once you delete an expense, it cannot be recovered or exported.

**Tip:** Export your data before deleting expenses if you need a historical record.

### Can I schedule automatic exports?

**Answer:** The current version requires manual export. Automatic scheduling is available in the advanced version (V3). See the [code analysis document](../../code-analysis.md) for details.

### What happens to my data when I export?

**Answer:** Nothing changes. Exporting creates a copy of your data in a file. Your expenses remain in the app exactly as they were.

### Can I import a CSV back into the app?

**Answer:** The current version does not support importing. You can only export. This is planned for a future update.

### How do I know which expenses are included?

**Answer:** Before clicking Export CSV, look at the count message on the page:
- "Showing 45 of 100 expenses" means 45 expenses will be exported
- The number on the left is what you'll get in the CSV

### Can I export from my phone?

**Answer:** Yes! The export feature works on mobile browsers. The CSV file will be saved to your phone's download folder.

**Mobile Tips:**
- On iPhone: Files go to the Files app → Downloads folder
- On Android: Check the Downloads folder or notification drawer

---

## What's Next?

After exporting your expenses, you might want to:

- ✏️ [Edit an expense](../../README.md#editing-an-expense) if you notice errors in your export
- 🔍 [Filter expenses](../../README.md#filtering-expenses) to create specialized reports
- 📊 [View the dashboard](../../README.md#viewing-the-dashboard) for visual analytics
- ➕ [Add new expenses](../../README.md#adding-an-expense) to keep your data current

---

## Need Help?

If you're still having trouble exporting your expenses:

1. **Check the main documentation:** [README.md](../../README.md#exporting-data)
2. **Review technical details:** [Developer Documentation](../dev/export-expenses-implementation.md)
3. **Compare implementations:** [Code Analysis](../../code-analysis.md) for advanced features
4. **Browser compatibility:** Ensure you're using a supported browser (Chrome, Firefox, Safari, Edge)

---

**Document Version:** 1.0
**Last Updated:** 2026-01-08
**Difficulty Level:** Beginner
**Estimated Reading Time:** 10 minutes

---

**Related Guides:**
- [Main User Guide](../../README.md)
- [Adding Expenses](../../README.md#adding-an-expense)
- [Using Filters](../../README.md#filtering-expenses)
- [Dashboard Overview](../../README.md#viewing-the-dashboard)

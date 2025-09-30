# DigiClips Angular App - Team Setup Instructions

## Quick Start for Team Members

### 1. Clone the Repository
```bash
git clone https://github.com/Dhruvina21/Digiclips-app.git
cd digiclips-app
npm install
ng serve
```

Visit `http://localhost:4200` to see the app running.

## Team Assignments & Branches

- **Team Member 1:** Hello Component (`feature/hello-component`)
  - File location: `src/app/components/team-member-1/hello-component/`
  - Task: Create "Hello, DigiClips!" banner component

- **Team Member 2:** Navigation (`feature/navigation`)
  - File location: `src/app/components/team-member-2/navigation/`
  - Task: Implement routing between Main Menu and Submenu pages

- **Team Member 3:** Search Form (`feature/search-form`)
  - File location: `src/app/components/team-member-3/search-form/`
  - Task: Create search input box that logs to console

- **Team Member 4:** Layout & Styling (`feature/layout`)
  - File location: `src/app/components/team-member-4/layout/`
  - Task: Style header, footer, and overall layout

- **Team Member 5:** Shared Utilities (`feature/shared-utilities`)
  - File location: `src/app/components/team-member-5/shared-utilities/`
  - Task: Create shared services and utility functions

## Detailed Workflow

### Step 1: Switch to Your Branch
```bash
# Check which branch you're on
git branch

# Switch to your assigned branch
git checkout feature/your-branch-name

# Example for Team Member 1:
git checkout feature/hello-component
```

### Step 2: Start Development Server
```bash
# Start Angular development server
ng serve

# Your app will be available at http://localhost:4200
# The page automatically refreshes when you make changes
```

### Step 3: Find Your Component Files
Each team member has 4 main files to work with:

```
src/app/components/team-member-X/your-component/
├── your-component.component.html    # Your HTML template
├── your-component.component.css     # Your styles
├── your-component.component.ts      # Your TypeScript logic
└── your-component.component.spec.ts # Tests (optional for now)
```

### Step 4: Edit Your Component

**HTML File (.html):** Write your component's template
```html
<!-- Example for hello-component.component.html -->
<div class="hello-banner">
  <h1>Hello, DigiClips!</h1>
  <p>Welcome to our Angular app</p>
</div>
```

**CSS File (.css):** Style your component
```css
/* Example for hello-component.component.css */
.hello-banner {
  background-color: #f0f8ff;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}
```

**TypeScript File (.ts):** Add component logic
```typescript
// Example for hello-component.component.ts
export class HelloComponentComponent {
  title = 'DigiClips';
  
  onClick() {
    console.log('Hello button clicked!');
  }
}
```

### Step 5: See Your Changes Live
- Save your files in VS Code
- The browser at `http://localhost:4200` automatically refreshes
- Check browser console (F12) for any errors or console.log messages

### Step 6: Daily Git Workflow

**Check your current status:**
```bash
# See what files you've changed
git status

# See which branch you're on
git branch
```

**Commit your changes:**
```bash
# Add all your changes
git add .

# Create a commit with a descriptive message
git commit -m "Add hello banner with styling and click event"

# Push to your branch on GitHub
git push origin feature/your-branch-name
```

**Example commit messages:**
- `"Add hello component with banner and welcome message"`
- `"Implement navigation menu with route links"`
- `"Create search form with input validation"`
- `"Style header and footer layout"`
- `"Add shared utility service for common functions"`

### Step 7: Integration with Main App

To see your component in the main app, it needs to be added to `app.component.html`. 

**For now, test your component individually. Later, we'll integrate all components together.**

### Step 8: Useful Git Commands

```bash
# See your recent commits
git log --oneline

# Switch between branches
git checkout main
git checkout feature/your-branch

# Pull latest changes from GitHub
git pull origin feature/your-branch

# See differences in your files
git diff

# Undo changes to a file (before committing)
git checkout -- filename.html
```

### Step 9: Testing Your Component

**Check for errors:**
- Browser console (F12 → Console tab)
- Terminal where `ng serve` is running
- VS Code Problems tab

**Test your component:**
- Does it display correctly?
- Do click events work?
- Are styles applied?
- Any console errors?

### Step 10: Getting Help

**Common Issues:**
- Component not showing? Check if it's added to `app.component.html`
- Styles not working? Check CSS file path and syntax
- TypeScript errors? Check VS Code Problems panel
- Git conflicts? Ask for help before force-pushing

**Resources:**
- Angular Documentation: https://angular.io/docs
- Ask team members in chat
- Check browser console for errors
- Use VS Code's built-in error highlighting

## Ready to Merge?

When your component is working:
1. Test thoroughly in browser
2. Commit and push all changes
3. Create a Pull Request on GitHub
4. Request review from another team member
5. Merge after approval

## Project Structure Overview

```
src/app/
├── components/           # All team member components
├── shared/              # Shared components (header, footer)
├── pages/               # Page components (main-menu, submenu)
├── services/            # Shared services
├── app.component.html   # Main app template
├── app.component.ts     # Main app logic
└── app-routing.module.ts # Routing configuration
```

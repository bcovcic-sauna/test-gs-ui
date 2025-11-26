# Test App for @bc-testing/gs-ui

This is a test application to verify the `@bc-testing/gs-ui` component library works correctly.

## Setup

```bash
# 1. Clone this repo
git clone <repo-url>
cd test-gs-ui-app

# 2. Install dependencies (this also copies UI components)
npm install

# 3. Install the additional dependencies that were added
npm install

# 4. Start the dev server
npm run dev
```

## What happens on install

1. `npm install` installs `@bc-testing/gs-ui` and other dependencies
2. The `postinstall` script automatically runs and:
   - Copies component source files to `components/ui/`
   - Adds required peer dependencies to `package.json`
3. Run `npm install` again to install the newly added dependencies
4. Components are ready to use!

## Usage

```tsx
import { Button, Card, Input, Badge } from '@/components/ui';

function App() {
  return (
    <Card>
      <Input placeholder="Type here..." />
      <Button variant="outline">Click me</Button>
      <Badge>New</Badge>
    </Card>
  );
}
```

## Available Components

- Accordion, AlertDialog, Alert, Avatar, Badge
- Button, ButtonGroup, Calendar, Card, Checkbox
- DatePicker, Drawer, DropdownMenu, Input, Label
- Popover, PriceInput, RadioGroup, Select
- SelectorCheckbox, Separator, Sheet, Skeleton
- Switch, Table, Tabs, Textarea, Tooltip

## Notes

- ⚠️ Don't modify files in `components/ui/` - they get overwritten on updates
- Components use Tailwind CSS classes (you may need to configure Tailwind)
- Run `npm update @bc-testing/gs-ui && npm install` to get latest components

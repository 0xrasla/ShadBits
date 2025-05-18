# Shadbits Custom Components

This document provides an overview of all custom components available in the Shadbits library beyond the standard shadcn/ui components.

## Buttons

### GradientButton

A beautiful button with a customizable gradient background that transitions on hover.

```tsx
import { GradientButton } from "@/components/custom/gradient-button";

<GradientButton>Click Me</GradientButton>;
```

**Props:**

- All standard button props are supported

### OutlinedButton

An enhanced outlined button with improved styling for better visibility and interaction feedback.

```tsx
import { OutlinedButton } from "@/components/custom/outlined-button";

<OutlinedButton>Click Me</OutlinedButton>;
```

**Props:**

- All standard button props are supported

### CustomButton

A flexible button component with additional customization options.

```tsx
import { CustomButton } from "@/components/custom/custom-button";

<CustomButton variant="custom">Click Me</CustomButton>;
```

**Props:**

- `variant`: Additional variants beyond standard shadcn/ui button variants
- All standard button props are supported

## Badges

### GradientBadge

An eye-catching badge with gradient background for highlighting important content.

```tsx
import { GradientBadge } from "@/components/custom/gradient-badge";

<GradientBadge>New</GradientBadge>;
```

**Props:**

- All standard badge props are supported

### OutlineBadge

A subtle outlined badge ideal for secondary information.

```tsx
import { OutlineBadge } from "@/components/custom/outline-badge";

<OutlineBadge>Category</OutlineBadge>;
```

**Props:**

- All standard badge props are supported

### PillBadge

A rounded pill-shaped badge for a modern look.

```tsx
import { PillBadge } from "@/components/custom/pill-badge";

<PillBadge>Tag</PillBadge>;
```

**Props:**

- All standard badge props are supported

### StatusBadge

A specialized badge for showing statuses with appropriate colors.

```tsx
import { StatusBadge } from "@/components/custom/status-badge";

<StatusBadge status="success">Completed</StatusBadge>
<StatusBadge status="error">Failed</StatusBadge>
<StatusBadge status="warning">Pending</StatusBadge>
<StatusBadge status="info">Processing</StatusBadge>
```

**Props:**

- `status`: "success" | "error" | "warning" | "info"
- All standard badge props are supported

## Tabs

### CustomTabs

Enhanced tab components with customizable styling.

```tsx
import { CustomTabs } from "@/components/custom/custom-tabs";

<CustomTabs
  items={[
    { value: "tab1", label: "Tab 1", content: "Tab 1 content" },
    { value: "tab2", label: "Tab 2", content: "Tab 2 content" },
  ]}
/>;
```

**Props:**

- `items`: Array of tab items with value, label and content

### PillTabs

Rounded tab navigation with pill shape for a modern UI.

```tsx
import { PillTabs } from "@/components/custom/pill-tabs";

<PillTabs
  items={[
    { value: "tab1", label: "Tab 1", content: "Tab 1 content" },
    { value: "tab2", label: "Tab 2", content: "Tab 2 content" },
  ]}
/>;
```

**Props:**

- `items`: Array of tab items with value, label and content

### IconTabs

Tab components with icon support for visual navigation.

```tsx
import { IconTabs } from "@/components/custom/icon-tabs";
import { Home, Settings, User } from "lucide-react";

<IconTabs
  items={[
    { value: "home", label: "Home", icon: <Home />, content: "Home content" },
    {
      value: "settings",
      label: "Settings",
      icon: <Settings />,
      content: "Settings content",
    },
    {
      value: "profile",
      label: "Profile",
      icon: <User />,
      content: "Profile content",
    },
  ]}
/>;
```

**Props:**

- `items`: Array of tab items with value, label, icon and content

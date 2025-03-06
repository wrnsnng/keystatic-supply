---
title: Badge
description: A small visual indicator used to highlight status, count, or categorize items
category: data-display
status: planned
---

# Badge Component

Badges are small status descriptors for UI elements. They typically appear near another UI element.

## Usage

Badges can be used to indicate status, display counts, or categorize items.

```jsx
<Badge variant="primary">New</Badge>
<Badge variant="error">4</Badge>
```

## Variants

- **Primary**: Default badge
- **Success**: Green badge for success states
- **Warning**: Yellow badge for warning states
- **Error**: Red badge for error states
- **Neutral**: Gray badge for neutral states

## Sizes

- Small
- Medium (default)

## Accessibility

- Ensure sufficient color contrast
- Don't rely on color alone to convey information
- Consider using aria-label when appropriate 
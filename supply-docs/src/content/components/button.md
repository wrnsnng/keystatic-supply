---
title: Button
description: A versatile button component for user interactions.
category: inputs
status: in-progress
---

# Button Component

The Button component is a foundational element in our design system, used to trigger actions or navigate to different views.

## Usage

Buttons can be used in forms, dialogs, and as standalone call-to-action elements. They communicate actions that users can take.

```jsx
<Button variant="primary">Click me</Button>
```

## Variants

Buttons come in several variants:

- **Primary**: Used for the main action on a page
- **Secondary**: Used for alternative actions
- **Tertiary**: Used for less important actions
- **Danger**: Used for destructive actions
- **Ghost**: Used for the least prominent actions

## Sizes

Buttons are available in multiple sizes:

- Small
- Medium (default)
- Large

## States

Buttons can have the following states:

- Default
- Hover
- Active
- Focused
- Disabled
- Loading

## Accessibility

- Buttons use appropriate ARIA attributes
- They're keyboard accessible
- They have sufficient color contrast
- They include focus indicators

## Implementation Guidelines

When implementing this component, ensure that:

1. Button text is concise and describes the action
2. The appropriate variant is used based on the importance of the action
3. Adequate spacing is provided around buttons
4. Loading states are used for asynchronous actions 
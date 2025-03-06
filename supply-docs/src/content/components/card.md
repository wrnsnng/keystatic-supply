---
title: Card
description: A flexible container for displaying content and actions on a topic. Cards can contain text, links, images, and other UI components.
category: layout
status: planned
---

# Card Component

Cards are containers that group related content and actions. They provide a flexible way to display information in a consistent format.

## Usage

Cards are used to group information about a single subject. They can be used in grids, lists, or as standalone containers.

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardSubtitle>Card Subtitle</CardSubtitle>
  </CardHeader>
  <CardContent>
    This is the main content of the card. It can contain text, images, and other UI elements.
  </CardContent>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

## Variants

Cards come in several variants:

- **Basic**: Simple container with minimal styling
- **Elevated**: Card with shadow for emphasis
- **Outlined**: Card with a border instead of elevation
- **Interactive**: Card that can be clicked (has hover states)

## Composition

Cards are composed of several sub-components:

- **CardHeader**: Contains the title and optional subtitle
- **CardContent**: The main content area of the card
- **CardFooter**: Contains actions related to the card content
- **CardMedia**: For displaying images or other media content

## Best Practices

- Keep content concise and focused on a single topic
- Use consistent spacing within cards
- Limit the number of actions in a card
- Maintain consistent height for cards in the same row (when possible)
- Use appropriate sizing for different screen sizes

## Accessibility

- Ensure proper heading hierarchy within cards
- Maintain sufficient color contrast
- If the entire card is clickable, ensure proper focus states and keyboard navigation
- Include appropriate ARIA attributes when needed 
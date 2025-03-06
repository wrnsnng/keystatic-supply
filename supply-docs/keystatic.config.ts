import { config, fields, collection } from '@keystatic/core';

export default config({
  ui: {
    brand: { name: 'supply' },
  },
  storage: {
    kind: 'cloud',
    pathPrefix: 'supply-docs',
  },
  cloud: {
    project: 'supply/keystatic-supply',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
    components: collection({
      label: 'Components',
      slugField: 'title',
      path: 'src/content/components/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ 
          label: 'Description', 
          multiline: true 
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Inputs', value: 'inputs' },
            { label: 'Navigation', value: 'navigation' },
            { label: 'Layout', value: 'layout' },
            { label: 'Feedback', value: 'feedback' },
            { label: 'Data Display', value: 'data-display' },
            { label: 'Overlays', value: 'overlays' },
          ],
          defaultValue: 'layout'
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Planned', value: 'planned' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Completed', value: 'completed' }
          ],
          defaultValue: 'planned'
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/components',
              publicPath: '../../assets/images/components/',
            },
          },
        }),
      },
    }),
  },
});

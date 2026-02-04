import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
          validation: { isRequired: true }
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value
          }
        ),
        content: fields.mdx({
            label: 'Content',
            options: {
                image: {
                    directory: 'public/images/posts',
                    publicPath: '/images/posts/',
                }
            }
        }),
      },
    }),
  },
});

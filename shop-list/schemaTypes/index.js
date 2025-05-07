
export const schemaTypes = [
  {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {name: 'title', title: 'Title', type: 'string'},
      {name: 'body', title: 'Body', type: 'text'},
      {name: 'author', title: 'Author', type: 'string'},
    ],
  },
]

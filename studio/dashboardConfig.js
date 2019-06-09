export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cfbc7d496cfc09cf92dad41',
                  title: 'Sanity Studio',
                  name: 'b-log-studio',
                  apiId: 'a3ac7ea7-8e80-4297-8b9f-d6fa390b6bda'
                },
                {
                  buildHookId: '5cfbc7d4ccb6acc72902084f',
                  title: 'Blog Website',
                  name: 'b-log',
                  apiId: '6a011a48-8d0f-4352-86e9-b389147fd736'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rappad/gatsby-sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://b-log.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

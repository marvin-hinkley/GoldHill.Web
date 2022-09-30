const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const agendaPost = path.resolve(`./src/templates/agenda-post.js`)

  const result = await graphql(`
    {
      allStrapiMeetingAgenda {
        nodes {
          Title
          Slug
          Date
          Agenda {
            data {
              childMarkdownRemark {
                html
              }
            }
          }
          MeetingType
          Attachments {
            url
            name
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi meeting agendas`,
      result.errors
    )

    return
  }

  const meetingAgendas = result.data.allStrapiMeetingAgenda.nodes

  if (meetingAgendas.length > 0) {
    meetingAgendas.forEach(agenda => {
      createPage({
        path: `/agenda/${agenda.Slug}`,
        component: agendaPost,
        context: {
          slug: agenda.Slug
        }
      })
    });
  }
}
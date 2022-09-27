import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroComponent from "../components/hero"
import QuickLinks from "../components/quick-links"
import Alerts from "../components/alerts"

const IndexPage = ({data}) => {
  const { hero, alerts } = data.strapi

  return (
    <Layout>
      <Seo title="Home" />
      <HeroComponent hero={hero.data.attributes} />
      { alerts !== null && <Alerts alerts={alerts.data} />}
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    strapi {
      hero {
        data {
          attributes {
            Title
            Subtitle
            Link
            BackgroundImage {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
      alerts {
        data {
          attributes {
            Title
            Body
            Severity
          }
        }
      }
    }
  }
`

export default IndexPage

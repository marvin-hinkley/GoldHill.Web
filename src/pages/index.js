import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/hero"
import QuickLinks from "../components/quick-links"
import Alerts from "../components/alerts"

const IndexPage = () => {
  const { strapi } = useStaticQuery(query)
  const componentData = strapi.homepage.Components

  return (
    <Layout>
      <SEO title="Home" />
      {componentData.map(component => {
        switch (component.__typename) {
          case "strapi_ComponentSiteComponentsHero":
            return (
              <HeroComponent
                hero={component}
                key={`${component.__typename}_${component.id}`}
              />
            )
            break
          case "strapi_ComponentSiteComponentsSlider":
            return <span>SLIDER</span>
            break
          case "strapi_ComponentSiteComponentsAlerts":
            return <Alerts alerts={component.alerts} />
            break
          case "strapi_ComponentSiteComponentsQuickLinks":
            return (
              <QuickLinks
                links={component.Links}
                key={`${component.__typename}_${component.id}`}
              />
            )
            break

          default:
            break
        }
      })}
    </Layout>
  )
}

const query = graphql`
  query {
    strapi {
      homepage {
        Components {
          ... on strapi_ComponentSiteComponentsAlerts {
            id
            __typename
            alerts {
              Title
              Body
              Severity
            }
          }
          ... on strapi_ComponentSiteComponentsSlider {
            id
            __typename
            Slides {
              Caption
              Image {
                url
                name
              }
            }
          }
          ... on strapi_ComponentSiteComponentsQuickLinks {
            id
            __typename
            Links {
              URL
              Text
              NewTab
            }
          }
          ... on strapi_ComponentSiteComponentsHero {
            id
            __typename
            Heading
            SubHeading
            Image {
              url
              name
            }
          }
        }
      }
    }
  }
`

export default IndexPage

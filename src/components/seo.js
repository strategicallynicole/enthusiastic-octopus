import React from "react";
import { Helmet } from "react-helmet";

function SEO(props) {
  const seo = props.page && props.page.seo;
  if (!seo) {
      return null;
  }
  return (
      <Helmet>
          {seo.title && <title>{ seo.title }</title>}
          {seo.description && <meta name="description" content={ seo.description } />}
          {seo.robots && <meta name="robots" content={ seo.robots.join(',') } />}
          {seo.extra && seo.extra.map((meta, index) => {
              const keyName = meta.keyName || 'name';
              const value = (meta.relativeUrl ? props.site.domain : '') + meta.value;
              return <meta key={index} {...{[keyName]: meta.name}} content={value} />
          })}
      </Helmet>
  );
}

export default SEO;
{/*function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;*/}

{/**import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types"; */}
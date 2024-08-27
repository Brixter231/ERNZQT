import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I’m Brixter Balboa Bondoc, I live in Sulipan Apalit, Pampanga. My hobbies are playing sports like basketball and badminton. My favorite food is filipino food like sigang, menudo, asado. Other things that I can tell you about me is I like watching movies/series and listening to music.
        </p>
      
        <p>I take up IT because it’s a lot of opportunities here and it’s in demand and my brother is also an IT.
        </p>
        <p>After graduation I see myself as a Software Developer or UX/UI Designer.</p>
        <p>Integration Strategies Understanding various approaches to integrating systems, such as point-to-point, middleware, and service-oriented architecture and,
Process Modeling: Documenting and analyzing business processes to improve efficiency and integration.
</p>
        <p>Integration Techniques and Strategies, Architectural Frameworks and Model and Data Integration and Management and more.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.</p>
      </section>
    </Layout>
  );
}
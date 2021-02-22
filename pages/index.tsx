import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Template, { name } from 'components/Template'
import utilStyles from 'styles/utils.module.css'

export default function Home() {
  return (
    <Template home>
      <Head>
        <title>{name}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
      </section>
    </Template>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

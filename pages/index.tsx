import Link from 'next/link'

import Head from '../components/head';
import Layout, { siteTitle } from '../components/layout';
import TagsNav from '../components/tagsNav';
import BlogList from '../components/blogList';
import Profile from '../components/profile';

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head 
        title="yaffilog"
        description="yaffi"
        image="/images/yaffi.jpg"
        url="yaffi.net"
      />
      <TagsNav className="w-full col-span-9 overflow-x-auto" tags={['ho', 'fuga', 'suga']} />
      <article className="col-span-6 md:col-span-9">
        <BlogList blogs={allPostsData}/>
      </article>
      <article className="relative col-span-3 md:col-span-9">
        <Profile />
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

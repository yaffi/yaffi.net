import Link from 'next/link'

import Head from '../../components/head';
import Layout, { siteTitle } from '../../components/layout';
import Profile from '../../components/profile';
import BlogItem from '../../components/blogItem';

import { getAllPostIds, getPostDate } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head 
        title="yaffilog"
        description="yaffi"
        image="/images/yaffi.jpg"
        url="yaffi.net"
      />
      <article className="col-span-6 md:col-span-9">
        <BlogItem blog={postData} />
      </article>
      <article className="relative col-span-3 md:col-span-9">
        <Profile />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostDate(params.id)
  return {
    props: {
      postData
    }
  }
}


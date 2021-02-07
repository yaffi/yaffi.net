import Link from 'next/link'

import Date from './date';

export interface blog{
  id: string
  title: string
  date: string
}

type Props = {
  blogs: blog[]
}

const BlogList = ({ blogs }: Props) => {
  return (
    <ul>
      {
        blogs.map((blog) => (
          <Link href={`/posts/${blog.id}`}>
            <a>
              <li key={blog.id} className="h-36 mb-4 bg-trueGray-700 rounded-lg shadow-xl">
                <section className="h-full w-full flex justify-start items-center p-6">
                  <div className="sm:w-1/3 mr-5">
                    <img className="h-24 w-24" src="/images/yaffi.jpg"/>
                  </div>
                  <div className="flex flex-col justify-start h-full w-full sm:w-2/3 text-gray-200">
                    <Date className="block mb-4 text-trueGray-400" dateString={blog.date} />
                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                  </div>
                </section>
              </li>
            </a>
          </Link>
        ))
      }
    </ul>
  )
}

export default BlogList;
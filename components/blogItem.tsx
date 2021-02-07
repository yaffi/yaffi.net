import Date from './date'

const BlogList = ({ blog }) => {
  return (
    <div className="bg-trueGray-700 p-4 rounded-lg">
      <div className="p-6 mb-6 bg-trueGray-300 rounded-lg">
        <img className="h-1/2 w-1/2 mx-auto" src="/images/yaffi.jpg"/>
      </div>
      <div className="p-6 rounded-lg">
        <Date className="block mb-4 text-trueGray-400" dateString={blog.date} />
        <h1 className="text-4xl font-black mb-10">
          {blog.title}
        </h1>
        <div className="w-full prose text-trueGray-300" dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
      </div>
    </div>
  )
}

export default BlogList;
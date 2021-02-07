type Props = {
  className: any
  tags: string[]
}

const TagsNav = ({ className, tags }: Props) => {
  return (
    <nav className={className}>
      <ul className="flex space-x-6">
        {
          tags.map((tag, i) => 
            <li key={i} className="flex flex-col items-center space-y-1">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-800 animate-gradient-x p-1 rounded-full">
              <div className="h-20 w-20 sm:h-16 sm:w-16 flex justify-center items-center bg-trueGray-700 p-1 rounded-full">
                <p className="text-gray-200">{tag}</p>
              </div>
              </div>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default TagsNav;
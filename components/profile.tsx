
const Profile = () => {
  return (
    <div className="sticky top-10 p-10 bg-trueGray-700 rounded-lg shadow-xl">
      <div className="flex">
        <div className="h-16 w-16 mr-3 rounded-full bg-white"></div>
        <div className="relative flex justify-center items-center"> 
          <p className="text-4xl text-fuchsia-800 absolute inset-x-2">Yaffi</p>
          <p className="text-4xl text-yellow-400 absolute inset-x-1">Yaffi</p>
        </div>
      </div>
      <p className="text-gray-200 mt-6">なんでもない人</p>
    </div>
  )
}

export default Profile;
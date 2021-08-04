export default function Card({ image, children }){

  return (
    <div className="flex-1 p-4 m-4 border-2 rounded-xl transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500">
      {image && <img className="w-full h-auto block mb-6" {...image} />}
      <p className="text-xl font-semibold ">
        {children}
      </p>
    </div>
  )
}

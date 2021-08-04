export default function Card({ children, image, title, description }){

  return (
    <div className="p-4 border-2 rounded-xl bg-white transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500">
      {image && <img className="w-full h-auto block mb-6" {...image} />}
      {title && (
        <h2 className="text-3xl mb-4 font-bold">
          {title}
        </h2>
      )}
      <p className="text-xl mb-4 font-semibold">
        {description}
      </p>
      {children}
    </div>
  )
}

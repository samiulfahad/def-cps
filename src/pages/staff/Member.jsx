const Member = ({ name, role, description, imageSrc }) => {
    return (
      <div className="flex flex-col flex-wrap mb-8 overflow-hidden rounded lg:flex-row dark:bg-gray-800">
        <div className="w-full overflow-hidden lg:w-2/4 h-80">
          <img className="object-cover w-full h-full transition-all hover:scale-110" src={imageSrc} alt={name} />
        </div>
        <div className="relative flex self-center flex-1 py-8 text-justify px-2 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
          <div>
            <h2 className="mb-2 text-xl font-bold dark:text-gray-300">{name}</h2>
            <p className="mb-4 text-sm text-blue-gray-500">{role}</p>
            <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  export default Member
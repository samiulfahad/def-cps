import React from "react"

export const Messages = () => {
  return (
    <section className="flex items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold dark:text-white">Message of Director</h1>
        </div>
        <div>
          <div className="relative px-4 py-12 mb-20 text-center bg-white rounded shadow md:px-20 md:py-20 dark:bg-gray-700">
            <div className="z-20 max-w-xl p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute w-20 h-20 top-4 left-4 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <p className="mb-4 text-base leading-7 text-gray-400">
                The door to knowledge about the creatures around us can be opened by education, which is the sole
                powerful tool that has the power to transform any society. A well-educated person cannot harm either the
                nation or society. Through their knowledge, commitment, and passion, they consistently demonstrate the
                right way to live. Education is the only asset that cannot be stolen, and those who possess it cannot
                lose that asset if they share it.
              </p>
              <h2 className="text-lg font-bold leading-9 text-black dark:text-white">John Doe</h2>
              <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                Senior Vice President
              </span>
              <div className="absolute inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white translate-x-1/2 bg-blue-500 rounded right-1/2 -bottom-20">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://i.postimg.cc/jqBdNPpg/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
                  alt=""
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

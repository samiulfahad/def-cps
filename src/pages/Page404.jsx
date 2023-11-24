import React from 'react';

const Page404 = () => {
  return (
    <section className="flex items-center h-screen bg-gray-50 font-poppins dark:bg-gray-900 -mt-28 text-center">
      <div className="justify-center flex-1 max-w-4xl px-4 py-4 mx-auto lg:py-10">
        <div className="relative p-6 text-blue-700 border border-blue-500 rounded-md dark:border-gray-700" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="w-6 h-6 mr-4 text-blue-500 dark:text-blue-400 only:bi bi-x-octagon" viewBox="0 0 16 16">
                <path
                  d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <div>
              <p className="mb-1 text-lg font-bold dark:text-gray-300">Webpage under construction</p>
              <p className="text-sm dark:text-gray-400">
                Hello, We are working on it
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Page404;

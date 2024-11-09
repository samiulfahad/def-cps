/** @format */

const Member = ({ name, role, education, experience, extra, address, contact, email, imageSrc }) => {
  return (
    <div className="flex flex-col flex-wrap mb-8 overflow-hidden rounded lg:flex-row dark:bg-gray-800">
      <div className="w-full overflow-hidden lg:w-2/4 h-80">
        <img className="object-cover w-full h-full transition-all hover:scale-110" src={imageSrc} alt={name} />
      </div>
      <div className="relative flex self-center flex-1 p-4 text-justify px-2 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
        <div className="p-4">
          <h2 className="text-xl font-bold dark:text-gray-300">{name}</h2>
          <p className="text-md font-bold text-blue-gray-500">{role}</p>
          <div className="text-sm text-justify text-blue-gray-500">
            {education && (
              <p>
                {" "}
                <span className="font-bold">Education: </span> {education}
              </p>
            )}
            {experience && (
              <p>
                {" "}
                <span className="font-bold">Experience: </span> {experience}
              </p>
            )}
            {extra && (
              <p>
                {" "}
                <span className="font-bold">Extra Qualification(/s) </span> {extra}
              </p>
            )}
            {address && (
              <p>
                {" "}
                <span className="font-bold">Address: </span> {address}
              </p>
            )}
            {contact && (
              <p>
                {" "}
                <span className="font-bold">Contact: </span> {contact}
              </p>
            )}
            {email && (
              <p>
                {" "}
                <span className="font-bold">Email: </span> {email}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;

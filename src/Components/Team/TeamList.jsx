import { useEffect, useState } from "react";
import teamService from "../../Service/teamService";
import { FcSettings } from "react-icons/fc";
import teamSimple from "../../Assets/Team/teamsimple.jpg";
function TeamList() {
  const [team, setTeam] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await teamService.getTeam();
      setTeam(result);
    })();
  }, []);
  return (
    <div className="mt-5 flex flex-wrap justify-between">
      {team?.map((item, i) => (
        <div key={i} className="h-96 w-80 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {
            item.ownerId === item.owner?.id ? <a href={`/team-edit/${item.id}`} className="relative">
              {
                item.owner !== null &&
                <FcSettings className="absolute right-2 top-2 text-4xl hover:scale-125 duration-150  text-white" />
              }
              <img
                className="rounded-t-lg w-96 h-48 object-cover"
                src={item.teamImage ? item.teamImage : teamSimple}
                alt=""
              />
            </a> : <div className="relative">
              {
                item.owner !== null &&
                <FcSettings className="absolute right-2 top-2 text-4xl hover:scale-125 duration-150  text-white" />
              }
              <img
                className="rounded-t-lg w-96 h-48 object-cover"
                src={item.teamImage ? item.teamImage : teamSimple}
                alt=""
              />
            </div>
          }

          <div className="p-5 h-2/4 flex flex-col justify-between">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <a
              href={`/teams-detail/${item.id}`}
              className="flex justify-between  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Takım detay
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamList;

import { Link } from "react-router-dom";

const SingleMeet = ({ MeetOurTeam }) => {
  const { name, image, description, designation } = MeetOurTeam;

  return (
    <div className="shadow-two hover:shadow-three dark:bg-dark dark:shadow-three hover:shadow-primary rounded-xs bg-white p-3 duration-300">
      <div className="relative h-[300px] w-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="border-body-color/10 text-body-color mt-8 border-t pt-8 text-base dark:border-white/10 dark:text-white">
        <h3 className="text-dark text-lg font-semibold lg:text-base xl:text-lg dark:text-white">
          {name}
        </h3>
        <p className="text-body-color my-3 text-md line-clamp-3">
          {description}
        </p>
        <p className="text-primary text-sm">{designation}</p>

        <div className="mt-5 flex items-center gap-x-3">
          <Link
            to="https://www.facebook.com/share/19VqFh56Ej/?mibextid=wwXIfr"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link
            to="https://www.instagram.com/nuvayratech?igsh=MTVsYnp2OG56bzZ0Yg%3D%3D&utm_source=qr"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                fill="currentColor"
              />
            </svg>
          </Link>
          {/* <a
            href="/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              className="fill-current"
            >
              <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SingleMeet;

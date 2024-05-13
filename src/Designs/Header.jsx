import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <nav>
      <div id="navBar" className="navbar bg-base-100 flex justify-around mt-4">
        <div>
          <div className="dropdown lg:hidden">
            <div className="btn btn-ghost btn-circle"></div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="text-red-color">Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a href="">Recipes</a>
              </li>
              <li>
                <a href="">Search</a>
              </li>
            </ul>
          </div>
          <h1 className="raleway text-2xl font-extrabold lg:text-4xl">
            Recipe Calories
          </h1>
        </div>
        <div className="hidden lg:block space-x-11">
          <a href="">Home</a>
          <a href="">Recipes</a>
          <a href="">About</a>
          <a href="">Search</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto rounded-full"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <CgProfile className="text-green-500 h-10 w-10"></CgProfile>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

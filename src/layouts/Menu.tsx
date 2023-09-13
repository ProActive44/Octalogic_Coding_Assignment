import { useState } from "react";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Logo from "../assets/Logo.png";
import HomeLogo from "../assets/Home_Logo.png";
import CoursesLogo from "../assets/Courses_logo.png";

const Menu = () => {
  const [home, setHome] = useState<boolean>(true);

  return (
    <div className="flex">
      <div className="w-20 bg-white border-r-2 border-stone-600">
        <div className="w-2/3 m-auto my-5 mb-10 cursor-pointer" onClick={() => setHome(true)}>
          <img src={Logo} />
        </div>
        <div className="w-11/12 m-auto my-5 cursor-pointer bg-pink-200 p-1 rounded-md" onClick={() => setHome(true)}>
          <img className="w-1/2 m-auto" src={HomeLogo} />
          Home
        </div>
        <div className="w-11/12 m-auto my-5 cursor-pointer bg-gray-200 p-1 rounded-md" onClick={() => setHome(false)}>
          <img className="w-1/2 m-auto" src={CoursesLogo} />
          Courses
        </div>
      </div>
      {home ? <Home /> : <Courses />}
    </div>
  );
};

export default Menu;

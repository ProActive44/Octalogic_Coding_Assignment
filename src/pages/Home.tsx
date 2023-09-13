import Enrolments from "@/components/Enrolments";
import Overview from "../components/Overview";
import Students from "@/components/Students";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEnrol } from "../Redux/action.js";
import { getStudents } from "../Redux/action.js";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnrol);
    dispatch(getStudents);
  }, []);
  return (
    <div>
      <Overview />
      <Enrolments />
      <Students />
    </div>
  );
};

export default Home;

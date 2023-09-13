import Enrolments from '@/components/Enrolments';
import Overview from '../components/Overview';
import Students from '@/components/Students';

const Home = () => {
    return (
        <div>
            <Overview/>
            <Enrolments/>
            <Students/>
        </div>
    );
};

export default Home;

import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-3xl my-32'>This is Home</h1>

            <div className='text-center'>
            <NavLink to='/registration' className='bg-slate-700 font-semibold text-white mx-auto px-6 py-4 rounded-xl hover:bg-slate-400 mb mr-6'>Registration</NavLink>
            <NavLink to='/login' className='bg-slate-700  font-semibold text-white mx-auto px-6 py-4 rounded-xl hover:bg-slate-400 '>Login</NavLink>
        
            </div>
            
            
        </div>
    );
};

export default Home;
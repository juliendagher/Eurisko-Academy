import DarkModeLogo from '../assets/moon.svg';

export const NavBar = () => {
    return (
        <div className='whitespace-nowrap flex items-center justify-between bg-[#3251D0] h-12 p-3 space-x-3'>
            <p className='text-[#FFFFFF] font-bold text-lg'>User Management</p>
            <div className='flex items-center space-x-3'>
                <button className='bg-[#FFFFFF] text-[#3251D0] px-4 py-2 rounded text-xs'>Create User</button>
                <button className='bg-[#ed3939] text-[#FFFFFF] px-4 py-2 rounded text-xs'>Logout</button>
                <button className='w-4 h-4'>
                    <img className='object-fit' src={DarkModeLogo} alt='Dark Mode' />
                </button>
            </div>
        </div>
    )
}

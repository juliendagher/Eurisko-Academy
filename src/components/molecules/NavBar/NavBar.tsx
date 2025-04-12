import DarkModeLogo from '../../../assets/moon.svg';
import { Button, ButtonVariant } from '../../atoms/Button';

export const NavBar = () => {
    return (
        <div className='whitespace-nowrap flex items-center justify-between bg-[#3251D0] h-12 p-3 space-x-3'>
            <p className='text-[#FFFFFF] font-bold text-lg'>User Management</p>
            <div className='flex items-center space-x-3'>
                <Button variant={ButtonVariant.OUTLINE_PRIMARY} className='text-xs'>Create User</Button>
                <Button variant={ButtonVariant.DANGER} className='text-xs'>Logout</Button>
                <button className='w-4 h-4'>
                    <img className='object-fit' src={DarkModeLogo} alt='Dark Mode' />
                </button>
            </div>
        </div>
    )
}

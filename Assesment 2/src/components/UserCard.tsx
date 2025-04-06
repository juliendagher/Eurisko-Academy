export const UserCard = ({name, email, status, birthday}: {
    name: string, 
    email: string, 
    status: boolean, 
    birthday: string 
}) => {
    return (
        <div className='p-3 space-y-5 bg-[#FFFFFF] rounded shadow-lg'>
            <div className='flex justify-center items-center'>
                <p className='flex justify-center items-center text-[#FFFFFF] font-bold text-xl bg-[#3251D0] rounded rounded-full h-15 w-15'>
                    {name.split(' ').map((word: string) => word[0]).join('').toUpperCase()}
                </p>
            </div>
            <div>
                <p className='text-lg font-bold'>{name}</p>
                <p className='text-xs text-[#595857]'>Email: {email}</p>
                <p className='text-xs text-[#595857]'>Status: {status ? "active" : "locked"}</p>
                <p className='text-xs text-[#595857]'>Date of birth: {birthday}</p>
            </div>
            <div className='flex justify-end space-x-3'>
                <button className='text-xs bg-[#3251D0] text-[#FFFFFF] rounded px-3 py-1'>Edit</button>
                <button className='text-xs bg-[#ed3939] text-[#FFFFFF] rounded px-3 py-1'>Delete</button>
            </div>
        </div>
    )
}
import { SearchBar } from "../../molecules/SearchBar/SearchBar"
import { UserCard } from "../../molecules/UserCard/UserCard"

export const Container = () => {
    const usersArray: {name: string, email: string, status: boolean, birthday: string}[] = [
        {name: "Ian G", email: "ian1@outlook.com", status: true, birthday: "1999-03-06"},
        {name: "Ian F", email: "ian@2outlook.com", status: false, birthday: "1999-03-06"},
        {name: "Ian H", email: "ian@o3utlook.com", status: true, birthday: "1999-03-06"},
        {name: "Ian U", email: "ian@ou4tlook.com", status: true, birthday: "1999-05-08"},
        {name: "Ian I", email: "ian@out5look.com", status: true, birthday: "1999-03-06"},
    ]
    return (
        <div className='p-6 space-y-5'>
            <SearchBar/>
            <div className='flex gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {usersArray.map(user => <UserCard {...user}/>)}
            </div>
        </div>
    )
}
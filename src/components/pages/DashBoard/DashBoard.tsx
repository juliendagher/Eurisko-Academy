import { NavBar } from "../../molecules/NavBar"
import { Container } from "../../organisms/Container"

const DashBoard = () => {
    return (
        <div className="dark:bg-[#0A2647] min-h-screen">
            <NavBar />
            <Container />
        </div>
    )
}

export {DashBoard};
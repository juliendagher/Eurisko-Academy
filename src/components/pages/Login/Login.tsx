import { LoginForm } from "../../organisms/LoginForm"

const Login = () => {
    return (
        <div className="flex justify-center items-center dark:bg-[#0A2647] h-screen">
            <LoginForm className="rounded-xl bg-white shadow-md w-sm gap-5 py-7"/>
        </div>
    )
}

export {Login}
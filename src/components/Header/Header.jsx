import { TiThMenu } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import { Input, InputRightAddon, InputGroup } from '@chakra-ui/react'

const Header = () => {
    return (
        <>
        <header className="flex justify-between items-center py-3 px-10 border-b-2 sticky top-0 z-40 bg-white">
            <div className="flex gap-4 items-center w-1/3">
                <div>
                    <TiThMenu className="size-8 text-black cursor-pointer"/>
                </div>
                <div className="flex gap-2 items-center">
                    <FaYoutube className="size-8"/>
                    <h2 className="text-2xl font-bold">Youtube <sup className="text-slate-500 font-medium">IN</sup></h2>
                </div>
            </div>
            <div className="flex gap-3 justify-center">
                <InputGroup size='sm'>
                    <Input placeholder='Search' className="border py-2 px-4 rounded"/>
                    <InputRightAddon className="border py-2 px-4 rounded bg-slate-200 cursor-pointer"><FaSearch /></InputRightAddon>
                </InputGroup>
                <div className="rounded-full p-3 bg-slate-200 cursor-pointer">
                <FaMicrophone />
                </div>
            </div>
            <div className="flex gap-5 w-1/3 justify-end">
                <AiOutlineVideoCameraAdd className="size-8 cursor-pointer"/>
                <IoMdNotifications className="size-8 cursor-pointer"/>
                <div className="rounded-full size-8 bg-slate-200 flex justify-center items-center">
                    {/* <img src={""} alt="" /> */}
                    <FaUserAlt className="size-4"/>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;
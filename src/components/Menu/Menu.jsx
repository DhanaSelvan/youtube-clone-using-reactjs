import { MdHome } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { LiaYoutubeSquare } from "react-icons/lia";

const Menubar = () => {
    return (
        <>
        <nav className="h-screen border-e-2 px-2 py-5 flex flex-col gap-5 sticky left-0 top-0">
            <div className="flex flex-col items-center justify-center hover:bg-slate-200 cursor-pointer px-3 rounded-md transition py-2">
                <MdHome className="size-8"/>
                <p>Home</p>
            </div>
            <div className="flex flex-col items-center justify-center hover:bg-slate-200 cursor-pointer px-3 rounded-md transition py-2">
                <SiYoutubeshorts className="size-8"/>
                <p>Shorts</p>
            </div>
            <div className="flex flex-col items-center justify-center hover:bg-slate-200 cursor-pointer px-3 rounded-md transition py-2">
                <MdPayments className="size-8"/>
                <p>Subcription</p>
            </div>
            <div className="flex flex-col items-center justify-center hover:bg-slate-200 cursor-pointer px-3 rounded-md transition py-2">
                <LiaYoutubeSquare className="size-8"/>
                <p>You</p>
            </div>
            <div className="flex flex-col items-center justify-center hover:bg-slate-200 cursor-pointer px-3 rounded-md transition py-2">
                <GoDownload className="size-8"/>
                <p>Download</p>
            </div>
        </nav>
        </>
    )
}

export default Menubar;
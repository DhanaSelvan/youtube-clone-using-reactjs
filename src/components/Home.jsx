import { Menu } from "@chakra-ui/react";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Menubar from "./Menu/Menu";

const Home = () => {
    return (
        <>
        <section>
            <Header />
            <div className="flex">
                <Menubar />
                <Content />
            </div>
        </section>
        </>
    )
}

export default Home;
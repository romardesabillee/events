import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex">
            <div className="font-sans p-4 bg-gray-200 z-10 flex-grow">
                <div className="w-[90%] m-auto flex justify-between items-center">
                    <div className="text-2xl font-medium">Logo</div>
                    <nav className="items-center gap-3 hidden md:flex">
                        <a>Home</a>
                        <a>About</a>
                        <a>Contact</a>
                    </nav>
                    <button onClick={() => setIsNavOpen(!isNavOpen)} 
                            className="md:hidden inline">
                        <FaHamburger
                            size={30}
                            className="text-indigo-500"
                        />
                    </button>
                </div>
            </div>

            <div className={`md:hidden fixed bottom-0 left-0 h-screen w-screen bg-gray-300 
                        ${isNavOpen ? '': 'hidden'}`}>
                <div className="h-full w-full flex items-center justify-center font-bold text-5xl">
                    <div className="flex flex-col w-full -mt-40 text-center">
                        <a>Home</a>
                        <a>About</a>
                        <a>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
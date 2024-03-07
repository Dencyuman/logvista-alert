import {useState} from 'react';
import logo from './assets/images/logo-with-name.png';
import {Greet} from "../wailsjs/go/main/App";
import {Link, Outlet} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {toast} from "sonner";

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
                <img src={logo} alt="logo" className="h-1/2"/>
                <div>{resultText}</div>
                <div className="flex items-center gap-2">
                    <Input onChange={updateName} autoComplete="off" name="input" type="text"/>
                    <Button variant="default" onClick={greet}>Greet</Button>
                </div>
                <Link to="/sample">
                    <Button variant="default" onClick={() => {
                        toast("Hello, world!");
                    }}>AnotherGreet</Button>
                </Link>
            </div>
        </div>
    )
}

export default App

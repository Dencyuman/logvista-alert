import React from 'react'
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";

const SamplePage: React.FC = () => {
    return (
        <div>
            <h1>Sample Page</h1>
            <p>This is a sample page.</p>
            <Link to="/">
                <Button variant="default" onClick={() => {
                    toast("Hello, world!");
                }}>BackToHome</Button>
            </Link>
        </div>
    )
}

export default SamplePage

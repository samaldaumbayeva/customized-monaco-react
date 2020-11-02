import Editor from "./MonacaEditor";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    const [state, setState] = useState('');

    const compile = () => {
        let code = state;
        console.log("Code: ", code);
    }

    return(
            <div className = "App" >
                <Editor value={state} onChange={setState} />
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Online Judge</a>
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> My Profile</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">My assignments</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>
                    
                </nav>
                <div className="nav-scroller py-2 mb-3">
                    <nav className="nav d-flex justify-content-center">
                        <a className="p-2 text-muted" href="#">Task 1</a>
                        <a className="p-2 text-muted" href="#">Task 2</a>
                        <a className="p-2 text-muted" href="#">Task 3</a>
                    
                    </nav>
                </div>

                <main role="main" className="col-md-9 ml-sm-left col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <h1 className="task">Task 1</h1>
                    </div>
                    <div className="description" style={{ position: "fixed", left :"0.7cm", right: "25cm", top: "5cm" }}>
                        <h6 style={{ color: "#808080" }}>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.</h6>
                    </div>

                </main>
                
                 <button id="submit" style={{ position: "fixed", right: "50px", top: "20.5cm" }} onClick={compile}>Submit</button>
                 <div className="output">
                     <div className="container">
                        <div id="table-table" className="row">
                        </div>
                    </div>
                </div>
            </div >
        );
    
}

export default App;

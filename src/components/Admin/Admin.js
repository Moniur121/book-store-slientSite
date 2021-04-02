import React from 'react';
import { useForm } from "react-hook-form";
import './Admin.css';
import { Link, useHistory } from 'react-router-dom';
 

const Admin = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg    ">
                <div class="container-fluid">
                    <div >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/manageBooks" class="nav-link active text-dark">Manage Books</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/addBooks" class="nav-link active text-dark">Add Books</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/editBooks" class="nav-link active text-dark">Edit Books</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
         
    );
};

export default Admin;
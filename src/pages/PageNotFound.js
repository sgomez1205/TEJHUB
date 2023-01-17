
import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'
import 'animate.css';

class NotFoundPage extends React.Component{
    render(){
        return <div className="Error" align='center'>
            <img src="https://stories.freepiklabs.com/storage/42124/oops-404-error-with-a-broken-robot-cuate-6558.png"></img>
            <h1 className="animate__animated animate__pulse">!!Error 404!!</h1>
            <br></br><br></br>
            <h2 className="animate__animated animate__pulse" >Page not found</h2>
            <br></br><br></br>

            <Link  to="/">Go to Home</Link>
          </div>;
    }
}
export default NotFoundPage;
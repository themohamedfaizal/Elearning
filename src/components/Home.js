import React from 'react';

function Home(props) {
    return (
<div>
<div className="container">
<link href="../../css/editor.css" rel="stylesheet"/>
<link href="narrow-jumbotron.css" rel="stylesheet"/>
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">Mars E-Learning</h3>
      </div>

      <div className="jumbotron">
        
        <p className="lead">Employers find candidates who are interested in upskilling /reskilling are self-motivated and result oriented. Increase your chance of getting hired and learn at your own phase.</p><h5 className="display-3" contenteditable="true" spellcheckker="false">Start your journey</h5>
        <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
      </div>

      

      <footer className="footer">
        <p>© Mars Returnship 2022</p>
      </footer>

    </div> 
    </div>
    );
}

export default Home;


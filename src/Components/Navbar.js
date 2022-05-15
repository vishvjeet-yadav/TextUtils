import React from 'react'

export default function Navbar()
{
  const navColor=['#301934','#592126','#17171f','#083b28','#292929','#691234','#08083b'];
  const bodyColor=['#4a3f50','#6b5d5e','#383838','#4e7d79','#565c58','#87596c','#404060'];
  let counter=0,fcnt=0;
  const fonts=["Fantasy,Papyrus","Monospace, Courier New","Cursive,	Brush Script MT","Monospace, Lucida Console","Times New Roman, Times, serif","Arial, Helvetica, sans-serif"];

  function changeTheme()
  {
    counter++;
    if(counter>=navColor.length) counter=0;
    document.getElementById("Navbar").style.backgroundColor=navColor[counter];
    document.body.style.backgroundColor=bodyColor[counter];
    console.log("Changing Theme");
  }
  function changeFont()
  {
    if(fcnt>=fonts.length) fcnt=0;
    document.body.style.fontFamily=fonts[fcnt];
    console.log("Current FOnt : "+fonts[fcnt]);
    fcnt++;

  }
    return(
        <nav id ="Navbar" className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:'#301934'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Style It!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tools
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Sign Up</a>
              </li>
            </ul>
            
            <button className='btn btn-primary m-2' onClick={changeTheme}>Theme</button>
            <button className='btn btn-primary m-2 pe-3' onClick={changeFont}>Font</button>
            
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
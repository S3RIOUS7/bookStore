import { Fragment } from "react"
import Input from "../input/Input"
import PopUpMenu from "../popUpMenu/PopUpMenu"
import './Header.scss'


function Header(){
  const options1 = ['all', 'art','biography' , 'computers', 'history','medical' , 'poetry'];
  const options2 = ['relevance', 'newest'];


  return(
    <Fragment>
      <div className="header">
        <div className="headerContainer">
          <h2>Search for the books</h2>
          <Input />
          <div className="popDiscription">
            <h3>Categories</h3> <p><PopUpMenu options={options1}/></p>
            <h3>Sorting by</h3> <p><PopUpMenu options={options2}/></p>
          
          
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
import { Fragment } from "react"
import Input from "../input/Input"
import PopUpMenu from "../popUpMenu/PopUpMenu"
import './Header.scss'
import { options1, options2 } from '../../utils/constants/constants.js'


function Header(){
  

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
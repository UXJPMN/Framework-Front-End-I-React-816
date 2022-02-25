import { Component } from 'react'
import './style.css'

// function Header() {
//   const addNews = (text) => `${text} de Notícias`
//   const headerClass = 'header-title'

//   return(
//     <div className='header'>
//       <h1 className={ headerClass }>{ addNews('Portal') }</h1>
//     </div>
//   )
// }

class Header extends Component {
  render() {
    const addNews = (text) => `${text} de Notícias`
    const headerClass = 'header-title'
    return (
      <div className="header">
        <h1 className={headerClass}>{ addNews('Portal') }</h1>
      </div>
    )
  }
}

export default Header

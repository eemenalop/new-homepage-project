import { NavBar } from './NavBar'

import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
      <header className="bg-red-500">
          <img src={logo} alt="Logo" />
        <NavBar />
    </header>
  )
}
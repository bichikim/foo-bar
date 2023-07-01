import {Button} from 'components/Button'
import {NavLink} from '@solidjs/router'

export const MainPage = () => {
  return (
    <div>
      hello
      <NavLink href="sign">
        <Button>Sign In / Sign Up</Button>
      </NavLink>
    </div>
  )
}

export default MainPage

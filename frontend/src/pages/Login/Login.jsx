import { Link } from 'react-router-dom'
import { Main } from '../../components/Main'
import { LoginForm } from './UI/LoginForm'

function Login() {
  return (
    <div id="login" className="relative pt-10">
      <Link to="/" className="login-back-btn">
        X
      </Link>

      <Main>
        <LoginForm />
      </Main>
    </div>
  )
}

export default Login

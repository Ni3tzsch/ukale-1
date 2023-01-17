import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { Main } from '../../components/Main'
import { LoginForm } from './UI/LoginForm'

function Login() {
  return (
    <div id="login" className="relative pt-10 pb-10">
      <Link to="/" className="login-back-btn group">
        <IoClose className="text-gray-500 group-hover:text-white" />
      </Link>
      <Main>
        <LoginForm />
      </Main>
    </div>
  )
}

export default Login

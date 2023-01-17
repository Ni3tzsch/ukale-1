import { useNavigate } from 'react-router-dom'
import ukaleBrain from '/ukale-brain.svg'

function LoginForm() {
  const navigate = useNavigate()

  const submitHandler = () => {
    return navigate('/dashboard/parkings')
  }

  return (
    <div className="light-shadow mx-auto w-fit rounded-xl bg-white px-4 pt-10 pb-14">
      <div className="w-full">
        <div className="mx-auto aspect-video w-64">
          <img
            src={ukaleBrain}
            className="mx-auto w-[80%]"
            alt="Cerveau Ukalè"
          />
        </div>

        <h2 className="mx-auto mt-6 w-fit self-start text-2xl">
          Connectez-vous
        </h2>
      </div>

      <form
        className="mt-6 flex flex-col items-center gap-6"
        onSubmit={submitHandler}
      >
        <label htmlFor="email" className="flex flex-col gap-1">
          <span>Email</span>
          <input
            type="email"
            id="email"
            className="rounded-md border border-gray-200 py-1.5 px-2"
            placeholder="Ex: kouadiojean@mail.com"
            required
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <span>Mot de passe</span>
          <input
            type="password"
            id="password"
            className="rounded-md border border-gray-200 py-1 px-2"
            placeholder="Votre mot de passe"
            required
          />
        </label>

        <button className="login-submit mt-2">Connexion</button>
      </form>
    </div>
  )
}

export { LoginForm }

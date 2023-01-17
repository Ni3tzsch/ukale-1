import { useState } from 'react'
import { Upload } from './Upload'
import fd from '../../../data/addFormData.json'
import { toast } from 'react-hot-toast'

function AddParking() {
  const [leftData] = useState(fd.left)
  const [rightData] = useState(fd.right)
  const className =
    'rounded-md border border-gray-200 bg-transparent py-1.5 px-2'

  const submitHandler = (e) => {
    e.preventDefault()
    return toast.success(
      'Informations envoyées. Patientez quelques jours pour la confirmation',
      { duration: 5000, position: 'bottom-right' }
    )
  }

  return (
    <div className="w-full pb-10">
      <h2 className="page-title">Ajouter un nouveau parking</h2>

      <div className="flex gap-10">
        <form
          className="flex w-full flex-col gap-4 rounded-xl bg-white px-8 py-6"
          onSubmit={submitHandler}
        >
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-5">
              {leftData.map((data) => {
                return (
                  <label
                    key={data.id}
                    htmlFor={data.htmlId}
                    className="flex flex-col gap-1"
                  >
                    <span>{data.name}</span>
                    <input
                      type={data.input.type}
                      className={className}
                      id={data.id}
                    />
                  </label>
                )
              })}
            </div>
            <div className="flex flex-col gap-5">
              {rightData.map((data) => {
                return (
                  <label
                    key={data.id}
                    htmlFor={data.htmlId}
                    className="flex flex-col gap-1"
                  >
                    <span>{data.name}</span>
                    <input
                      type={data.input.type}
                      className={className}
                      id={data.id}
                    />
                  </label>
                )
              })}
            </div>
          </div>
          <label
            htmlFor="description"
            className="flex w-full grow flex-col gap-1"
          >
            <span>Description du parking</span>
            <textarea
              className={`${className} min-h-[10rem]`}
              id="description"
            />
          </label>

          <button type="submit" className="nav-login-btn mt-2">
            Valider
          </button>
        </form>

        <div className="w-full">
          <p className="mb-4">Ajouter une photo du parking</p>
          <Upload />
        </div>
      </div>
    </div>
  )
}

export default AddParking

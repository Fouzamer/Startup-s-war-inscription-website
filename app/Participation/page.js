'use client'
import { useFormik } from 'formik'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useState } from 'react'

export default function Participation(){
  const [showMomo, setShowMomo] = useState(false)
  //Formik logics

  const formik = useFormik({
    initialValues: {
      projectName: '',
      member1: '',
      number1: '',
      member2: '',
      number2: '',
      member3: '',
      number3: '',
      member4: '',
      number4: '',
      member5: '',
      number5: '',
      description: '',
      display: false,
      votes: 0,
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.post('../api/post', values);
        toast.success(`${formik.values.projectName } a été créer avec succès"`)
        setShowMomo(true)
      } catch (error) {
        console.error(error);
        toast.error("Il y a eu un petit soucis dans la creation de votre startup")
      }
      setSubmitting(false);
    },
  });
  
  function Momo() {
    return(
      <div className="bg-gradient-to-br from-indigo-950 to-transparent rounded p-12 m-6  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Cher PDG de {formik.values.projectName}</h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-white">Nous vous remercions chaleureusement rour votre participation à la Startup's War</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-white"> Votre engagement est très apprécié.</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-white">Veuillez régler les frais de participation sur le Numero Mobile Money ci-dessous</p>
        <p className="mb-3 text-lg font-bold text-gray-500 dark:text-white">+229 97 16 50 37</p>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">🎉Merci de participé à la Startup's War !🎉</h5>
      </div>
    )
  }

    return( 
      <div>
            {!showMomo ? (
              <div className="bg-gradient-to-br from-indigo-950 to-transparent rounded p-12 m-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center">
              <h3 className="text-4xl font-bold m-4">Règles d’inscriptions</h3>
              <ul className="w-full m-6">
                  <li>Être régulièrement inscrit à ESGIS</li>
                  <li>Avoir une idée de projet de création d'entreprise</li>
                  <li>Présentation convaincante</li>
              </ul>
              <h1 className='text-5xl font-bold mt-5 bg-gradient-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text'>5000 FC</h1>
              <p className="text-2xl mb-6">Frais de participation</p>
              <div className="border-2 rounded p-6 w-full flex flex-col items-center">
                  <p className="text-2xl mb-4">Participer</p>
                  <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center w-full">
                      <label htmlFor="projectName" id="ProjectName"  >Nom de la Startup</label>
                      <input type="text" name="projectName" required value={formik.values.projectName} onChange={formik.handleChange} placeholder=" Nom du Project" className="rounded bg-transparent border-2 p-1 my-1"/>
                      <label htmlFor="names">Membre(s) de l'équipe</label>
                      <div className="flex flex-wrap justify-between max-[500px]:flex-col">
                          <div className='flex flex-col w-3/12 max-sm:w-full my-1'>
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="member-1" name="member1" required value={formik.values.member1} onChange={formik.handleChange} placeholder=" Membre 1" type="text" />
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="number-1" name="number1" required value={formik.values.number1} onChange={formik.handleChange} placeholder={`numéro de ${formik.values.member1}`} type='number' />
                          </div>
                          <div className='flex flex-col w-3/12 max-sm:w-full my-1'>
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="member-2" name="member2" required value={formik.values.member2} onChange={formik.handleChange} placeholder=" Membre 2" type="text" />
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="number-2" name="number2" required value={formik.values.number2} onChange={formik.handleChange} placeholder={`numéro de ${formik.values.member2}`} type='number' />
                          </div>
                          <div className='flex flex-col w-3/12 max-sm:w-full my-1'>
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="member-3" name="member3" value={formik.values.member3} onChange={formik.handleChange} placeholder=" Membre 3" type="text" />
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="number-3" name="number3" value={formik.values.number3} onChange={formik.handleChange} placeholder={`numéro de ${formik.values.member3}`} type='number' />
                          </div>
                          <div className='flex flex-col w-3/12 max-sm:w-full my-1'>
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="member-4" name="member4" value={formik.values.member4} onChange={formik.handleChange} placeholder=" Membre 4" type="text" />
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="number-4" name="number4" value={formik.values.number4} onChange={formik.handleChange} placeholder={`numéro de ${formik.values.member4}`} type='number' />
                          </div>
                          <div className='flex flex-col w-3/12 max-sm:w-full my-1'>
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="member-5" name="member5" value={formik.values.member5} onChange={formik.handleChange} placeholder="  Membre 5" type="text" />
                          <input className="rounded bg-transparent border-2 p-1 my-1 w-full" id="number-5" name="number5" value={formik.values.number5} onChange={formik.handleChange} placeholder={`numéro de ${formik.values.member5}`} type='number' />
                          </div>
                      </div>
                      <label htmlFor="description">Description</label>
                      <textarea type="textarea" placeholder=" Veuillez entrer une brève description de votre startup" name='description' value={formik.values.description} onChange={formik.handleChange} className="rounded bg-transparent border-2  p-1 my-1"/>
                      <button type='submit' onSubmit className="border-solid border-2 border-slate-0 rounded w-min place-self-center p-1 mt-6 hover:bg-white hover:text-black">Soumettre</button>
                  </form>
              </div>
          </div>
            ) : (
              <Momo />
            )}
          </div>
  );
}



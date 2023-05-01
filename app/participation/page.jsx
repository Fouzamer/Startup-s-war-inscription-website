export default function Participation(){
    return (
        <div className="bg-gradient-to-br from-indigo-950 to-transparent rounded p-12 m-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center">
            <h3 className="text-4xl font-bold m-4">Règles d’inscriptions</h3>
            <ul >
                <li>Être régulièrement inscrit à ESGIS</li>
                <li>Avoir une idée de projet de création d'entreprise</li>
                <li>Présentation convaincante</li>
            </ul>
            <h1 className='text-5xl font-bold mt-5 bg-gradient-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text'>3 500 FC</h1>
            <p className="text-2xl mb-6">Frais de participation</p>
            <div className="border-2 rounded p-6 w-full flex flex-col items-center">
                <p className="text-2xl mb-4">Participer</p>
                <form action="submit" className="flex flex-col justify-center w-full">
                    <label htmlFor="name">Nom du Project</label>
                    <input type="text" />
                    <label htmlFor="names">Membre de l'équipe</label>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <label htmlFor="description">Description</label>
                    <input type="textarea" />
                    <div id='cover-image'>
                        <p>
                            Converture du projets
                            [Facultative]
                        </p>
                    </div>
                    <button>Soumettre</button>
                </form>
                
            </div>
        </div>
    )
}
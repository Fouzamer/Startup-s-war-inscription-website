export default function Startup(props) {
    return(
        <div>
            <div>
                <img src={props.cover} alt="" />
                <h2 id="Nom">{props.name}</h2>
                <p id="description">{props.desc}</p>
                <button onClick={vote}>vote</button>
            </div>
        </div>
    )
}
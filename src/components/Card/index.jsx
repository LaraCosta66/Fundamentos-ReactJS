import './style.css'


//renderização

export function Card(props){
    return(
        <div className='card'>
            <strong> {props.name}</strong>

            <small>
                {props.time}
            </small>


        </div>
    )
}
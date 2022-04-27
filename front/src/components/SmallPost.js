export default function SmallPost(props) {
    return (
        <div className={props.data.class}>
            <p class="text-md font-semibold">{props.data.title}</p>
            <p class="text-sm">{props.data.title_description} {props.data.date}</p>
            <img src={props.data.image} alt={props.data.alt} class="h-5/6 w-full rounded-lg"></img>
            <p class="text-sm">{props.data.description}</p>
            <p class="text-sm">{props.data.description2}</p>
        </div>
    )
   
}
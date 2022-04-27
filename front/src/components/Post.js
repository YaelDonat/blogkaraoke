export default function Post(props) {
    return (
        <div className=" card bg-white rounded-lg p-15 my-32">
            <p className="text-3xl font-semibold">{props.data.title}</p>
            <p className="text-md">{props.data.title_description} {props.data.date}</p>
            <img src={props.data.image} alt={props.data.alt} class="h-5/6 w-full rounded-lg"></img>
            <p class="text-lg font-semibold">{props.data.description}</p>
            <p class="text-md">{props.data.description2}</p>
        </div>
    )
}
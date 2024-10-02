export default function Card({imageLink, image, altDescription}) {
    return (
        <a href={imageLink} className="hover:cursor-pointer hover:brightness-50 duration-300" target="_blank">
            <img src={image} alt={altDescription} />
        </a>
    )
}
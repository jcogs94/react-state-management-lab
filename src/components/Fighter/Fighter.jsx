const Fighter = ({ name, img, price, strength, agility }) => {
    return <>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <ul>
            <li>Price: {price}</li>
            <li>Strength: {strength}</li>
            <li>Agility: {agility}</li>
        </ul>
    </>
}

export default Fighter

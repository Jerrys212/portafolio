const FlipCard = ({ empleo, descripcion, imagen }) => {
    return (
        <div className="flipcard">
            <div className="flipcard__inner">
                <div className="flipcard__front">
                    <img src={imagen} alt={`${empleo}`} />
                </div>
                <div className="flipcard__back">
                    <h2> {empleo} </h2>
                    <p> {descripcion} </p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;

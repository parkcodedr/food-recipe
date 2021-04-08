const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <section className="col-md-4 col-sm-12 mt-5">
            <div className="card " style={{ width: "18rem", }}>
                <img src={image} className="card-img-top" alt="..." height="180px" />
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "14px" }}>{title} </h5>
                    <p className="card-text" style={{ fontSize: "12px" }}><b>Calories:</b> {calories}</p>
                    <p style={{ fontSize: "12px" }}><b>Ingredients:</b> {ingredients.map(ingredient => (
                        <span>{(ingredient.text).substring(0, 5)},</span>
                    ))}</p>
                </div>

            </div>
        </section>
    );
}

export default Recipe;
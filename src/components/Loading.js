import Skeleton from 'react-loading-skeleton'
const Loading = () => {
    return (
        <section className="col-md-4 col-sm-12 mt-5">
            <div className="card " style={{ width: "18rem", }}>

                <div className="card-img-top">
                    <Skeleton height={36} width={`80%`} />
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "14px" }}><Skeleton height={36} width={`100%`} /> </h5>
                    <p className="card-text" style={{ fontSize: "12px" }}><Skeleton height={36} width={`100%`} /></p>
                    <p style={{ fontSize: "12px" }}>
                        <Skeleton height={36} width={`100%`} />
                        <Skeleton height={36} width={`100%`} />
                        <Skeleton height={36} width={`100%`} />
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Loading;
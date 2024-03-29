<div className="row  row-cols-1   ">
  {category.map((ProductsData, index) => {
    return (
      <div className="col-3">
        <div className="card mb-3">
          <img src="..." className="img-fluid rounded-start" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;    // using Props
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgUrl?"https://variety.com/wp-content/uploads/2022/08/India-Cricket.jpg?w=1000&h=563&crop=1": imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

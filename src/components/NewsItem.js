import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <span className="badge bg-info text-dark">{source}</span>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blanck" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

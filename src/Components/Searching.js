import React, { Component } from "react";

export default class Searching extends Component {
  render() {
    let {title, description, newsUrl, Date} = this.props
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">{Date}</div>
        </div>
      </div>
    );
  }
}

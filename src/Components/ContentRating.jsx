import React, { Component } from "react";
import "./ContentRating.css";

export class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      clickLikeHandler: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
      clickDislikeHandler: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }

  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className="content-rating">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            magnam quisquam debitis sit nam corrupti doloribus fuga suscipit
            architecto animi laborum ipsa vitae tempora blanditiis, voluptas quo
            dignissimos sunt necessitatibus?
          </p>
          <div className="rating-buttons">
            <button
              className="like-button"
              onClick={this.state.clickLikeHandler}
            >
              Like: {this.state.likes}
            </button>
            <button
              className="dislike-button"
              onClick={this.state.clickDislikeHandler}
            >
              Dislike: {this.state.dislikes}
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}

export default ContentRating;

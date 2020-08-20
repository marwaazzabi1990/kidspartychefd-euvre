import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

class StartRating extends Component {
  state = {
    rating: null,
    hover: null,
  };
  render() {
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={(e) => this.setState({ rating: e.target.value })}
              />{" "}
              <FaStar
                className="star"
                color={
                  ratingValue <= (this.state.hover || this.state.rating)
                    ? "#ffc107"
                    : "#e4e5e9"
                }
                size={20}
                onMouseEnter={(e) => this.setState({ hover: ratingValue })}
                onMouseLeave={(e) => this.setState({ hover: null })}
              />
            </label>
          );
        })}
        <p>the rating is {this.state.rating}.</p>
      </div>
    );
  }
}
export default StartRating;

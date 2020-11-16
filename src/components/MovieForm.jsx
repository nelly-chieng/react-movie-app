import React from 'react';
import axios from 'axios';
import './MovieForm.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Your favorite movie ${res.title} has been successfully added!`);
      })
      .catch((e) => {
        console.error(e);
        alert('There was an error when adding the movie.');
      });
  };

  render() {
    return (
      <div className="MovieForm">
        <h1>New movie</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>

              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <textarea
                name="comment"
                id="comment"
                onChange={this.onChange}
                value={this.state.comment}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MovieForm;

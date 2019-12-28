import React, { Component } from "react";
import "./Articles.css";
// import { async } from "q";

// const API_KEY = process.env.REACT_APP_API_KEY

const API_KEY = "45829221655b4ae8a3f912d8b16b331a";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&sources=techcrunch,the-verge,engadget&apiKey=${API_KEY}`;

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      articles: null
    };
  }
  componentDidMount() {
    console.log(API_URL);
    this.fetchAPI();
  }

  fetchAPI = async () => {
    let response = await fetch(API_URL);
    let data = await response.json();
    if (response.ok) {
      try {
        this.setState({
          status: response.status,
          articles: data.articles
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(response.status);
      console.log("Something went wrong");
    }
  };
  render() {
    console.log(this.state);

    return (
      <div className="article-page">
        <div className="row flex-center">
          <div
            className="card sm-12 md-7 col"
            style={{ width: "40rem", margin: "3em auto" }}
          >
            <div className="card-header">What's New</div>
            <img src="https://picsum.photos/500" alt="Card example image" />

            <div className="card-body">
              <h4 className="card-title">My awesome Paper card!</h4>
              <h5 className="card-subtitle">Nice looking subtitle.</h5>
              <p className="card-text">
                Notice that the card width in this example have been set to
                20rem, otherwise it will try to fill the current container/row
                where the card is.
              </p>
              <wired-card elevation="4">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus qui mollitia voluptatibus aut aspernatur quidem
                  repudiandae, voluptate sint itaque explicabo?
                </p>
              </wired-card>
              <hr />
              <button>Visit the site</button>
            </div>
          </div>
          <div
            className="card sm-12 md-4 col"
            style={{
              margin: "1em auto"
            }}
          >
            {this.state.articles &&
              this.state.articles.map((article, key) => (
                <wired-card key={key} class="API-news" elevation="3">
                  <div className="card-body article-body">
                    <p className="card-title article-title">{article.title}</p>
                    <h5 className="card-subtitle">
                      {article.author} / {article.source.name}
                    </h5>

                    <p className="card-text">{article.description}</p>
                    <a className="card-link" href={article.url} target="_blank">
                      Read More...
                    </a>
                  </div>
                </wired-card>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;

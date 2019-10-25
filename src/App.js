import React from 'react';
import { Component } from 'react';
import axios from "axios";
import Movie from "./Movie"
import "./App.css";


class App extends Component {
  state = { 
    isLoading: true,
    movies: []
  }
  getMovies = async () => { // async await는 동기함수를 비동기처리하기 위한 es8 문법
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // fetch = Axios(lib) 이둘은 API 로 부터 데이터를 받아올 때 사용한다
    console.log(movies);
    // console.log(movies.data.data.movies); 
    // data가 필요하기때문에 더 직관적으로 필요한 객체집합을 얻을수 있음
    this.setState({ movies, isLoading : false });
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading : false });
    // }, 3000);
    this.getMovies();
  }
  render() { 
    // const { isLoading, movies } = this.state;
    const isLoading = this.state.isLoading;
    const movies = this.state.movies;
    console.log({ isLoading });
    console.log({ movies });
    
    return (
      <section className="container">
        {isLoading ? (
           <div className="loader">
            <span className="loader__text">Loading...</span>
        </div>
        ) : (
          <div className="movies">
            {movies.map(item => (
              <Movie
                key={item.id}
                id={item.id}
                year={item.year}
                title={item.title}
                summary={item.summary}
                poster={"https://placehold.it/230x320"}
                genres={item.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}
 
export default App;


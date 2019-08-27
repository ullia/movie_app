import React from 'react';
import { Component } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

class App extends Component {
  state = { 
    isLoading: true
  }
  getMovies = async () => { // async await는 동기함수를 비동기처리하기 위한 es8 문법
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // fetch = Axios(lib) 이둘은 API 로 부터 데이터를 받아올 때 사용한다
    console.log(movies);
    console.log(movies.data.data.movies); // data가 필요하기때문에 더 직관적으로 필요한 객체집합을 얻을수 있음
    this.setState({ movies: movies, isLoading : false });
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading : false });
    // }, 3000);
    this.getMovies();
  }
  render() { 
    const { isLoading } = this.state;
    console.log({ isLoading });
    
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}
 
export default App;


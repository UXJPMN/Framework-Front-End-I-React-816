import { Component } from 'react'
import Movie from './movie'
import './style.css'

const baseURL = 'https://ghibliapi.herokuapp.com'

export default class Cdm extends Component {
  constructor() {
    super()
    this.state = {
      moviesList: [],
      showingMovies: [],
      directors: [],
      isLoading: true,
      currentDirector: ''
    }
    this.getDirectors = this.getDirectors.bind(this)
    this.selectDirector = this.selectDirector.bind(this)
  }

  getDirectors(movies) {
    const directors = []

    movies.forEach((movie) => {
      const sameDirector = directors.some((director) => director === movie.director)

      if (!sameDirector) {
        directors.push(movie.director)
      }
    })

    return directors
  }

  componentDidMount() {
    const localMovies = JSON.parse(localStorage.getItem('movies'))
    if (localMovies?.length > 0) {
      console.log('localMovies', localMovies)
      this.setState({
        showingMovies: localMovies,
        currentDirector: localStorage.getItem('currentDirector'),
        isLoading: false
      })
    }

    fetch(`${baseURL}/films`)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        moviesList: response,
        isLoading: false,
        directors: this.getDirectors(response)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidUpdate() {
    if (this.state.showingMovies?.length <= 0) {
      this.setState({
        showingMovies: this.state.moviesList
      })
    }
    localStorage.setItem('movies', JSON.stringify(this.state.showingMovies))
    localStorage.setItem('currentDirector', this.state.currentDirector)
  }

  selectDirector($event) {
    if ($event.target.value !== 'all') {
      const showingMovies = this.state.moviesList.filter((movie) =>
        movie.director === $event.target.value
      )
      this.setState({
        showingMovies,
        currentDirector: $event.target.value
      })
    } else {
      this.setState({
        showingMovies: this.state.moviesList,
        currentDirector: $event.target.value
      })
    }
  }

  render() {
    const { showingMovies, isLoading, directors } = this.state
    return(
      <>
        <h2>Director: { this.state.currentDirector }</h2>
        <fieldset className="form-group">
          <label className="custom-label" htmlFor="selectDirector">
            Select a director
          </label>
          <select
            id="selectDirector"
            name="selectDirector"
            value={ this.state.currentDirector }
            onChange={ this.selectDirector }
          >
            <option value="all">Todos os diretores</option>
            { directors?.map((director, index) => 
              <option key={index} value={ director }>
                { director }
              </option>
            )}
          </select>
        </fieldset>
        <div className='movies-list'>
          { isLoading
            ? <h2>Carregando</h2>
            : showingMovies?.map((movie) => 
                <Movie
                  key={ movie.id }
                  img={ movie.image }
                  title={ movie.title }
                  originalTitle={ movie.original_title }
                  description = { movie.description }
                  director={ movie.director }
                />
            )
          }
        </div>
      </>
    )
  }
}

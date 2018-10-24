import React, { Component } from "react"
import styles from "./search.module.css"
import Game from "../requests/game"
import GameList from "./gamelist";

class Search extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true,
      searchTerm: '',
      games: [],
      gameImage: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // console.log(this.state.searchTerm);
    Game
      .all('')
      .then(games => {
        this.setState({ loading: false, games: games })
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  handleChange(term) {
    this.setState({ searchTerm: term.target.value })
    
    Game
      .all(this.state.searchTerm)
      .then(games => {
        this.setState({ loading: false, games: games })
        // console.log(games);
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  render() {
    const { loading, games, gameImage } = this.state 

    if (loading) {
      return (
        <main>
          <h2>Loading...</h2>
        </main>
      )
    }
    // console.log(games);

    return(
      <div className={styles.main_layout}>
        <div className={styles.search_area}>
          <div className={styles.instructions}>
            <p>Search for your favorite games in the search box below. Click on their name
              to find out more information about them.
            </p>
          </div>
          <div className={styles.search_box}>
            <h5>Search:</h5>
            <input className={styles.search_field} onChange={this.handleChange} type="text" name="search" />
          </div>
          <div className={styles.search_results}>
            <h5>Games:</h5>
            <GameList games={games}/>
          </div>
        </div>
        <div className={styles.sidebar}>
          name of game
          image result here
          # viewers
        </div>
      </div>
    )
  }
}

export default Search;  
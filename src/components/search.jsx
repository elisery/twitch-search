import React, { Component } from "react"
import styles from "./search.module.css"
import Game from "../requests/game"
import GameList from "./gamelist";
import GameDetails from "./gamedetails";

class Search extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true,
      searchTerm: '',
      games: [],
      selectedGame: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.getGameID = this.getGameID.bind(this);
  }

  componentDidMount() {
    if (this.state.searchTerm !== '') {
      Game
        .all(this.state.searchTerm)
        .then(games => {
          this.setState({ loading: false, games: games })
        })
        .catch(() => {
          this.setState({ loading: false })
        })
    }
  }

  handleChange(term) {
    this.setState({ searchTerm: term.target.value })
    
    if (this.state.searchTerm !== '') {
      Game
        .all(this.state.searchTerm)
        .then(games => {
          this.setState({ loading: false, games: games })
        })
        .catch(() => {
          this.setState({ loading: false })
        })
    }
  }

  getGameID(id) {
    const { games } = this.state;
    games.forEach(x => {
      if (x._id === id) {
        this.setState({ selectedGame: x });
      }
    })
  }

  render() {
    const { games, selectedGame } = this.state 

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
            <GameList games={games} onGameClick={this.getGameID}/>
          </div>
        </div>
        <div className={styles.sidebar}>
          <GameDetails game={selectedGame}/>
        </div>
      </div>
    )
  }
}

export default Search;  
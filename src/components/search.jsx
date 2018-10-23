import React, { Component } from "react"
import styles from "./search.module.css"
import Game from "../requests/game"

class Search extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true,
      games: [],
      gameImage: ''
    }
  }

  componentDidMount() {
    Game
      .all()
      .then(games => {
        this.setState({ loading: false, games: games })
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
          <h2></h2>
        </main>
      )
    }
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
            box here
          </div>
          <div className={styles.search_results}>
            <h5>Games:</h5>
            map through array
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
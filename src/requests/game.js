import {BASE_URL} from "./config"
import {CLIENT_ID} from "./config"
import axios from "axios";

const kraken = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {'Client-ID': `${CLIENT_ID}`}
});

// https://api.twitch.tv/kraken/search/games?query=overwatch&client_id=m7j3y2g5gi1sabe1po38sogjkluxk8&type=suggest
const Game = {
  all(term) {
    return kraken.get(`/search/games?query=${term}&client_id=m7j3y2g5gi1sabe1po38sogjkluxk8&type=suggest`).then(res => {
      console.log(res.data.games)
      return res.data.games;
    })
  }
}

export default Game;
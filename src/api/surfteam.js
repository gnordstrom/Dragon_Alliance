import axios from 'axios';
// import config from '../../server/config.js';

const port = 3030;

export default function getSurfTeam() {
    axios.get(`http://localhost:${port}/api.getSurfTeam`)
        .then(response => {
            this.setState({
                surfTeam: response.data.surfTeam[0]
            })
        })
}
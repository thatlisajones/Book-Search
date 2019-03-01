import axios from "axios";
const apiKey = "AIzaSyCJyD1ZubNYDCQ0pEJLrE0HwZS-JZklgMI";


export default {
    searchBooks: function(term) {
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
    }
};
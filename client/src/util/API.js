import axios from "axios";

export default {
    search: function (query) {
        console.log("inside API" + query)
        return axios.post('/api/search', { searchContent: query })

    },
    addNew: function (info) {
        return axios.post('/api/savedList/addNew', { newItemInfo: info })
    },
    delete: function (info) {
        return axios.post('/api/savedList/delete', { _id: info })
    },
    sendId: function (id) {
        return axios.post('/api/savedList/getlist', id)
    },
    getUserName: function (id) {
        return axios.post('/api/user', id)
    },
    getPopularList: function () {
        return axios.get('/api/search/popular')
    },
    test: function () {
        axios.post('/api/savedList/test', {
            // email:'testuser@gmail.com',
            // name:'Pokemon Gen 8', 
            // genre:'RPG', 
            // company: 'Game Freak',
            // releaseDate: '10/01/2019',
            // isReleased: false,
            // cover: 'somecover.jpg'
            email: 'testuser@gmail.com',
            name: 'Kingdom Hearts IV',
            genre: 'RPG',
            company: 'Square Enix',
            releaseDate: '01/20/2027',
            isReleased: false,
            cover: 'kh4.jpg'
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

}


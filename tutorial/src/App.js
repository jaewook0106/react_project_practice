import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Game from './components/BoardGame';

// render : componentWillMount() -> render() -> componentDidMount()
// update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() ->  componentDidUpdate()


class App extends Component {

  state = {
    greeting: 'hello!',
    moviesData:[
      { 
        title:'Matrix',
        poster:'http://image.chosun.com/sitedata/image/201711/22/2017112202461_0.jpg'
      },
      { 
        title:'Full Metal Jacket',
        poster:'http://image.chosun.com/sitedata/image/201711/22/2017112202461_0.jpg'
      },
      // { 
      //   title:'Oldboy',
      //   poster:'http://image.chosun.com/sitedata/image/201711/22/2017112202461_0.jpg'
      // },
      // { 
      //   title:'Star Wars',
      //   poster:'http://image.chosun.com/sitedata/image/201711/22/2017112202461_0.jpg'
      // }
    ]
  }

  componentWillMount(){
    console.log('will')
  }

  componentDidMount(){
    console.log('did')
    // setTimeout(()=>{
    //   this.setState({
    //     greeting:'again'
    //   })
    // },2000)

    setTimeout(()=>{
      this.setState({
        moviesData:[
          {
            title:'Masic',
            poster:'http://news.maxmovie.com/wp-content/uploads/2018/07/20180727_m_yhj_2000001.jpg'
          },
          ...this.state.moviesData
        ],
        loadingData:[
          {
            name:'지구'
          },
          {
            name:'토성'
          },
        ]
      })
    },2000)
  }


  _renderLoading = () =>{
    const loadingTest = this.state.loadingData.map((loading,idx) => {
      return (
        <div key={idx}>{loading.name}</div>
      )
    })
    return loadingTest
  }

  render() {
    console.log('render')

    return (
      
      <div className="App">

        <div>
        {this.state.loadingData ? this._renderLoading(): 'loading'}
        </div>
        {this.state.greeting}
        {this.state.moviesData.map((movie,idx) => {
          return <Movie title={movie.title} poster={movie.poster} key={idx} />
        })}


        <div>
          <h2>보드 게임</h2>
          <Game />
        </div>

        
      </div>
    );
    
  }
}

export default App;

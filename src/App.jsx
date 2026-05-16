import axios from 'axios';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/App.css';
import Flags from './components/Flags';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      search : "",
      notFound : false,
      loading : false
    }
  }

  componentDidMount() {
    this.getData();
    toast.success(<p style={{backgroundColor: "black" , color: "green" , fontSize: "20px"}}> Assalomu Alaykum </p>);
    toast.success(<p style={{backgroundColor: "black" , color: "green" , fontSize: "20px"}}> Dasturimizga xush kelibsiz! </p>);
  }


  getData = (name = "") => {
    this.setState({ loading: true, notFound: false });

    const url = name ? `https://restcountries.com/v3.1/name/${name}`
     : `https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies`;

  axios.get(url).then((response) => {
    this.setState({
      data: response.data,
      notFound: false
    });
  })
  .catch(() => {
    this.setState({
      data: [],
      notFound: true
    });
  })
  .finally(() => {
    this.setState({ loading: false });
  });
};

handleSubmit = (e) => {
  e.preventDefault();

  const { search } = this.state;

  if (!search.trim()) {
    toast.error(`Input ga ma'lumot kiriting!`);
    return;
  }
  this.getData(search); 
};

  render() {
    return (
      <div>
        <nav>
        <h1 className="logo"> 🌎 Countries Explorer </h1>
        <div className="input__options">
          <form onSubmit={this.handleSubmit}>
            <input onChange={(e) => {
              this.setState({
                search : e.target.value
              })
            }} value={this.state.search} className="search" type="search"/>
            <button className='button' type='submit'> Search </button>

            <select name="select" className="select">
              <option value="All Regions"> All Regions </option>
              <option value="Asia"> Asia </option>
              <option value="Europe"> Europe </option>
              <option value="Africa"> Africa </option>
              <option value="North America"> North America </option>
              <option value="South America"> South America </option>
              <option value="Australia and Oceania"> Australia and Oceania </option>
              <option value="Antarctica"> Antarctica </option>
            </select>
          </form>
        </div> 
    </nav>

    <ToastContainer/>

      {this.state.loading && <h1 className='loading'> Loading... </h1>}
      {this.state.notFound && !this.state.loading && (<h2 className='NotFound'> Country is not founded ❌ </h2>)}
      {!this.state.loading && !this.state.notFound && (
        <div className="card">
          <Flags data={this.state.data} />
        </div>
      )}
      </div>
    )
  }
}
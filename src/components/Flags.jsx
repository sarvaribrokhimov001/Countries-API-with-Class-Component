import { Component } from 'react';
import "../App.css";

export default class Flags extends Component {
  render() {
    const data = this.props.data;
    return (
    <div className='wrapper'>
      {data.map((item, index) => (
        <div className="country__card" key={index}>
          <img src={item.flags.svg} width={'140px'} className="flag__img" />
          <p> <span> Name: </span> {item.name.common} </p>
          <p> <span> Region: </span> {item.region} </p>
          <p> <span> Capital: </span> {item.capital ? item.capital[0] : "No capital"} </p>
          <p> <span> Population: </span> {item.population} </p>
        </div>
      ))}
    </div>
    )
  }
}
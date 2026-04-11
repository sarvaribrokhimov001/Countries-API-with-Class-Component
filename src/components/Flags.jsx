import { Component } from 'react';
import "../App.css";

export default class Flags extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className='wrapper'>
        {data.map(({flags, region, name, capital, population , id}) => (
                <div key={id}>
                    <img src={flags.svg} width="140" alt={name.common} />
                    <p><span> Name: </span> {name.common} </p>
                    <p><span> Region: </span> {region} </p>
                    <p><span> Capital: </span> {capital ? capital[0] : "No capital"} </p>
                    <p><span> Population: </span> {population} </p>
                </div>
            ))}
      </div>
    )
  }
}
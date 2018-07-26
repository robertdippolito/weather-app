import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './semantic/dist/semantic.css';


//CORE
//Display a 5-day weather forecast, where each day shows the high and low temperatures, and an image for
//sunny/rainy/cloudy/snowy. Use fake, hard-coded data until you’ve got everything rendering correctly.
//BONUS
//Add the ability to click on a day, and see its hourly forecast. You can just maintain the current view in the top-level App state.
//Add React Router to the project (npm install react-router) and follow the quick start guide here to add routes, such that / shows the 5-day forecast, and /[name-of-day] shows the hourly forecast for a particular day.
//Sign up for a free API key from Open Weather Map, fetch a real 5-day forecast, and feed that data into your app.
//Want to get really fancy? Add a graphics library like vx and follow the examples here to add a graph of the temperature over the course of a week or day.

class DashboardView extends React.Component {
  state = {
    weather : [{
      day: 'Monday',
      id: uuid.v4(),
      forecast: 'Sunny',
      temp: '32',
    },
    {
    //tues
      day: 'Tuesday',
      id: uuid.v4(),
      forecast: 'Rainy',
      temp: '31',
    },
    {
    //wed
      day: 'Wednesday',
      id: uuid.v4(),
      forecast: 'Cloudy',
      temp: '15',
    },
    {
    //thurs
      day: 'Thursday',
      id: uuid.v4(),
      forecast: 'Snowy',
      temp: '-2',
    },
    {
      //fri
      day: 'Friday',
      id: uuid.v4(),
      forecast: 'Sunny',
      temp: '18',
    },
    {
      //sat
      day: 'Saturday',
      id: uuid.v4(),
      forecast: 'Cloudy',
      temp: '18',
    },
    {
      //sun
      day: 'Sunday',
      id: uuid.v4(),
      forecast: 'Clear',
      temp: '18',
    },
  ]
  }

  render() {
    return (
      <div>
        <h1>My Weather App</h1>
        <WeatherList
          weather={ this.state.weather }
          />
      </div>
    );
  }
}

class WeatherList extends React.Component {
  render() {
    const weather = this.props.weather.map((weatherDaily) => (
      <WeatherCard
          id={ weatherDaily.id }
          key={ weatherDaily.id }
          day={ weatherDaily.day }
          forecast={ weatherDaily.forecast }
          temp ={ weatherDaily.temp }
          />
    ));
    return (
      <div className='ui link cards'>
        { weather }
      </div>
    );
  }
}

class WeatherCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='content'>
          <div className='header'>{ this.props.day }</div>
          <div className='meta'>{ this.props.forecast }</div>
          <div className='meta'>{ this.props.temp }</div>
        </div>
      </div>
    );
  }
}




ReactDOM.render(<DashboardView />, document.getElementById('root'));

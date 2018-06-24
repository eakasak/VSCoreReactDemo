import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Button, Input, Tag } from 'antd'
import { Tooltip } from 'antd';
const text = <span>prompt text</span>;
const Search = Input.Search;

interface FetchDataExampleState {
    forecasts: WeatherForecast[];
    loading: boolean;
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
    constructor() {
        super();
        this.state = { forecasts: [], loading: true };

        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            { contents }
            <br />
      <Tag color="pink">pink</Tag>
      <Tag color="red">red</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="yellow">yellow</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="purple">purple</Tag>
      <h4>Examples  </h4>
      <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button role="button" value="Input" type="button" className="btn btn-link">Link</button>
      <br />
      <Button className="btn btn-primary" type="primary">Primary</Button>
      <Button  className="btn btn-info">Default</Button>
      <Button  className="btn btn-success" type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <br />
      <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action
                </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <br />
      <div>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(disabled)</Button>
        <br />
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
        <br />
        <Button>Ghost</Button>
        <Button disabled>Ghost(disabled)</Button>
        <br />
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(disabled)</Button>
      </div>
      <br />
      <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
        <Button type="primary" ghost>Primary</Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="danger" ghost>danger</Button>
      </div>

      <div>
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" icon="search">Search</Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">Search</Button>
      </div>
      <div>
        <Input placeholder="Basic usage" />
      </div>
      <br />
      <div>
        <Search
          placeholder="input search text"
          style={{ width: 200 }}
          onSearch={value => console.log(value)}
        /></div>

      <Tooltip title="prompt text">
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>

      <div>
        <div style={{ marginLeft: 60 }}>
          <Tooltip placement="topLeft" title={text}>
            <a href="#">TL</a>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <a href="#">Top</a>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <a href="#">TR</a>
          </Tooltip>
        </div>
        <div style={{ width: 60, float: 'left' }}>
          <Tooltip placement="leftTop" title={text}>
            <a href="#">LT</a>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <a href="#">Left</a>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <a href="#">LB</a>
          </Tooltip>
        </div>
        <div style={{ width: 60, marginLeft: 270 }}>
          <Tooltip placement="rightTop" title={text}>
            <a href="#">RT</a>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <a href="#">Right</a>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <a href="#">RB</a>
          </Tooltip>
        </div>
        <div style={{ marginLeft: 60, clear: 'both' }}>
          <Tooltip placement="bottomLeft" title={text}>
            <a href="#">BL</a>
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <a href="#">Bottom</a>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <a href="#">BR</a>
          </Tooltip>
        </div>
      </div>
        </div>;
    }

    private static renderForecastsTable(forecasts: WeatherForecast[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
            {forecasts.map(forecast =>
                <tr key={ forecast.dateFormatted }>
                    <td>{ forecast.dateFormatted }</td>
                    <td>{ forecast.temperatureC }</td>
                    <td>{ forecast.temperatureF }</td>
                    <td>{ forecast.summary }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

import React, { Component } from 'react';
import './test.scss';
import './App.css';

export default class Menu extends Component {


  state = {
    click: false,
  }

  onClick = () => {
    this.setState({ click: !this.state.click })
  }

  render() {
    const lvl = { value1: 100, value2: 200, value3: 300, value4: 150, value5: 270 };
    return (
      <>
        <div className="App">
          <p className='info'>안녕</p>
          <button className='ml5' onClick={this.onClick}>입력</button>
          {
            !this.state.click &&
            <>
              <p className='lh500'>안녕</p>
              <div className='mr500'>안녕하시오</div>
            </>
          }
        </div>
        {
          this.state.click &&
          <div className='table1 ml500'>
            <table>
              <tr>
                <th>레벨</th>
                <th>아이디</th>
              </tr>
              <tr>
                <td>{lvl.value1}</td>
                <td>react</td>
              </tr>
              <tr>
                <td>{lvl.value2}</td>
                <td>vue</td>
              </tr>
              <tr>
                <td>{lvl.value3}</td>
                <td>spring</td>
              </tr>
              <tr>
                <td>{lvl.value4}</td>
                <td>customer</td>
              </tr>
              <tr>
                <td>{lvl.value5}</td>
                <td>angular</td>
              </tr>
            </table>
          </div>
        }
      </>
    );
  }
}

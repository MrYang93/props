import React from 'react';

import './main.css';

class Card extends React.Component{
  render(){
    return(
      <div className='card'>
        <div className='card-index'>{this.props.index}</div>
        <div className='card-info'>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}
Card.defaultProps = {//设置不传值时默认props属性
  index:1,
  title:'这是默认的标题',
  date:'2017.2.20'
}
export default Card;

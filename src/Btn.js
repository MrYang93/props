import React from 'react';

class Btn extends React.Component{

  handleClick(){
    this.props.addNum(this.props.num)
  }

  render(){
    let styles = {
      padding:this.props.padd,
      backgroundColor:this.props.bgc,
      color:'#fff',
      fontSiz:'24px'
    }
    console.log(this.props);

    return(
      <div>
        以下是Btn的组件
        <button style={styles} onClick={this.handleClick.bind(this)}>{this.props.title}</button>
        <button style={styles} onClick={()=>this.props.handleClick} title ='hsfkjh'>{this.props.title}</button>
      </div>
    )
  }
}
Btn.defaultProps = {//设置不传值时默认props属性
  title: 'defaultTitle',
  bgc: 'blue',
}

Btn.propTypes = {  //设置检测传的值类型，如果与下列设置不相符，会报错。如果不写这个，传错参数是不会报错的
  title:React.PropTypes.string,
  bgc:React.PropTypes.string,
  addNum:React.PropTypes.func.isRequired,//检测传的是否是函数，后面加的.isRequired 是为了当没有传函数时报警告。
  num:React.PropTypes.number
};
export default Btn;

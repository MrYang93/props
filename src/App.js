import React from 'react';

import Btn from './Btn.js';
import Card from './Card.js';

let date = [
  {index:1,title:'标题一',date:'2017.2.20'},
  {index:1,title:'标题二',date:'2017.2.20'},
  {index:1,title:'标题三',date:'2017.2.20'},
  {index:1,title:'标题四',date:'2017.2.20'},
]

class App extends React.Component{
  constructor(){
    super();
    this.state={date:date,num:0}
  }

  addNum(val){
    this.setState({num: this.state.num+val})
  }

  render(){
    return(
      <div>
        <div>
          <Btn title='hello' bgc='red' padd='10px'/>
          <Btn title='wrod' bgc='#000' padd='20px'/>
          <Btn title='hi' bgc='#435'/>
          <Btn title='look' bgc='#888'/>
        </div>
        <div>
          {this.state.date.map(//map方法
            item=><Card key={Math.random()}//匿名函数，传了一个叫item的参数，函数返回<Card/>
            //title={item.title} index={item.index} date={item.date}
            {...item}/>)}
            数值是:{this.state.num}
            <Btn addNum={this.addNum.bind(this)} num = {5} title = '加五'/>
            <Btn addNum={this.addNum.bind(this)} num = {-5} title = '减五'/>
        </div>
      </div>
    )
  }
}
export default App;


// title={item.title} index={item.index} date={item.date} 等同于 {...item}

// # props
// - 只能从父组件传给自组件
// - 子组件通过{this.props.[name]}获取 props 值   [中括号扩起来的表示可选的，自定义名称的]
// - 子组件设置默认属性 Btn(以Btn为例) Btn.defaultProps = {}
// - 子组件设置属性格式验证 Btn.propTypes = {}

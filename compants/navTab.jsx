var React = require('react');
var ReactDOM = require('react-dom');
var NavTab = React.createClass({
    getDefaultProps:function(){
        return{
            navTabList:''
        }
    },
    getInitialState:function(){
        return {

        }
    },
    render:function(){
        "use strict";
        return <ul className="nav nav-tabs">
            {
                this.props.navTabList.map(function(result,index){
                    return  <NavTabList key={index} data={result} />
                })
            }
        </ul>
    }
});
var NavTabList = React.createClass({
    clickHandle:function(){
        this.props.className = 'active';
    },
    render:function(){
        'use strict';
        return <li onClick={this.clickHandle} className={this.props.data == 1 ? 'active' : ''} >
            <a href="#">{this.props.data}</a>
        </li>
    }
});
module.exports = NavTab;

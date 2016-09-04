var React = require('react');
var ReactDOM = require('react-dom');
var DropDown = require('./dropDown.jsx');
var NavTab = require('./navTab.jsx');

if(document.getElementById('dropdown')){
    ReactDOM.render(<DropDown dropDownToggle={"DropDown"} dropDownMenu={[1,2,3,4]} />,document.getElementById('dropdown'));
}else if(document.getElementById('navtab')){
    ReactDOM.render(<NavTab navTabList={[1,2,3,4]} />,document.getElementById('navtab'));
}


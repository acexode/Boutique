import React,{Component} from 'react'
import scss from './directory.scss'
import MenuItem from '../menu-item/menu-item';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import {  createStructuredSelector } from 'reselect';



const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
    {sections.map(({ id, ...others}) =>(
        <MenuItem key={id} {...others} />
    ))} 
 </div>
  )
}



 
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
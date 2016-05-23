import React from 'react'
import {Grid} from 'react-bootstrap'
import DocumentMeta from 'react-document-meta'
//import GlobalNav from './GlobalNav'
import Dashboard from './Dashboard'
//import Head from './Head'



class App extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
	    		data: []
	    	
	    }
	    this.loadajax = this.loadajax.bind(this)  
	  }
	
	loadajax(urlstr,mark){
		
		var request = new XMLHttpRequest();
		request.open('GET', urlstr, true);
		
		request.onload = function() {
			
		
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
			    
			    if (mark) {
			    	this.setState({mark: data});
			    } else {
			    	
			    	this.setState({data: data});
			    
			    }
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};
			
			request.send();
			
		
	}
	
	
	
	
	componentWillUpdate(){

	}
	
	componentDidMount(){
//		http://104.131.121.133/fortunetellers
		this.loadajax('http://104.131.121.133/fortunetellers',false)
				   
	}
	componentWillReceiveProps(){

	}
	
	
  render() {
	  
	 const meta = {
		title: 'CV',
		description: 'CV curriculum vitae'
     }
	  	  
    return (
      <div>
      <DocumentMeta {...meta} />	 
         
      	
      	{this.props.children || <Dashboard  data={this.state.data} />} 
      	
      	 
     </div>
    )
  }
}

module.exports = App

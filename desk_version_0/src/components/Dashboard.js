import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'
//import Firebase from 'firebase'
//import StarRating from 'react-star-rating'

//const dark = 'hsl(200, 20%, 20%)'
//const styles = {}
//
//styles.wrapper = {
//	padding: '10px 20px',
//	overflow: 'hidden',
//	background: dark
//}

//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');


class Dashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: []	
	    	
	    }

	}

	componentDidMount(){
						
	}	
	componentDidUpdate(prevProps) {
		
		this.state.data = this.props
		
//		console.log(this.props)
		
		
//		let oldId = prevProps.params.stitle
//		let newId = this.props.params.stitle
//
//		   if (newId !== oldId) {
//			   
//			   if (Object.keys(this.props.params).length === 1) {
//				   
//				 this.loadajax('/www/'+site+'/blog/'+stopic+'/'+stopic+'.json',true)
//				 this.loadajax('http://'+site+':8001/api/blog/'+stopic,false)
//				 
//				   
//				}
//		   }
							
	}	  
	componentWillMount(){

		
	}
		
	render() {
		
		var htmlListGroup =[]
		var htmlListItems =[]
		var key =""

		
		 if (this.props.data.length > 0) {

			 this.props.data.map(function(item) {
				 console.log(item.Id)
				 let key =item.Id
				 let tolink = "/"+item.Id
				 let imglink = "/images/fortuneteller"+key+".jpg"
				 htmlListItems.push(<Link key={key} to={tolink}><Row ><Col xs={6} md={4}><Image src={imglink} responsive rounded  /> </Col><Col xs={6} md={8} >{item.Name}<br></br>{item.Phone}<br></br>{item.Location}</Col></Row></Link>)
				 
			 })
			
			 	
			 htmlListGroup.push(<Grid key={key}>{htmlListItems}</Grid>) 
			 
			 			 
			 
		 } else {
			 return null
		 }
		
		
			
//		this.state.items.map(function(vvdata) {
//
//			var item_obj =vvdata.val()			
//			var htmlListItems =[]			
//			item_obj.items.map(function(data){
//
//				key =data.id+data.item
//				htmlListItems.push(<ListGroupItem key={key}>{data.item} <StarRating name="airbnb-rating" totalStars={5} rating={data.rating} size={18}/></ListGroupItem>)
//				
//			})	
//			
//			let imglink = '/img/'+item_obj.img
//			let link ='/'+item_obj.link+".html"
//
//			let key2 = key+link
//			let key3 = key2+key
//
//			htmlitem.push(<h2 key={key2}>{item_obj.title}</h2>)			
//			htmlitem.push(<Row key={key3}><Col xs={6} md={2}><Image src={imglink} responsive/></Col><Col xs={6} md={8}><ListGroup>{htmlListItems}</ListGroup></Col><Col xs={6} md={2}><Link to={link}><Image src='/img/orange-arrow-right.png' responsive/></Link></Col></Row>)
//				
//		})
		

    return (
      <div>
 
     
      	<Well>
      	
   	  	
  			{htmlListGroup}
  			
    	</Well>
    	
      </div>
    )
  }
}

export default Dashboard

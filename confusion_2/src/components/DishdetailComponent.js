import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount(){
        console.log('Dishdetail component componentDidMount invoked');
    }

    componentDidUpdate(){
        console.log('Dishdetail component componentDidUpdate invoked');
    }

    renderDish(dish){
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
             );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) { 

        if (dish != null) { 

            const comments = dish.comments.map((comment) => { 
                return ( 
                    <div key={comment.id}> 
                        <ul>{comment.comment}</ul> 
                        <ul>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(comment.date.toLocaleDateString)} </ul> 
                    </div> 
                ); 
            }); 

            return ( 
                <div> 
                    <h4>Comments:</h4> 
                    {comments} 
                </div> 
            ); 
        } 
        else 
            return ( 
                <div></div> 
            );
    } 
    render() {

        console.log('Dishdetail component render invoked')
        if(this.props.dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            
            );
    }

}

export default DishDetail;



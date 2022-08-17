import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
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

    function RenderComments({dish}) { 

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

     
    const DishDetail = (props) => {

        console.log('Dishdetail component render invoked')
        if(props.dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish}/>
                        {/* <RenderComments comments={props.comments}/> */}
                    </div>
                </div>
            
            );
    }

export default DishDetail;



import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";



  
    function RenderDishes ({dish})  {
        
            return(
                <div className="col-12 col-md-6 col-lg-6">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.name}</CardText>
                        </CardBody>
                    </Card>
                </div>
            ) 
    }
    function RenderComments({comments}) {
        if(comments) {
            const commentListItem = comments.map((comment) => {
                return(
                    <li key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </li>
                )
            });
            return (
                <div className="col-12 col-md-6 col-lg-6">
                    <h3 style={{textAlign:"center"}}>COMMENTS</h3>
                    <ul className="list-unstyled">
                        {commentListItem}
                    </ul>
                </div>
            )
        } else(<div></div>)

     
    }

    const DetailDish = (props) => {
        if(props.dish) {
            return(
                <>
                    <RenderDishes dish={props.dish}/>
                    <RenderComments comments ={props.dish.comments}/>
                </>
            ) 

        } else{
            return <div></div>
        } 
    }


export default DetailDish;

import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


class DetailDish extends Component {
  

    renderDishes ()  {
        
            return(
                <div className="col-12 col-md-6 col-lg-6">
                    <Card>
                        <CardImg src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.name}</CardText>
                        </CardBody>
                    </Card>
                </div>
            ) 
    }
    renderComments(comments) {
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
    render() {
        if(this.props.dish) {
            return(
                <>
                    {this.renderDishes(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </>
            ) 

        } else{
            return <div></div>
        } 
    }

}
export default DetailDish;

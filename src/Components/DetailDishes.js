import React from "react";
import CommentForm from "./Excesice3";
import { Card, CardBody, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./isLoading"
import { baseUrl } from "../shared/baseUrlComponent"




  
    function RenderDishes ({dish})  {
        
            return(
                <div className="col-12 col-md-6 col-lg-6">
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.name}</CardText>
                        </CardBody>
                    </Card>
                </div>
            ) 
    }
    function RenderComments({comments, addComment, dishId}) {
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
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            )
        } else(<div></div>)

     
    }

    const DetailDish = (props) => {
        if(props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>

            )
        } else if(props.errMess) {
            return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>

            )
        }
        else if(props.dish) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDishes dish={props.dish} />
                        <RenderComments comments ={props.comments} addComment={props.addComment} 
                        dishId={props.dish.id}/>
                    </div>
                </div>
            ) 

        } else{
            return <div></div>
        } 
    }


export default DetailDish;

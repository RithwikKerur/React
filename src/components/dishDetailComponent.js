import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component{
    constructor(props){

        
        super(props);

        console.log('DishDetail Constructed');
    }

    componentDidMount() {
        console.log('DishDetail Component componentDidMount invoked')
    }

    componentDidUpdate() {
        console.log('DishDetail Component componentDidUpdate invoked')
    }

    getDetails(dish){
        if(dish!= null){
            const details = dish.comments.map((comment) => {
                return(
                    <div key = {comment.id}>
                        <CardText>{comment.comment}</CardText>
                        <CardText>--{comment.author}, {comment.date.slice(0,comment.date.indexOf('T'))}</CardText>
                        <CardText></CardText>
                    </div>
                )
            });


            return (
                <div>
                    <h2>Comments</h2>
                    <div>
                        {details}
                    </div>
                </div>
                
                    
                
            );
        }
        
        else{
            return <div></div>
        }
    }
    render(){
        console.log('DishDetail Component render invoked')
        let dish = this.props.dish;
        

        if(dish != null){
            return (
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-5 col-12 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>

                        <div className = "col-md-5 col-12 m-1">
                            {this.getDetails(dish)}
                        </div>
                    </div>
                    
                </div>
                
            );
        }
        else {
            return (
                <div></div>
            );
        }
        
    }
}


export default DishDetail;
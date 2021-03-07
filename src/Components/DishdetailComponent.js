import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, List } from "reactstrap";

export default class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
  }
  renderComments(dish) {
    return dish.comments.map(comment => {
      return (
        <List key={comment.id} type="unstyled">
          <li>{comment.comment}</li>
          <br />
          <li>
            --{comment.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
          </li>
        </List>
      );
    });
  }
  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>
            <b>{dish.name}</b>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  render() {
    const dish = this.props.dish;

    if (dish != null) {
      return (
        <div className="row">
          <div className="col-md-5">{this.renderDish(dish)}</div>

          <div className="col-md-7">
            <h4>
              <b>Comments</b>
            </h4>
            {this.renderComments(dish)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

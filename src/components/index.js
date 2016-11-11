import React, { Component } from 'react'
import Router, {Link} from 'react-router'

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick(e) {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick.bind(this)}>
          You {text} this. Click to toggle.
      </p>
    );
  }
}

export default class Index extends Component {
	render() {
		return (
			<div>
				<LikeButton />
				<ol className="nav">
					<li><Link to="/page1" activeClassName="active">page1</Link></li>
					<li><Link to="/page2" activeClassName="active">page2</Link></li>
				</ol>
				<div>{this.props.children}</div>
			</div>
		)
	}
}
import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';

const CommentDetail = (props) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={faker.image.image()} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.time}</span>
				</div>
				<div className="text">{props.comment}</div>
			</div>
		</div>
	);
};

CommentDetail.propTypes = {
	time: PropTypes.string,
};

export default CommentDetail;

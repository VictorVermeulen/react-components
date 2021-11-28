import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

const ApprovalCard = (props) => {
	return (
		<div className="ui card">
			<div className="content">{props.children}</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Decline</div>
				</div>
			</div>
		</div>
	);
};

ApprovalCard.propTypes = {};

export default ApprovalCard;
import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments ">
			<ApprovalCard>
				<div>
					<h4>Warning</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Victor" time="6pm" comment="Nice post" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Nienke" time="4pm" comment="Great post" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Test" time="1pm" comment="Bad post" />
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
	module.hot.accept();
}

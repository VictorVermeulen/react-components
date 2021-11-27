import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail author="Victor" time="6pm" comment="Nice post" />
			<CommentDetail author="Nienke" time="4pm" comment="Great post" />
			<CommentDetail author="Test" time="1pm" comment="Shit post" />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
	module.hot.accept();
}

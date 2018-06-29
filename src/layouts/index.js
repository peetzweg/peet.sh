import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet>
			<meta charSet="utf-8" />
			<title>atem.io / Philip Poloczek</title>
			<meta name="description" content="This is the personal website of Philip Poloczek" />
			<meta name="keywords" content="developer, profile, resume" />
			<link
				rel="stylesheet"
				media="screen"
				href="https://fontlibrary.org/face/fantasque-sans-mono"
				type="text/css"
			/>
			<link href="https://fonts.googleapis.com/css?family=Asap" rel="stylesheet" />
		</Helmet>
		<div>{children()}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;

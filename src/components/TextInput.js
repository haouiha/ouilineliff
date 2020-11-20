import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const TextInput = ({ borderless, rounded, ...rest }) => {
	return <StyledInput borderless={borderless} rounded={rounded} {...rest} />;
};

const StyledInput = styled(Input)`
${(props) =>
	props.borderless &&
	`
border: 0;
background-color: #ededed;
`}

	border-radius: ${(props) => (props.rounded ? '20px' : '8px')};
	padding: 10px 5px 11px 18px;

	.ant-input:focus,
	.ant-input-focused {
		border-color: #0ea661;
	}
	.ant-input:hover {
		border-color: #0ea661;
	}
`;

export default TextInput;

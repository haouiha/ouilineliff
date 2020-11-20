import React from 'react';
import styled from 'styled-components';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const FormItem = ({ label, error, children }) => {
	return (
		<>
			<FormLabel>{label}</FormLabel>
			{children}
			<FormError>
				{error && (
					<>
						<ExclamationCircleOutlined /> {error}
					</>
				)}
			</FormError>
		</>
	);
};

const FormLabel = styled.div`
	font-size: 14px;
	font-weight: 500;
	color: #4a4a4a;
	margin-bottom: 12px;
`;
const FormError = styled(FormLabel)`
	color: red;
	/* height: 24px; */
`;

export default FormItem;

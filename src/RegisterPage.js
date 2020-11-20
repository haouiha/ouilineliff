import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useYupValidationResolver } from './hook/yupValidationResolver';
// import { Typography, Tabs, Row, Col, Switch, Avatar, Card } from 'antd';
// import TextInput from './components/TextInput';
// import FormItem from './components/FormItem';
import axios from 'axios';

const parentRegisterSchema = yup.object({
	// userId: yup.number().required(),
	firstName: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	studentId: yup.string().required(),
});

const RegisterPage = () => {
	const urlparams = useParams();
	console.log('urlparams', urlparams);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(parentRegisterSchema),
	});
	const onSubmit = async (data) => {
		console.log('data', data);

		try {
			await axios.post(`https://2a9d429b4c96.ngrok.io/api/updateLineUser/${urlparams.lineId}`, {
				firstName: data.firstName,
				lastName: data.lastName,
				studentId: Number(data.studentId),
			});
		} catch (error) {
			console.log('error', error);
		}
	};

	console.log('errors', errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label for="id">userId: </label>
			<input type="number" name="userId" defaultValue={1} ref={register} />
			<p>{errors.userId?.message}</p>

			<label for="firstName">firstName: </label>
			<input type="text" name="firstName" defaultValue={'oui'} ref={register} />
			<p>{errors.firstName?.message}</p>

			<label for="lastName">lastName: </label>
			<input type="text" name="lastName" defaultValue={'eiei'} ref={register} />
			<p>{errors.lastName?.message}</p>

			<label for="students">studentId: </label>
			<input type="number" name="studentId" defaultValue={1234} ref={register} />
			<p>{errors.studentId?.message}</p>

			<input type="submit" />
		</form>
	);
};

export default RegisterPage;

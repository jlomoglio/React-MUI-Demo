import React, { useState } from "react";
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@react-css/grid";
import Header from "../../components/Header";


const initialValues = {
	firstName: "", 
	lastName: "", 
	email: "", 
	contact: "", 
	address1: "", 
	address2: "",   
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
	firstName: yup.string().required("This is a required field"),
	lastName: yup.string().required("This is a required field"),
	email: yup
		.string()
		.email("Invalid email address")
		.required("This is a required field"),
	contact: yup
		.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.required("This is a required field"),
	address1: yup.string().required("This is a required field"),
	address2: yup.string().required("This is a required field"),
})

const Form = () => {
    const [age, setAge] = useState('');

	const isNonMobile = useMediaQuery("min-width:600px");


	const handleFormSubmit = (values) => {
		console.log("Values: " + values)
	}
   

  const handleAgeChange = (e) => {
	//console.log(e.target.value)
	setAge(e.target.value);
  };
	
	return (
		<Box m="20px">
			<Header title="CREATE USER" subtitle="Create a new user profile" />
			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={userSchema}
			>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
					<form onSubmit={handleFormSubmit}>
						{/** CSS-GRID - this is not mui grid */}
						<Grid
							//display="grid" 
							//gap="30px" 
							//gridTemplateColumns="repeat(4, minmax(0, 1fr))"
							// sx={{
							//     "& > div": { gridColumn: isNonMobile ? undefined : "span 4"}
							// }}
							columns="22% 22% 22% 22%"
							columnGap="30px"
							rowGap="15px"
						>
							<TextField
								fullWidth
								variant="outlined"
								type="text"
								label="First Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.firstName}
								name="firstName"
								error={!!touched.firstName && !!errors.firstName}
								helperText={touched.firstName && errors.firstName}
								sx={{gridColumn: "span 2"}}
							/>

							<TextField
								fullWidth
								variant="outlined"
								type="text"
								label="Last Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.lastName}
								name="lastName"
								error={!!touched.lastName && !!errors.lastName}
								helperText={touched.lastName && errors.lastName}
								sx={{gridColumn: "span 2"}}
							/>

							<TextField
								fullWidth
								variant="outlined"
								type="email"
								label="Email"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name="email"
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{gridColumn: "span 4"}}
							/>

                            <TextField
									fullWidth
									variant="outlined"
									type="phone"
									label="Contact Number"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.contact}
									name="contact"
									error={!!touched.contact && !!errors.contact}
									helperText={touched.contact && errors.contact}
									sx={{gridColumn: "span 4"}}
							/>

							<TextField
								fullWidth
								variant="outlined"
								type="text"
								label="Address 1"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.address1}
								name="address1"
								error={!!touched.address1 && !!errors.address1}
								helperText={touched.address1 && errors.address1}
								sx={{gridColumn: "span 4"}}
							/>

							<TextField
								fullWidth
								variant="outlined"
								type="text"
								label="Address 2"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.address2}
								name="address2"
								error={!!touched.address2 && !!errors.address2}
								helperText={touched.address2 && errors.address2}
								sx={{gridColumn: "span 4"}}
							/>


							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Age</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={age}
									label="Age"
									onChange={handleAgeChange}
								>
									<MenuItem id="Ten" value={10}>Ten</MenuItem>
									<MenuItem id="Twenty" value={20}>Twenty</MenuItem>
									<MenuItem id="Thirty" value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>

							<Box display="flex" justifyContent="start" mt="20px">
								<Button 
									variant="contained"
									sx={{
										gridColumn: "span 1", 
										width: "160px",
									}}
									onClick={() => {
										handleFormSubmit();
									}}
									type="submit"
								>
									Create New User
								</Button>
							</Box>
						</Grid>

						
					</form>
				)}
			</Formik>
		</Box>
	)
}

export default Form;
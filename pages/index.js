import Layout from "../components/Layout";
import { useForm } from 'react-hook-form';
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Home = ()=>{
const [error,setError]=useState();
const router = useRouter();
const { register,handleSubmit,formState: { errors },} = useForm();
return(<Layout>
<div className="row">
<div className="mx-auto col-10 col-md-8 col-lg-6">
{error ? (<div className="alert alert-danger mt-4">{error} </div>):"" }
<form onSubmit={handleSubmit(async(data) => {
axios.post('/api/login', {
email: data.email,
password: data.password
})
.then(function (response) {
console.log(response);
if(response.data.success)
{
Cookies.set('token',response.data.token);
router.push("/upload")
}
else
{
setError(response.data.error)
}
})
.catch(function (error) {
console.log(error);
});

})}>
<div className="mb-3 mt-3">
<label htmlFor="email" className="form-label">Email</label>
<input type="email" className="form-control" id="email"  {...register('email', { required: true })}placeholder="Enter email" name="email" />
</div>
<div className="mb-3">
<label htmlFor="pwd" className="form-label">Password</label>
<input type="password" className="form-control" {...register('password', { required: true })} id="pwd"
placeholder="Enter password" name="password" />
</div>
<button type="submit" className="btn btn-primary mb-4">Login</button>
</form>
</div>
</div>
</Layout>)
}
export default Home;


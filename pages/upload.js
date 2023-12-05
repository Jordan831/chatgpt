import Layout from "../components/Layout";
import Auth from "../components/Auth";
import {MoonLoader} from "react-spinners";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import useSWR from 'swr';
const Upload = ()=>{
const [file,setFile]=useState();
const router = useRouter();
const [disabledBtn,setDisabledBtn]= useState(true)
const [errorD,setErrorD]=useState();
const [send,setSend] = useState(false);
const [loading,setLoading]= useState(false);
const [count,setCount]= useState();

const token = Cookies.get('token') || "";
const fetcher = (url) => fetch(url,{
headers: {
"Content-Type": "application/json",
"x-vikram-token":token
},
}).then(async(res) =>{
let result = await res.json();
setCount(result.count)
if(result.count === 0)
{
setLoading(false)
}
});

const { data, error,isLoading } = useSWR('/api/status', fetcher,{ refreshInterval: 5000 });

useEffect(()=>{
async function fetchData() {
await axios.get('/api/status',
{
headers:{'x-vikram-token': Cookies.get('token') || ""}
}
).then(async(result)=>{

if(result.data.success == true && result.data.count > 0)
{
setLoading(true)
setCount(result.data.count)
}
else
{
setLoading(false)

}
})
}
fetchData();

},[setLoading,setCount])
const handleChange = (event)=>{
setErrorD("");
if(event.target.files[0].type == "text/csv")
{
setDisabledBtn(false)
setFile(event.target.files[0])
}
else
{
setDisabledBtn(true)
setErrorD('Invalid File');
}
}
const submitData = async(e)=>{
e.preventDefault();
setSend(true);
const formData = new FormData();
formData.append('csv', file);
formData.append('fileName', file.name);
const config = {
headers: {
'content-type': 'multipart/form-data',
'x-vikram-token': Cookies.get('token') || ""
}
}
await axios.post('/api/upload', formData, config).then((response) => {

if(response.data?.success === false)
{
setErrorD(response.data.error)
setSend(false)
}
if(response.data?.success === true)
{

setLoading(true);
setSend(false)
}
if(response.data?.redirect)
{
router.push("/")
}
});
};

return(<Layout>
<Auth>
{loading && count > 0 ? <div className="row">
<div className="mx-auto col-10 col-md-8 col-lg-6 d-flex  justify-content-center align-items-center mt-4">
<MoonLoader color="#36d7b7" size={35} /> <div className="ml-2 font-italic">Only <span className="text-info">{count} </span> Left!!</div></div> </div>
:""}

<div className="row">
<div className="mx-auto col-10 col-md-8 col-lg-6">
<div className="card mt-4">
<form onSubmit={submitData}>
<div className="card-header">
File Upload
</div>
<div className="card-body">
<div className="input-group mb-3">
<input type="file" className="form-control" id="inputGroupFile02" onChange={handleChange} />
<label className="input-group-text" >Upload</label>
</div>
</div>
<div className="card-footer text-muted">
<button disabled={disabledBtn} type="submit" className="btn btn-info btn-md mt-2">{ send ? "Loading..":"Save" }</button>
</div>
{errorD ? <div className="alert alert-danger m-4">{errorD}</div>:""}
</form>
</div>
</div> 
</div> 
</Auth>
</Layout>)
}

export default Upload;
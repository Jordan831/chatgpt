import useSWR from 'swr';
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {MoonLoader} from "react-spinners";

const Auth = (props)=>{
const router = useRouter();
var token = Cookies.get('token') || false;

const fetcher = (url) => fetch(url,{
headers: {
"Content-Type": "application/json",
"x-vikram-token":token
},
}).then((res) =>{
return res.json()});
const { data, error,isLoading } = useSWR('/api/checkauth', fetcher);
if(isLoading)
{
return <div className="row">
<div className="mx-auto col-10 col-md-8 col-lg-6 d-flex justify-content-center align-items-center mt-4"> <MoonLoader color="#36d7b7" size={35} /> </div> </div>
}
if(data?.success === true)
{
return(<div>{props.children }</div>)
}
if(data?.success == false)
{
   router.push("/index")
}

}

export default Auth;
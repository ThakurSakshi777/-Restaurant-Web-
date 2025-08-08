import  { useState , useEffect } from 'react';
import  { Link ,useNavigate} from "react-router-dom";


const Success = () => {
  const [ countdom , setCountdom] = useState(10);
  const navigate = useNavigate();

  useEffect (() =>{
    const timeoutId = setInterval (() =>{
      setCountdom((preCount) =>{
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1 ;
      });
    } , 1000);
    return ()=> clearInterval(timeoutId);
  } , [navigate]);
  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1> Rerdirecting to Home in { countdom} seconds...</h1>
          <Link to={"/"}> Back to Home page</Link>
        </div>
        </section>  

    </>
  )
}

export default Success
import { ITestUser } from "@/models/ITestUser";
import { TestUserService } from "@/services/TestUserService";
import React, { useState, useEffect } from "react";

interface IState {
  loading: boolean;
  user: ITestUser[];
  errorMsg: string;
}

const TestUser: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    user: [] as ITestUser[],
    errorMsg: "",
  });

  // useEffect(()=>{
  //     TestUserService.getAllUser()
  //       .then((res)=>console.log(res.data))
  //       .catch();
  // },[])

  useEffect(() => {
    setState({ ...state, loading: true });
    TestUserService.getAllUser()
      .then((res) =>
        setState({
          ...state,
          loading: false,
          user: res.data,
        })
      )
      .catch((err) =>
        setState({
          ...state,
          loading: false,
          user: err.data,
        })
      );
  },[]);


  const {loading, user, errorMsg} =state
  return (
    <>
    {errorMsg && (<p>{errorMsg}</p>)}
    {loading && <h3>Loading......</h3>}

datas <br/>

{user.length > 0 && user.map((d)=>{
    return(
        <>
    <h1>{d.name}</h1>
    <p>{d.age}</p>
    </>
)})}
  </>
  );
};
export default TestUser;

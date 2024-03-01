export default function LoginForm({onLogin}){
    async function handleSubmit(event){
      event.preventDefault();
      console.log(event)
      onLogin(event.target.username.value, event.target.password.value); 
    }
    return(
      <div className="container  w-2/4 flex-col items-center p-2 mx-auto my-3 rounded-md border border-emerald-500 bg-emerald-200">

      <form onSubmit={handleSubmit}>
      <fieldset autoComplete="off" className="items-center m-4">
  
        <label htmlFor="password" className="text-center block mb-2  font-bold text-gray-900">USER NAME</label>

        <input name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 " placeholder="User Name"/>
        <label htmlFor="password" className="text-center block mb-2 mt-10 font-bold text-gray-900">PASSWORD</label>
        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md  block w-full p-2.5 " placeholder="Password"/>
        <div className="container flex flex-col items-center">
        <button className="text-gray-900 bg-emerald-600 font-medium rounded-md  px-5 py-2.5 mt-10 text-center content-center w-full">SIGN IN</button>
        </div>
      </fieldset>
  </form>
  </div>
  );
  }
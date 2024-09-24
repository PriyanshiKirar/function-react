import React from 'react'

const App = () => {
let info= () =>{
  console.log("hwloow word");
}

const takeinfo=(info)=>{
console.log(info);
}
  return (
    <div className='p-10'>
<h1 className='text-red-600 text-4xl capitalize'>helloow</h1>
<button onClick={()=>takeinfo("woring")} className='bg-blue-600 p-2 rounded-md mt-2'>click me</button>
    </div>
  );

}

export default App
export default function({setCode, callAPI}){
    return (
        <div className="flex flex-col justify-center w-full h-screen py-5 px-2">
        <div className="w-full h-full p-2 rounded-lg bg-gray-700">
          <textarea onChange={(e)=>setCode(e.target.value)} className="w-full h-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 bg-black-200" placeholder="Enter your text..." /> 
        </div>
        <button onClick={()=>callAPI()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600 w-1/3">Submit</button>
      </div>
      
    );
}
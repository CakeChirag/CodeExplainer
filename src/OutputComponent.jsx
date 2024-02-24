export default function({output, setOutput}){
    return (
      <div className="h-screen w-full mr-10 overflow-y-auto bg-gray-800 rounded-md shadow-sm">
            {
                output!==""?<p className="text-l text-white py-10 px-5">This code does this: {output}</p>:null
            }
      </div>
    );
}
import { hostedByText } from "../defaultConst";

interface roomDetailsProps{
    roomDetails:any
}
const Hosts:React.FC<roomDetailsProps>=({roomDetails})=>{

    return(         <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm mx-auto flex items-center space-x-4 mt-4 mb-4">
              {/* Avatar */}
              <img
                src={roomDetails?.hostDetails?.hostImg || "https://via.placeholder.com/64"}
                alt={`Hosted by ${roomDetails?.hostDetails?.hostName}`}
                className="w-16 h-16 rounded-full object-cover"
              />
    
              {/* Host Info */}
              <div className="text-center sm:text-left">
                <p className="text-gray-500 text-sm">{hostedByText}</p>
                <h2 className="text-lg font-semibold">{roomDetails?.hostDetails?.hostName}</h2>
              </div>
          
            </div>)
}
export default Hosts;
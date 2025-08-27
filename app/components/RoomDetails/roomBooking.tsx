import { bookNow, currency, night } from "../defaultConst";
import Hosts from "./hosts";

interface roomDetailsProps{
    roomDetails:any
}
const RoomBooking:React.FC<roomDetailsProps>=({roomDetails})=>{
  return (          <div className="bg-blue-50 rounded-xl p-6 shadow-lg w-full max-w-md mx-auto">
                  <Hosts roomDetails={roomDetails}/>
            {/* Price */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold">{currency}{roomDetails?.price}</div>
              <div className="text-sm text-gray-500">{night}</div>
            </div>

            {/* Date Picker (static display) */}
            <div className="grid grid-cols-2 gap-2 mb-4 text-sm border rounded-lg overflow-hidden">
              <div className="p-3 border-r">
                <p className="text-gray-500">Check-in</p>
                <p className="font-medium">9/7/2025</p>
              </div>
              <div className="p-3">
                <p className="text-gray-500">Checkout</p>
                <p className="font-medium">9/9/2025</p>
              </div>
            </div>

            {/* Guest Selector (static display) */}
            <div className="mb-4 border rounded-lg p-3 text-sm">
              <p className="text-gray-500">Guests</p>
              <p className="font-medium">1 guest</p>
            </div>

            {/* Reserve Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              {bookNow}
            </button>

            {/* Disclaimer */}
            <p className="text-center text-sm text-gray-500 mt-3">You won't be charged yet</p>
          </div>)  
}
export default RoomBooking;
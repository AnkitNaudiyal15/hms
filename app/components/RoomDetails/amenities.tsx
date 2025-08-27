import { amenities } from "../defaultConst";

interface roomDetailsProps {
    roomDetails: any
}
const Amenities: React.FC<roomDetailsProps> = ({ roomDetails }) => {

    return (<div>
        <h2 className="text-xl font-semibold mb-2">{amenities}</h2>
               <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc pl-5">
                 {roomDetails?.amenities?.map((item:any, key:number) => {
                   return (<li>{item}</li>)
                 })}
               </ul>
    </div>)
}

export default Amenities;
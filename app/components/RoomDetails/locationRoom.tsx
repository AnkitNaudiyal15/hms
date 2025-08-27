
interface roomDetailsProps {
    roomDetails: any
}
const LocationRoom: React.FC<roomDetailsProps> = ({ roomDetails }) => {

    return (<div>
        <iframe
            title={roomDetails?.propertyName}
            className="w-full h-full"
            src={roomDetails?.roomLocation}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>)
}

export default LocationRoom;
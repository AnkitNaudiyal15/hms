import Image from "next/image";
import { amenities, bookNow, currency, hostedByText, night } from "./defaultConst";
import ReviewCard from "./RoomDetails/ReviewCard";
import AddReview from "./RoomDetails/addReview";
import Hosts from "./RoomDetails/hosts";
import RoomBooking from "./RoomDetails/roomBooking";
import LocationRoom from "./RoomDetails/locationRoom";

export default function RoomDetails() {
  const roomDetails = {
    room: 'Deluxe King Room',
    propertyName:'Example property',
    roomDescription: `Experience luxury in our Deluxe King Room with stunning views, premium bedding,
          and modern amenities. Perfect for business and leisure travelers alike.`,
    amenities: [
      'Free Wi-Fi',
      'Air Conditioning',
      'Smart TV',
      'Room Service',
      'Private Bathroom',
      'Mini Bar',
      'Free Wi-Fi',
    ],
    price: 4999,
    mainImage: {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      name: 'Main Room '
    },
    images: [{
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      name: 'Main Room '
    }, {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      name: 'Main Room 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      name: 'Main Room '
    }, {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      name: 'Main Room 1'
    }
    ],
    hostDetails: {
      hostImg: 'https://randomuser.me/api/portraits/men/75.jpg',
      hostName: 'Rakesh',
      mobileNumber: '+91-9997603434'
    },
    roomLocation: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798889357!2d-74.259867!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAwJzAwLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1660841570000!5m2!1sen!2sus`
  }
  const reviewsData = [
    {
      reviewer: 'John Doe',
      comment: 'Great place, very clean and well-located! adsfasdfasdfadsfasddfasdf',
      rating: 5,
    },
    {
      reviewer: 'Jane Smith',
      comment: 'Nice and cozy. Host was responsive. asdfasdfasdfasdfasdfasdfasdfasdf',
      rating: 4,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Image Gallery */}

      <div className="flex flex-col md:flex-row md:gap-4 overflow-x-auto md:overflow-visible bg-white p-4 rounded-lg shadow-lg">


        <div className="flex md:grid md:grid-cols-2 gap-2 min-w-full md:min-w-0 md:w-1/3 px-2 md:px-0">
          {roomDetails?.images?.map((item, index) => {
            return (<><img src={item?.url} alt={item?.name} className="w-full h-full object-cover" />
            </>
            )
          })}

        </div>

        <div className="min-w-full md:min-w-0 md:w-2/3 hidden md:block">
          <img src={roomDetails?.mainImage?.url} alt={roomDetails?.mainImage?.name} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>


      {/* Details */}
      <div className="mt-8  bg-white p-4 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold text-gray-800">{roomDetails?.room}</h1>
        <p className="text-gray-600 mt-2">
          {roomDetails?.roomDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Amenities */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">{amenities}</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc pl-5">
              {roomDetails?.amenities?.map((item, key) => {
                return (<li>{item}</li>)
              })}
            </ul>
            <LocationRoom roomDetails={roomDetails} />
          </div>

          <RoomBooking roomDetails={roomDetails} />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <div className="max-w-xl mx-auto p-4 ">
            {/* <h2 className="text-2xl font-bold mb-4">Reviews</h2> */}
            {reviewsData.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div></div>
        <div className="">

          <div>
            <AddReview />
          </div>
        </div>

      </div>

    </div>

  );
}

import Image from "next/image";
import { amenities, bookNow, currency, hostedByText, night } from "./defaultConst";
import ReviewCard from "./RoomDetails/ReviewCard";
import AddReview from "./RoomDetails/addReview";

export default function RoomDetails() {
  const roomDetails = {
    room: 'Deluxe King Room',
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
    }
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
            <div>
              <iframe
                title="My House Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798889357!2d-74.259867!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAwJzAwLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1660841570000!5m2!1sen!2sus"
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 shadow-lg w-full max-w-md mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm mx-auto flex items-center space-x-4 mt-4 mb-4">
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
      
        </div>
            {/* Price */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold">₹12,611</div>
              <div className="text-sm text-gray-500">for 2 nights</div>
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
          </div>
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
<AddReview/>
</div>    
       </div>
        
      </div>

    </div>

  );
}

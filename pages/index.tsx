import LayoutMain from "@/app/components/layoutMain";
import "./../app/globals.css";
import BookingFilter from "@/app/components/BookingFilter";
import ResponsiveTiles from "@/app/components/responsiveTiles";


export default function Home() {
  return (
    <>
      <LayoutMain>
        <div className="p-12 bg-gray-200  mt-16" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585153756-8402a4c014a5?auto=format&fit=crop&w=1600&q=80')`,
        }}>
          <BookingFilter />
        </div>
        <ResponsiveTiles />
      </LayoutMain>
    </>

  );
}




import LayoutMain from "@/app/components/layoutMain";
import "../../app/globals.css";
//app/globals.css

import RoomDetails from "@/app/components/roomDetails";


export default function Home({ params }: { params: { id: string }}) {
  return (
    <>
          <LayoutMain>
              <RoomDetails />
          </LayoutMain>
    </>

  );
}
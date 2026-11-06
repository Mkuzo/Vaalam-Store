import { APIProvider,Map } from "@vis.gl/react-google-maps"
// import { APIProvider,Map } from "@vis"
export default function GooGleMap(){
    console.log(Map)
    return(
        <APIProvider  apiKey="">
            <Map defaultCenter={{ lat: -27.61641 , lng: 32.03861 }} defaultZoom={15}/>
        </APIProvider>
    )
}
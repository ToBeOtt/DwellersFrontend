import MapView from '../../../components/neighbourhood/map/MapView';

export default function MapPage() { 
  
  
return (
    <div className="flex flex-row xl:flex-col">
        <div className="xl:w-[30vw]">
            <h1>Location, location</h1>
        </div>
        <MapView />
    </div>
   

)}
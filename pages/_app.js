import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar , Footer, VenueCard, Slider, Service, Filter } from "../components/componentsindex";



const MyApp = ({ Component, pageProps }) => (
  
  <div>
    <NavBar />
    <Slider />
    {/*<Filter />
    <Service />*/}
    <VenueCard />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;

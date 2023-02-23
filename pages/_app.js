import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar , Footer, VenueCard, Slider, Service, Filter, VenueCategory } from "../components/componentsindex";



const MyApp = ({ Component, pageProps }) => (
  
  <div>
    <NavBar />
    <Slider />
    {/*<Filter />
    <Service />*/}
    <VenueCategory />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;

import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar , Footer, VenueCard, Hero, Service, Filter, VenueCategory } from "../components/componentsindex";



const MyApp = ({ Component, pageProps }) => (
  
  <div>
    <NavBar />
    <Hero />
    {/*<Filter />
    <Service />*/}
    <VenueCategory />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;

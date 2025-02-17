


import About from "./About";
import AdvisorsBackers from "./AdvisorsBackers";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import HelpCenter from "./HelpCenter";
import Home01 from "./extra_home";
import Home02 from "./Home02";
import Home03 from "./Home03";
import Nfts from "./Nfts";
import ParticipantAssets from "./ParticipantAssets";
import Partners from "./Partners";
import Team from "./Team";
import VisionsMission from "./VisionsMission";





const routes = [
  { path: '/', component: <Home02 />},
/*
  
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/visions-mission', component: <VisionsMission />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/participants-assets', component: <ParticipantAssets />},
  { path: '/advisors-backers', component: <AdvisorsBackers />},
  { path: '/partners', component: <Partners />},
  { path: '/about', component: <About />},
*/
  { path: '/nfts', component: <Nfts />},
  { path: '/equipo', component: <Team />},
  { path: '/contacto', component: <Contact />},



]

export default routes;
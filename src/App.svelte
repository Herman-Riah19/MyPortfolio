<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Aboute from "./routes/Aboute.svelte";
  import Navbar from "./component/header/Navbar.svelte";
import Footer from "./component/Footer.svelte";
import Project from "./routes/Project.svelte";
import Contact from "./routes/Contact.svelte";

  export let url = "/";
</script>

<Router {url}>
    <Navbar />
    <div>
      <Route path="/about"><Aboute /></Route>
      <Route path="/"><Home /></Route>
      <Route path="/projects"><Project/></Route>
      <Route path="/contact"><Contact /></Route>
    </div>
    <Footer />
</Router>
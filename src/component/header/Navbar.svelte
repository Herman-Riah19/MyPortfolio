<script lang="ts">
  import Container from "../container/Container.svelte";
  import TextGradient from "../typography/TextGradient.svelte";
</script>

<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <Container>
      <a class="navbar-brand" href="index.html">
        <h1><TextGradient>Hermann Christian</TextGradient></h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ><span class="navbar-toggler-icon" /></button
      >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <li class="nav-item"><a href="#home" class="nav-link">Accueil</a></li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#resumes" class="nav-link">Résumés</a>
          </li>
          <li class="nav-item">
            <a href="#technologies" class="nav-link">Technologies</a>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
</header>

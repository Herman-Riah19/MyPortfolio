
<script lang='ts'>
    import { Link } from 'svelte-routing';
    import Container from '../container/Container.svelte'
import TextGradient from '../typography/TextGradient.svelte';
</script>

<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <Container>
            <a class="navbar-brand" href="index.html">
                <h1><TextGradient>Hermann Christian</TextGradient></h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                    <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                    <li class="nav-item"><Link to="/projects" class="nav-link">Projects</Link></li>
                    <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                </ul>
            </div>
        </Container>   
    </nav>
</header>
<script>
import Container from "./container/Container.svelte"
import SectionTitle from "./typography/SectionTitle.svelte";
</script>
<section class="bg-light py-2 mt-5">
    <Container classname="px-3">
        <div class="row gx-5 justify-content-center">
            <div class="col-xxl-8">
                <div class="text-center my-5">
                    <SectionTitle> About me </SectionTitle>
                    <p class="text-muted">
                    I am a young web developer, specializing in the development of dynamic applications,
                     interactive and can answer different data processing problems in a company.
                    </p>
                    <div class="d-flex justify-content-center fs-2 gap-4">
                        <a class="text-gradient" href="#!"><i class="bi bi-twitter"></i></a>
                        <a class="text-gradient" href="#!"><i class="bi bi-linkedin"></i></a>
                        <a class="text-gradient" href="#!"><i class="bi bi-github"></i></a>
                    </div>
                </div>
            </div>        
    </Container>
</section>
<a
  href="#"
  class="back-to-top d-flex align-items-center justify-content-center"
>
  <i class="bi bi-arrow-up-short"></i>
</a>

<style lang="scss">
  .back-to-top {
    position: fixed;
    right: 15px;
    bottom: 15px;
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #212529 100%);
    width: 40px;
    height: 40px;
    border-radius: 50px;
    transition: all 0.4s;

    i {
      font-size: 24px;
      color: #fff;
      line-height: 0;
    }

    &:hover {
      background: -linear-gradient(315deg, #2e3cd4 0%, #1a4775 100%);;
      color: #fff;
    }

    .active {
      visibility: visible;
      opacity: 1;
    }
  }
</style>

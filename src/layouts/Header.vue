<template>
  <div class="fixed-top">
    <div
      class="flex display-none px-8 h-11 items-center justify-between bg-[#f2f2f2]"
    >
      <div class="flex">
        <h2 class="text-red-500">NEWS</h2>
        <h2 class="text-[#000]">ROOM</h2>
      </div>
      <div
        class="flex text-2xl font-medium bg-black text-white items-center p-2"
      >
        <div class="px-6 text-2xl font-medium text-white">html</div>
        <div class="px-6 flex text-2xl font-medium text-white">|</div>
        <div class="text-base font-normal text-white">ADS 700x700px</div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand popular-container" href="#">
          <div class="flex">
            <h2 class="text-red-500">NEWS</h2>
            <h2 class="text-[#000]">ROOM</h2>
          </div></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/category">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/single">Single News</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Category</a></li>
                <li><a class="dropdown-item" href="#">Single new</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
@media (max-width: 576px) {
  .display-none {
    display: none;
  }
  .popular-container {
    display: inline-block !important;
  }
}
.popular-container {
  display: none;
}
</style>

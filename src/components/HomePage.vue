<template>
  <div class="flex flex-col w-full min-h-screen bg-slate-200">
    <div>
      <div class="flex h-11 mx-8 items-center justify-between">
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
      <div class="flex justify-between items-center bg-white">
        <div class="flex h-11 items-center justify-between">
          <div class="text-sm font-normal ml-5 px-3 leading-[2.8rem] bg-[red]">
            Home
          </div>
          <div class="text-sm font-normal px-3">Categories</div>
          <div class="text-sm font-normal px-3">Single News</div>
          <div class="text-sm font-normal px-3">Dropdown</div>
        </div>
        <div class="flex items-center mr-8">
          <input
            type="text"
            class="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
          <i
            class="bi bi-search bg-[#ccc] px-3 leading-[2.5rem] items-center"
          ></i>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center flex-grow">
      <div class="w-3/5">
        <div class="row gx-0 mt-4">
          <div class="col flex items-center bg-white">
            <img class="w-12 h-12" src="../assets/img_title.jpg" />
            <div class="font-light text-xs px-2">
              Lorem ipsum dolor sit amet sit amet
            </div>
          </div>
          <div class="col ml-4 flex items-center bg-white">
            <img class="w-12 h-12" src="../assets/img_title.jpg" />
            <div class="font-light text-xs px-2">
              Lorem ipsum dolor sit amet sit amet
            </div>
          </div>
          <div class="col ml-4 flex items-center bg-white">
            <img class="w-12 h-12" src="../assets/img_title.jpg" />
            <div class="font-light text-xs px-2">
              Lorem ipsum dolor sit amet sit amet
            </div>
          </div>
        </div>
        <!-- category -->
        <div class="row gx-0 mt-4">
          <div class="col-8 bg-white">
            <div
              id="carouselExampleControlsNoTouching"
              class="carousel slide"
              data-bs-touch="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/img_slider2.jpg"
                    class="d-block w-100 object-cover"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/img_slider1.jpg"
                    class="d-block w-100 object-cover"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/img_slider2.jpg"
                    class="d-block w-100 object-cover"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-4 pl-3 flex flex-col justify-between">
            <div class="row gx-0 h-10 flex items-center bg-white">
              <div class="flex-1">Categories</div>
              <div class="flex-1 font-light text-xs text-right mr-4">
                View All
              </div>
            </div>
            <div class="row gx-0 items-center relative">
              <img
                class="w-12 h-18 object-cover"
                src="../assets/img_title.jpg"
              />
              <div class="font-light text-center text-xs absolute text-overlay">
                Lorem ipsum dolor sit amet sit amet
              </div>
            </div>
            <div class="row gx-0 items-center relative">
              <img
                class="w-12 h-12 object-cover"
                src="../assets/img_slider2.jpg"
              />
              <div class="font-light text-xs absolute text-overlay">
                Lorem ipsum dolor sit amet sit amet
              </div>
            </div>
            <div class="row gx-0 items-center relative">
              <img
                class="w-12 h-12 object-cover"
                src="../assets/img_slider1.jpg"
              />
              <div class="font-light text-xs text-overlay">
                Lorem ipsum dolor sit amet sit amet
              </div>
            </div>
            <div class="row gx-0 items-center relative">
              <img
                class="w-12 h-12 object-cover"
                src="../assets/img_title.jpg"
              />
              <div class="font-light text-xs text-overlay">
                Lorem ipsum dolor sit amet sit amet
              </div>
            </div>
          </div>
        </div>
        <!-- category -->
        <div class="row gx-0 mt-4">
          <div class="row gx-0 h-10 flex items-center bg-white">
            <div class="flex-1 font-bold ml-4">Futured</div>
            <div class="flex-1 font-light text-xs text-right mr-4">
              View All
            </div>
          </div>

          <div class="mx-auto">
            <div class="row mt-4 flex">
              <div class="col col-custom">
                <img src="../assets/img_title.jpg" class="img-custom" />
                <div class="text-overlay mb-2">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-custom">
                <img src="../assets/img_title.jpg" class="img-custom" />
                <div class="text-overlay mb-2">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-custom">
                <img src="../assets/img_title.jpg" class="img-custom" />
                <div class="text-overlay mb-2">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-custom">
                <img src="../assets/img_title.jpg" class="img-custom" />
                <div class="text-overlay mb-2">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row gx-0 mt-4">
          <div class="row gx-0 h-10">
            <div class="col flex justify-between items-center bg-white">
              <div class="font-bold ml-4">Business</div>
              <div class="font-light text-xs text-right mr-4">View All</div>
            </div>
            <div class="col flex justify-between items-center bg-white ml-8">
              <div class="font-bold ml-4">Technogory</div>
              <div class="font-light text-xs text-right mr-4">View All</div>
            </div>
          </div>

          <div class="mx-auto">
            <div class="row gx-0 mt-4 flex">
              <div class="col col-enter bg-white">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-enter bg-white ml-5">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-enter bg-white ml-5">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-enter bg-white ml-5">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row gx-0 mt-4">
          <div class="row gx-0 h-10">
            <div class="col flex justify-between items-center bg-white">
              <div class="font-bold ml-4">Entertaiment</div>
              <div class="font-light text-xs text-right mr-4">View All</div>
            </div>
            <div class="col flex justify-between items-center bg-white ml-8">
              <div class="font-bold ml-4">Sports</div>
              <div class="font-light text-xs text-right mr-4">View All</div>
            </div>
          </div>

          <div class="mx-auto">
            <div class="row gx-0 mt-4 flex">
              <div class="col col-enter bg-white">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-enter bg-white ml-5">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-enter bg-white ml-5">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="col col-enter bg-white ml-5">
                <img src="../assets/img_title.jpg" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- --------------- -->
        <div class="row gx-0 mt-4">
          <div class="flex">
            <div class="mx-auto">
              <div class="flex justify-between items-center bg-white p-2">
                <div class="flex flex-1 justify-between items-center bg-white">
                  <div class="font-bold ml-4">Popular</div>
                  <div class="font-light text-xs text-right mr-4">View All</div>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="flex-1 bg-white">
                  <img src="../assets/img_title.jpg" class="w-full h-auto" />
                  <div class="mt-4">
                    <div class="font-thin text-[10px] mx-4">
                      Technology / January 01, 2024
                    </div>
                    <div class="font-medium text-[16px] mx-4">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                    <div class="font-thin text-[12px] mx-4 mb-2">
                      Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit
                      amet sit amet amet sit amet
                    </div>
                  </div>
                </div>
                <div class="flex-1 bg-white ml-4">
                  <img src="../assets/img_title.jpg" class="w-full h-auto" />
                  <div class="mt-4">
                    <div class="font-thin text-[10px] mx-4">
                      Technology / January 01, 2024
                    </div>
                    <div class="font-medium text-[16px] mx-4">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                    <div class="font-thin text-[12px] mx-4 mb-2">
                      Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit
                      amet sit amet amet sit amet
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="mx-auto">
                <div
                  class="flex justify-between items-center bg-white p-2 ml-4"
                >
                  <div
                    class="flex flex-1 justify-between items-center bg-white"
                  >
                    <div class="font-bold ml-4">Popular</div>
                  </div>
                </div>
                <div class="mt-4 ml-4">
                  <div class="row gx-0">
                    <div class="col bg-[#38569e] p-1 text-[#fff]">
                      <i class="bi bi-facebook text-[#fff] ml-2"></i>
                      12,345 Fans
                    </div>
                    <div class="col bg-[#52aaf4] ml-2 p-1 text-[#fff]">
                      <i class="bi bi-twitter text-[#fff] ml-2"></i>
                      12,345 Fans1
                    </div>
                  </div>
                  <div class="row gx-0 mt-2 text-[#fff]">
                    <div class="col bg-[#0285ad] p-1">
                      <i class="bi bi-linkedin text-[#fff] ml-2"></i>
                      12,345 Fans
                    </div>
                    <div class="col bg-[#c7369d] ml-2 p-1 text-[#fff]">
                      <i class="bi bi-instagram text-[#fff] ml-2"></i>
                      12,345 Fans1
                    </div>
                  </div>
                  <div class="row gx-0 mt-2 text-[#fff]">
                    <div class="col bg-[#ff0000] p-1">
                      <i class="bi bi-youtube text-[#fff] ml-2"></i>
                      12,345 Fans
                    </div>
                    <div class="col bg-[#000] ml-2 p-1">
                      <i class="bi bi-apple text-[#fff] ml-2"></i>
                      12,345 Fans1
                    </div>
                  </div>
                  <div class="row gx-0 mt-4">
                    <div class="bg-white p-2">
                      <div class="font-bold ml-4">Newsletter</div>
                    </div>
                  </div>
                  <div class="row gx-0 mt-4">
                    <div class="bg-white p-2">
                      <div class="font-thin text-[14px] ml-4">
                        Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor
                        sit
                      </div>
                      <div class="flex items-center p-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Email"
                          aria-label="Dollar amount (with dot and two decimal places)"
                        />
                        <i
                          class="bi bi-search bg-[#ccc] px-3 leading-[2.5rem] items-center"
                        ></i>
                      </div>
                      <div class="font-thin text-[12px] ml-4 mt-1">
                        Lorem ipsum dolor sit amet sit amet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------footer-------- -->
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./Footer.vue";
export default {
  name: "HomePage",
  components: {
    Footer,
  },
};
</script>
<style scoped>
.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
}
.col-custom {
  position: relative;
  height: 250px;
}
.col-enter {
  position: relative;
  height: 250px;
}
.img-custom {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the column area */
}
</style>

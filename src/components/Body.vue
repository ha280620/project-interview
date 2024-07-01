<template>
  <div class="flex mt-20 w-full items-center justify-center flex-grow">
    <div class="w-3/5">
      <div class="row gx-0 mt-4">
        <div class="col-md flex items-center bg-white">
          <img
            class="w-12 h-12"
            src="https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU"
          />
          <div class="font-light text-xs px-2">
            Lorem ipsum dolor sit amet sit amet dolor sit amet sit amet
          </div>
        </div>
        <div class="col container-category ml-4 flex items-center bg-white">
          <img
            class="w-12 h-12"
            src="https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU"
          />
          <div class="font-light text-xs px-2">
            Lorem ipsum dolor sit amet sit amet dolor sit amet sit amet
          </div>
        </div>
        <div class="col ml-4 container-category flex items-center bg-white">
          <img
            class="w-12 h-12"
            src="https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU"
          />
          <div class="font-light text-xs px-2">
            Lorem ipsum dolor sit amet sit amet dolor sit amet sit amet
          </div>
        </div>
      </div>
      <!-- category -->
      <div class="row gx-0 mt-4">
        <div class="col-md-8">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item carousel-container active"
                data-bs-interval="10000"
              >
                <img
                  src="../assets/img_slider2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption">
                  <div class="font-thin text-[12px]">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[20px] carousel-text">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div
                class="carousel-item carousel-container"
                data-bs-interval="2000"
              >
                <img
                  src="../assets/img_slider2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption">
                  <div class="font-thin text-[12px] mx-4">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[20px] carousel-text">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
              <div class="carousel-item carousel-container">
                <img
                  src="../assets/img_slider2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption">
                  <div class="font-thin text-[12px]">
                    Technology / Janualy 01,2024
                  </div>
                  <div class="font-medium text-[20px] carousel-text">
                    Lorem ipsum dolor sit amet sit amet
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
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
              data-bs-target="#carouselExampleInterval"
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
        <div class="col-md-4 pl-4 flex flex-column justify-between">
          <div
            class="row col-feature ml-6 gx-0 h-10 d-flex align-items-center bg-white"
          >
            <div class="flex-1">Categories</div>
            <div class="flex-1 font-light text-xs text-right mr-4">
              View All
            </div>
          </div>
          <div
            class="row col-feature gx-0 d-flex align-items-center relative custom-height"
          >
            <img
              class="w-12 h-100 object-cover"
              src="../assets/img_title.jpg"
            />
            <div
              class="font-light text-center text-[16px] absolute text-overlay-category"
            >
              Sports
            </div>
          </div>
          <div
            class="row gx-0 col-feature d-flex align-items-center relative custom-height"
          >
            <img
              class="w-12 h-100 object-cover"
              src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            />
            <div
              class="font-light text-center text-[16px] absolute text-overlay-category"
            >
              Business
            </div>
          </div>
          <div
            class="row gx-0 col-feature d-flex align-items-center relative custom-height"
          >
            <img
              class="w-12 h-100 object-cover"
              src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
            />
            <div
              class="font-light text-center text-[16px] absolute text-overlay-category"
            >
              Technology
            </div>
          </div>
          <div
            class="row gx-0 col-feature d-flex align-items-center relative custom-height"
          >
            <img
              class="w-12 h-100 object-cover"
              src="https://picsum.photos/id/237/200/300"
            />
            <div
              class="font-light text-center text-[16px] absolute text-overlay-category"
            >
              Entertaiment
            </div>
          </div>
        </div>
      </div>

      <div class="row gx-0 mt-4">
        <div class="row gx-0 h-10 flex items-center bg-white">
          <div class="flex-1 font-bold ml-4">Futured</div>
          <div class="flex-1 font-light text-xs text-right mr-4">View All</div>
        </div>

        <div class="mx-auto">
          <div class="row mt-4">
            <div class="col-md col-custom">
              <img
                src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
                class="img-custom"
              />
              <div class="text-overlay mb-2">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-feature col-custom">
              <img
                src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w"
                class="img-custom"
              />
              <div class="text-overlay mb-2">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-feature col-custom">
              <img
                src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                class="img-custom"
              />
              <div class="text-overlay mb-2">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-feature col-custom">
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
          <div
            class="col display-none flex justify-between items-center bg-white ml-8"
          >
            <div class="font-bold ml-4">Technogory</div>
            <div class="font-light text-xs text-right mr-4">View All</div>
          </div>
        </div>

        <div class="mx-auto">
          <div class="row gx-0 mt-4">
            <div class="col-md col-enter bg-white">
              <img
                src="https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI"
              />
              <div class="mt-md-4">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-enter bg-white ml-5 mg-left">
              <img
                src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
              />
              <div class="mt-md-4">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-enter bg-white ml-5 mg-left">
              <img
                src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"
              />
              <div class="mt-md-4">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-enter bg-white ml-5 mg-left">
              <img
                src="https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU"
              />
              <div class="mt-md-4">
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
          <div
            class="col flex display-none justify-between items-center bg-white ml-8"
          >
            <div class="font-bold ml-4">Sports</div>
            <div class="font-light text-xs text-right mr-4">View All</div>
          </div>
        </div>

        <div class="mx-auto">
          <div class="row gx-0 mt-4 flex">
            <div class="col-md col-enter bg-white">
              <img
                src="https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
              />
              <div class="mt-md-4">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-enter bg-white mg-left ml-5">
              <img
                src="https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908"
              />
              <div class="mt-md-4">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-enter bg-white mg-left ml-5">
              <img
                src="https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q"
              />
              <div class="mt-md-4">
                <div class="font-thin text-[10px] mx-4">
                  Technology / Janualy 01,2024
                </div>
                <div class="font-medium text-[16px] mx-4">
                  Lorem ipsum dolor sit amet sit amet
                </div>
              </div>
            </div>
            <div class="col-md col-enter bg-white mg-left ml-5">
              <img
                src="https://fastly.picsum.photos/id/55/4608/3072.jpg?hmac=ahGhylwdN52ULB37deeMZX6T_G7NiERtoPhwydMvUKQ"
              />
              <div class="mt-md-4">
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
          <div class="mx-auto container-category">
            <div class="flex justify-between items-center bg-white p-2">
              <div class="flex flex-1 justify-between items-center bg-white">
                <div class="font-bold ml-4">Popular</div>
                <div class="font-light text-xs text-right mr-4">View All</div>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="flex-1 bg-white">
                <img
                  src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
                  class="w-full h-auto"
                />
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
                <img
                  src="https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0"
                  class="w-full h-auto"
                />
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

          <div class="col-md-4">
            <div class="mx-auto">
              <div
                class="flex justify-between items-center bg-white p-2 ml-4 mg-left-po"
              >
                <div class="flex flex-1 justify-between items-center bg-white">
                  <div class="font-bold ml-4">Follow us</div>
                </div>
              </div>

              <div class="popular-container">
                <div class="flex bg-white mt-2 items-center p-2">
                  <img class="w-12 h-12" src="../assets/img_title.jpg" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                  </div>
                </div>
                <div class="flex bg-white mt-2 items-center p-2">
                  <img class="w-12 h-12" src="../assets/img_title.jpg" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                  </div>
                </div>
                <div class="flex bg-white mt-2 items-center p-2">
                  <img class="w-12 h-12" src="../assets/img_title.jpg" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                  </div>
                </div>
                <div class="flex bg-white mt-2 items-center p-2">
                  <img class="w-12 h-12" src="../assets/img_title.jpg" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                  </div>
                </div>
                <div class="flex bg-white mt-2 items-center p-2">
                  <img class="w-12 h-12" src="../assets/img_title.jpg" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                  </div>
                </div>
                <div class="flex bg-white mt-2 items-center p-2">
                  <img class="w-12 h-12" src="../assets/img_title.jpg" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 ml-4 mg-left">
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
                      Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit
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
</template>
<script>
export default {
  name: "Body",
};
</script>
<style scoped>
.custom-height {
  height: 10vh;
  position: relative;
}
@media (max-width: 850px) {
  /* xl screens and up */
  .container-category {
    display: none;
  }
}
@media (max-width: 1250px) {
  /* xl screens and up */
  .custom-height {
    height: 6vh;
  }
}
@media (max-width: 576px) {
  /* xl screens and up */
  .col-feature {
    margin-top: 20px;
  }
  .display-none {
    display: none;
  }
  .mg-left {
    margin-left: 0px !important;
    margin-top: 20px;
  }
  .mg-left-po {
    margin-left: 0px !important;
    margin-top: 5px;
  }
  .popular-container {
    display: inline-block !important;
  }
  .carousel-container {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .carousel-text {
    font-size: 12px;
  }
}
.popular-container {
  display: none;
}
.custom-height img {
  height: 30%;
}
.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
}
.text-overlay-category {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 40%;
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
  object-fit: cover;
}
</style>

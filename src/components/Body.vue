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
          <div class="current-time flex-1">
            {{ currentDate }}
          </div>
          <div class="flex-1 font-light text-xs text-right mr-4">View All</div>
        </div>

        <div class="mx-auto">
          <div class="row mt-4">
            <div
              v-for="product in featureProducts"
              :key="product.id"
              class="col-md col-custom col-feature"
            >
              <img :src="product.image" class="img-custom" />
              <div class="text-overlay mb-2">
                <div class="font-thin text-[10px] mx-4">
                  {{ product.category }} / {{ product.date }}
                </div>
                <div class="font-medium text-[16px] mx-4">
                  {{ product.description }}
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
            <div
              v-for="product in businessProducts"
              :key="product.id"
              :class="[
                'col-md col-enter bg-white mg-left',
                { 'ml-5': product.id > 1 },
              ]"
            >
              <img :src="product.image" />
              <div class="mt-2">
                <div class="font-thin text-[10px] mx-4">
                  {{ product.category }} / {{ product.date }}
                </div>
                <div class="font-medium text-[16px] mx-4">
                  {{ product.description }}
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
            <div
              v-for="product in businessProducts"
              :key="product.id"
              :class="[
                'col-md col-enter bg-white mg-left',
                { 'ml-5': product.id > 1 },
              ]"
            >
              <img :src="product.image" />
              <div class="mt-2">
                <div class="font-thin text-[10px] mx-4">
                  {{ product.category }} / {{ product.date }}
                </div>
                <div class="font-medium text-[16px] mx-4">
                  {{ product.description }}
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
              <div
                v-for="product in techProducts"
                :key="product.id"
                class="flex-1 bg-white"
                :class="['flex-1 bg-white', { 'ml-5': product.id > 1 }]"
              >
                <img :src="product.image" />
                <div class="mt-4">
                  <div class="font-thin text-[10px] mx-4">
                    {{ product.category }} / {{ product.date }}
                  </div>
                  <div class="font-medium text-[16px] mx-4">
                    {{ product.name }}
                  </div>
                  <div class="font-thin text-[12px] mx-4 mb-2">
                    {{ product.description }}
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
        <div class="flex">
          <div class="mx-auto container-category">
            <div class="flex mt-1">
              <div class="flex-1 bg-white">
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
                  <img
                    class="w-12 h-12"
                    src="https://fastly.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs"
                  />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Relaxation Retreat in the Maldives
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 bg-white ml-4">
                <div class="flex bg-white mt-2 items-center p-2">
                  <img class="w-12 h-12" src="../assets/img_title.jpg" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[16px] mx-2">
                      Journey Through the History of Egypt
                    </div>
                  </div>
                </div>
                <div class="flex bg-white mt-2 items-center p-2">
                  <img
                    class="w-12 h-12"
                    src="https://fastly.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs"
                  />
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
            </div>
            <div
              class="flex text-2xl font-medium bg-black text-white items-center mt-2 p-2"
            >
              <div class="px-6 text-2xl font-medium text-white">html</div>
              <div class="px-6 flex text-2xl font-medium text-white">|</div>
              <div class="text-base font-normal text-white">ADS 700x700px</div>
            </div>
            <div class="row gx-0 mt-2">
              <div class="flex-1">
                <div class="flex-1 bg-white">
                  <img
                    src="https://fastly.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E"
                    class="w-full h-auto"
                  />
                  <div class="mt-4">
                    <div class="font-thin text-[10px] mx-4">
                      Technology / January 01, 2024
                    </div>
                    <div class="font-medium text-[16px] mx-4">
                      Discover the Serenity of Bali's Beaches
                    </div>
                    <div class="font-thin text-[12px] mx-4 mb-2">
                      City Lights: Vibrant Tokyo Night,City Lights: Vibrant
                      Tokyo Night
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
                    <div class="font-medium text-[14px] mx-2">
                      Relaxation Retreat in the Maldives
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
                    <div class="font-medium text-[14px] mx-2">
                      Relaxation Retreat in the Maldives
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex-1 ml-4">
                <div class="flex-1 bg-white">
                  <img
                    src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ"
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
                      Charming Villages of Provence, France, Charming Villages
                      of Provence, France
                    </div>
                  </div>
                </div>
                <div class="flex bg-white mt-2 items-center p-2">
                  <img
                    class="w-12 h-12"
                    src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ"
                  />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">Technology</span> /
                      <span>January 01, 2024</span>
                    </div>
                    <div class="font-medium text-[14px] mx-2">
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
                    <div class="font-medium text-[14px] mx-2">
                      Lorem ipsum dolor sit amet sit amet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="mx-auto">
              <div class="flex display-none mt-3 items-center ml-2 p-2">
                <img src="../assets/img_title.jpg" />
              </div>
              <div
                class="flex justify-between items-center bg-white p-2 mt-2 ml-4 mg-left-po"
              >
                <div class="flex flex-1 justify-between items-center bg-white">
                  <div class="font-bold ml-4">Trainding</div>
                </div>
              </div>

              <div class="ml-4 mg-left-po">
                <div
                  v-for="product in traindingProducts"
                  :key="product.id"
                  class="flex bg-white mt-2 items-center p-2"
                >
                  <img class="w-12 h-12" :src="product.image" />
                  <div>
                    <div class="font-thin text-[10px] mx-2">
                      <span class="text-[red] font-medium">{{
                        product.category
                      }}</span>
                      /
                      <span> {{ product.date }}</span>
                    </div>
                    <div class="font-medium text-[14px] mx-2">
                      {{ product.description }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 ml-4 mg-left">
                <div class="row gx-0 mt-4">
                  <div class="bg-white p-2">
                    <div class="font-bold ml-4">Tag</div>
                  </div>
                  <div class="flex ml-1">
                    <span
                      class="border text-sm text-[#8c9499] border-[#8c9499] p-1"
                      >categories</span
                    >
                    <span
                      class="border text-sm text-[#8c9499] border-[#8c9499] p-1 ml-1"
                      >Business</span
                    >
                    <span
                      class="border text-sm text-[#8c9499] border-[#8c9499] p-1 ml-1"
                      >Corparate</span
                    >
                  </div>
                  <div class="flex ml-1">
                    <span
                      class="border text-sm text-[#8c9499] border-[#8c9499] p-1"
                      >categories</span
                    >
                    <span
                      class="border text-sm text-[#8c9499] border-[#8c9499] p-1 ml-1"
                      >Business</span
                    >
                    <span
                      class="border text-sm text-[#8c9499] border-[#8c9499] p-1 ml-1"
                      >Corparate</span
                    >
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
import {
  getFeatureProducts,
  getTechProducts,
  getBusinessProducts,
  getEntertaimentProducts,
  getTraindingProducts,
} from "../store/db";
export default {
  name: "Body",
  data() {
    return {
      featureProducts: [],
      techProducts: [],
      businessProducts: [],
      entertaimentProducts: [],
      traindingProducts: [],
      currentDate: "",
    };
  },
  methods: {
    getCurrentDate() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const year = now.getUTCFullYear();
      const day = now.getUTCDate();
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const month = String(now.getUTCMonth() + 1).padStart(2, "0");
      this.currentDate = `${year}-${month}-${day} ${hours}:${minutes}${seconds}`;
    },
  },
  mounted() {
    getFeatureProducts().then((products) => {
      this.featureProducts = products;
    });
    getTechProducts().then((products) => {
      this.techProducts = products;
    });
    getBusinessProducts().then((products) => {
      this.businessProducts = products;
    });
    getEntertaimentProducts().then((products) => {
      this.entertaimentProducts = products;
    });
    getTraindingProducts().then((products) => {
      this.traindingProducts = products;
    });
    this.getCurrentDate();
    setInterval(this.getCurrentDate, 1000);
  },
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
.current-date {
  font-size: 24px;
  font-family: Arial, sans-serif;
  color: #333;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>

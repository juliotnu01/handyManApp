<template>
    <ion-page>
        <div class="flex justify-between w-full ">
            <ion-menu-button></ion-menu-button>
            <div class="flex  justify-center ">
                <img class=" w-34 h-6 self-center" :src="logoname" alt="" srcset="">
                <img class=" w-10 h-10 self-center" :src="logo" alt="" srcset="">
            </div>
            <ion-button fill="clear" color="dark" class=" self-center mr-1">
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000"
                        d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                </svg>
                <ion-badge color="black">1</ion-badge>
            </ion-button>
        </div>
        <ion-content  class="h-[100rem] relative">
            <div class=" h-[3rem] mx-4 mt-2 -mb-2 fixed w-11/12 z-[100] ">
                <label for="search" class="flex relative ">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class="absolute mt-[0.68rem] ml-2  ">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5C10.7763 14.5 11.5046 14.3041 12.1403 13.9596C12.5244 13.7514 12.8751 13.4888 13.182 13.182C13.4888 12.8751 13.7514 12.5244 13.9596 12.1403C14.3041 11.5046 14.5 10.7763 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 11.032 15.7388 12.0052 15.2784 12.855C15.1212 13.145 14.9409 13.4206 14.7399 13.6792L20.003 18.9423L18.9423 20.003L13.6792 14.7399C13.4206 14.9408 13.1451 15.1212 12.855 15.2784C12.0052 15.7388 11.032 16 10 16C6.68629 16 4 13.3137 4 10Z"
                            fill="#1F2328" />
                    </svg>
                    <input type="text" id="search" placeholder="¿Que es lo que estas buscando?"
                        class=" placeholder:text-red-700 pl-8 bg-red-300 w-full h-10 rounded-xl focus:outline-none shadow-md">
                </label>
            </div>
            <div class="mt-16 w-11/12  h-[6rem] mx-auto ">
                <swiper :slidesPerView="4" :loop="true" :spaceBetween="30" :modules="modules" class="h-[5rem]">
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">
                        <svg width="40px" height="40px" viewBox="0 0 512 512" class=" self-center text-red-400 ">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="add" fill="currentColor" transform="translate(42.666667, 64.000000)">
                                    <path
                                        d="M365.491733,234.665926 C339.947827,276.368766 302.121072,321.347032 252.011468,369.600724 L237.061717,383.7547 C234.512147,386.129148 231.933605,388.511322 229.32609,390.901222 L213.333333,405.333333 C205.163121,398.070922 197.253659,390.878044 189.604949,383.7547 L174.655198,369.600724 C124.545595,321.347032 86.7188401,276.368766 61.174934,234.665926 L112.222458,234.666026 C134.857516,266.728129 165.548935,301.609704 204.481843,339.08546 L213.333333,347.498667 L214.816772,346.115558 C257.264819,305.964102 290.400085,268.724113 314.444476,234.665648 L365.491733,234.665926 Z M149.333333,58.9638831 L213.333333,186.944 L245.333333,122.963883 L269.184,170.666667 L426.666667,170.666667 L426.666667,213.333333 L247.850667,213.333333 L213.333333,282.36945 L149.333333,154.368 L119.851392,213.333333 L3.55271368e-14,213.333333 L3.55271368e-14,170.666667 L93.4613333,170.666667 L149.333333,58.9638831 Z M290.133333,0 C353.756537,0 405.333333,51.5775732 405.333333,115.2 C405.333333,126.248908 404.101625,137.626272 401.63821,149.33209 L357.793994,149.332408 C360.62486,138.880112 362.217829,128.905378 362.584434,119.422244 L362.666667,115.2 C362.666667,75.1414099 330.192075,42.6666667 290.133333,42.6666667 C273.651922,42.6666667 258.124715,48.1376509 245.521279,58.0219169 L241.829932,61.1185374 L213.366947,86.6338354 L184.888885,61.1353673 C171.661383,49.2918281 154.669113,42.6666667 136.533333,42.6666667 C96.4742795,42.6666667 64,75.1409461 64,115.2 C64,125.932203 65.6184007,137.316846 68.8727259,149.332605 L25.028457,149.33209 C22.5650412,137.626272 21.3333333,126.248908 21.3333333,115.2 C21.3333333,51.5767968 72.9101302,0 136.533333,0 C166.046194,0 192.966972,11.098031 213.350016,29.348444 C233.716605,11.091061 260.629741,0 290.133333,0 Z"
                                        id="Combined-Shape">

                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Cuidado de la
                            salud</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" class=" self-center text-red-400 ">
                            <path
                                d="M18.5 3H16C15.7239 3 15.5 3.22386 15.5 3.5V3.55891L19 6.35891V3.5C19 3.22386 18.7762 3 18.5 3Z"
                                fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                                fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20.75 10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5ZM12.0494 13.25C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827C15.75 16.8679 15.75 16.9091 15.75 16.9506L15.75 21.25H14.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494Z"
                                fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                                fill="currentColor" />
                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Hogar</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" class=" self-center text-red-400">
                            <path
                                d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z"
                                stroke="currentColor" stroke-width="1.5" />
                            <path d="M16.5 20V16M16.5 20H19.5M16.5 20H13.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M2 11V10.25C1.58579 10.25 1.25 10.5858 1.25 11H2ZM8 11H8.75C8.75 10.5858 8.41421 10.25 8 10.25V11ZM2 11.75H8V10.25H2V11.75ZM7.25 11V17H8.75V11H7.25ZM2.75 17V11H1.25V17H2.75ZM5 19.25C3.75736 19.25 2.75 18.2426 2.75 17H1.25C1.25 19.0711 2.92893 20.75 5 20.75V19.25ZM7.25 17C7.25 18.2426 6.24264 19.25 5 19.25V20.75C7.07107 20.75 8.75 19.0711 8.75 17H7.25Z"
                                fill="currentColor" />
                            <path
                                d="M3 11H7V5.61799C7 4.87461 6.21769 4.39111 5.55279 4.72356L3.55279 5.72356C3.214 5.89295 3 6.23922 3 6.61799V11Z"
                                stroke="currentColor" stroke-width="1.5" />
                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Bellleza</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" class=" self-center text-red-400">
                            <path
                                d="M4.41003 16.75C4.17003 19.64 6.35003 22 9.25003 22H14.04C17.3 22 19.54 19.37 19 16.15C18.43 12.77 15.17 10 11.74 10C8.02003 10 4.72003 13.04 4.41003 16.75Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M10.47 7.5C11.8507 7.5 12.97 6.38071 12.97 5C12.97 3.61929 11.8507 2.5 10.47 2.5C9.08926 2.5 7.96997 3.61929 7.96997 5C7.96997 6.38071 9.08926 7.5 10.47 7.5Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.3 8.69995C18.4046 8.69995 19.3 7.80452 19.3 6.69995C19.3 5.59538 18.4046 4.69995 17.3 4.69995C16.1955 4.69995 15.3 5.59538 15.3 6.69995C15.3 7.80452 16.1955 8.69995 17.3 8.69995Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M21 12.7C21.8284 12.7 22.5 12.0284 22.5 11.2C22.5 10.3715 21.8284 9.69995 21 9.69995C20.1716 9.69995 19.5 10.3715 19.5 11.2C19.5 12.0284 20.1716 12.7 21 12.7Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M3.96997 10.7C5.07454 10.7 5.96997 9.80452 5.96997 8.69995C5.96997 7.59538 5.07454 6.69995 3.96997 6.69995C2.8654 6.69995 1.96997 7.59538 1.96997 8.69995C1.96997 9.80452 2.8654 10.7 3.96997 10.7Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Mascotas</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">

                        <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 256 241"
                            class=" self-center text-red-400">
                            <path d="M254,188V2H2v186h111v29H75v22h106v-22h-38v-29H254z M19,19h217v151H19L19,19z M184.473,106.507L168.38,52.933h-36.732
                                    v-6.647c0-1.799-1.799-3.648-3.648-3.648c-1.799,0-3.648,1.799-3.648,3.648v6.697H87.62l-16.092,53.524h-0.35h-1.799
                                    c0,12.144,9.845,22.039,22.039,22.039s22.039-9.845,22.039-22.039h-2.099h-0.35L95.816,56.281h28.836v78.162H96.115v11.195h3.648
                                    H128h28.236h3.648v-11.195h-28.536V56.281h28.836l-15.193,50.226h-0.35h-2.099c0,12.144,9.845,22.039,22.039,22.039
                                    s22.039-9.845,22.039-22.039h-1.799L184.473,106.507L184.473,106.507z M106.011,106.507H76.825L91.268,57.78L106.011,106.507z
                                    M149.989,106.507l14.743-48.726l14.443,48.726H149.989z" />
                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Legal y admin</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">

                        <svg width="40px" height="40px" viewBox="0 0 512 512" id="Layer_1" fill="currentColor"
                            class=" self-center text-red-400">


                            <path class="st0"
                                d="M350.9,364.4c-3.2-0.3-6.4-0.5-9.7-0.5c-15.1,0-29.5,3.4-42.3,9.4c-16.1-19-36.9-33.9-60.8-42.7   c-4-1.5-8.2-2.8-12.4-3.9c-12.1-3.3-24.7-5-37.8-5c-17,0-33.2,2.9-48.3,8.3c-55.4,19.6-95.4,71.9-96.7,133.8H441   C441,411.9,401.5,369.3,350.9,364.4z M153.8,370.3c-28.2,10-50.6,31.9-61.5,60.1c-1.1,2.8-3.7,4.5-6.5,4.5c-0.8,0-1.7-0.1-2.5-0.5   c-3.6-1.4-5.4-5.4-4-9c12.3-32.1,37.8-56.9,69.9-68.3c3.7-1.3,7.6,0.6,8.9,4.3C159.4,365.1,157.5,369,153.8,370.3z" />

                            <path class="st0"
                                d="M322.9,235.9c15.3,0,27.2,5.8,32.4,8.8c3.9-20.7,8.8-39.8,13.3-55.6l-30.4-12.3l-0.2-0.8   c-50.5,41.2-79.2,95.5-95.5,141.3c0.1,0,0.3,0.1,0.4,0.2c22.5,8.3,43,21.7,59.7,39.1c12.3-4.5,25.2-6.7,38.5-6.7   c2.5,0,5.1,0.1,7.6,0.3c-1.1-10.3-1.6-20.9-1.5-31.6c-0.7,0.2-1.4,0.3-2,0.3c-1.1,0-2.2-0.3-3.3-0.8c-0.3-0.2-21.5-11.3-41.5-11.3   c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c21.4,0,42.6,10.2,47.2,12.5c0.8-15.7,2.6-31.3,5-46.3c-1-0.2-2-0.6-2.9-1.2   c-0.2-0.2-11.5-7.9-27-7.9c-3.9,0-7-3.1-7-7C315.9,239,319.1,235.9,322.9,235.9z" />

                            <path class="st0"
                                d="M413.4,95.4c0,0-22.8-57.2-94.8-45.6c0,0,30.5,17.5,27.4,42.5c0,0-48.5-26.7-98.7,30.2c0,0,92.3-4.9,103,44.1   l22.3,9c0,0,61.7,7.8,63.8,58.8c0,0,27.9-31.1,15.8-69.5c0,0,24.8-1.6,32.1,20C484.4,185,505.8,92.3,413.4,95.4z" />

                            <path class="st0"
                                d="M171.9,233.6c-6.8-7.6-14.3-14.9-22.6-21.8l-0.2,0.7l-26.4,10.7c6.9,24.5,14.6,58.3,16.4,92.1   c15.7-5,32.1-7.6,48.7-7.6c10.7,0,21.4,1.1,31.8,3.2c-2-5-4.3-10-6.7-15.1c-1.1,0.5-2.3,0.8-3.6,0.7c-0.3,0-26.8-1.8-39.1-0.1   c-0.3,0-0.6,0.1-1,0.1c-3.4,0-6.4-2.5-6.9-6c-0.5-3.8,2.1-7.4,6-7.9c10.6-1.5,29.3-0.7,37.6-0.3c-6.8-12.6-15-25.2-24.6-37.3   c-0.8,0.7-1.8,1.2-2.8,1.4c-7.9,1.9-16.3,4.7-18.1,6.1c-1.4,1.3-3.1,2-4.9,2c-1.8,0-3.6-0.7-4.9-2.1c-2.7-2.7-2.7-7.2,0-9.9   C154.6,238.7,164.6,235.5,171.9,233.6z" />

                            <path class="st0"
                                d="M53.6,201c-9.9,31.5,13,57,13,57c1.7-41.9,52.3-48.2,52.3-48.2l18.3-7.4c8.7-40.2,84.4-36.2,84.4-36.2   c-41.2-46.6-80.9-24.8-80.9-24.8c-2.6-20.4,22.5-34.8,22.5-34.8c-59-9.5-77.7,37.4-77.7,37.4c-75.7-2.6-58.1,73.4-58.1,73.4   C33.3,199.7,53.6,201,53.6,201z" />


                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Serv turisticos</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">
                        <svg height="40px" width="40px" version="1.1" viewBox="0 0 413.347 413.347" xml:space="preserve"
                            class=" self-center text-red-400">
                            <g>
                                <polygon style="fill:currentColor;"
                                    points="413.347,386.835 404.078,356.404 404.078,322.684 9.051,322.684 9.051,357.116 0,386.835" />
                                <path style="fill:currentColor;"
                                    d="M382.826,260.178h0.119v-0.002c0-91.472-69.658-166.671-158.821-175.457V61.511h20.809v-35h-76.617 v35h20.809v23.208c-88.617,8.732-157.955,83.07-158.8,173.782h-0.021v1.675v0.002v33.323h352.523V260.178z" />
                            </g>
                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Servicios
                            personales</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">
                        <svg fill="currentColor" height="40px" width="40px" version="1.1" viewBox="0 0 512 512"
                            class=" self-center text-red-400" xml:space="preserve">
                            <g>
                                <path
                                    d="M461.913,89.043h-83.478V72.348c0-27.618-22.469-50.087-50.087-50.087s-50.087,22.469-50.087,50.087v16.696h-83.478
                                            c-27.618,0-50.087,22.469-50.087,50.087v16.696H83.478c-27.618,0-50.087,22.469-50.087,50.087v59.867L14.67,284.502
                                            C5.21,293.961,0,306.539,0,319.918v52.952c0,27.618,22.469,50.087,50.087,50.087h27.826c0,36.824,29.959,66.783,66.783,66.783
                                            c36.824,0,66.783-29.959,66.783-66.783h100.174c0,36.824,29.959,66.783,66.783,66.783s66.783-29.959,66.783-66.783h16.696
                                            c27.618,0,50.087-22.469,50.087-50.087V139.13C512,111.512,489.531,89.043,461.913,89.043z M311.652,72.348
                                            c0-9.206,7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696v16.696h-33.391V72.348z M66.783,205.913
                                            c0-9.206,7.49-16.696,16.696-16.696h61.217V256H66.783V205.913z M86.898,389.565H50.087c-9.206,0-16.696-7.49-16.696-16.696
                                            v-16.696h16.696c9.22,0,16.696-7.475,16.696-16.696s-7.475-16.696-16.696-16.696H33.391v-2.865c0-4.459,1.736-8.652,4.89-11.805
                                            l18.721-18.721h87.693v66.783C120.032,356.174,98.463,369.624,86.898,389.565z M144.696,456.348
                                            c-18.412,0-33.391-14.979-33.391-33.391c0-18.412,14.979-33.391,33.391-33.391c18.412,0,33.391,14.979,33.391,33.391
                                            C178.087,441.368,163.108,456.348,144.696,456.348z M378.435,456.348c-18.412,0-33.391-14.979-33.391-33.391
                                            c0-18.412,14.979-33.391,33.391-33.391c18.412,0,33.391,14.979,33.391,33.391C411.826,441.368,396.847,456.348,378.435,456.348z
                                            M478.609,372.87c0,9.206-7.49,16.696-16.696,16.696h-25.68c-11.566-19.941-33.134-33.391-57.798-33.391
                                            c-24.664,0-46.232,13.45-57.798,33.391H202.494c-5.864-10.11-14.297-18.543-24.407-24.407V139.13
                                            c0-9.206,7.49-16.696,16.696-16.696c2.435,0,264.302,0,267.13,0c9.206,0,16.696,7.49,16.696,16.696V372.87z" />
                            </g>
                            <g>
                                <g>
                                    <path
                                        d="M395.13,222.609h-50.087v-50.087c0-9.22-7.475-16.696-16.696-16.696s-16.696,7.475-16.696,16.696v50.087h-50.087
			c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h50.087v50.087c0,9.22,7.475,16.696,16.696,16.696
			s16.696-7.475,16.696-16.696V256h50.087c9.22,0,16.696-7.475,16.696-16.696C411.826,230.084,404.351,222.609,395.13,222.609z" />
                                </g>
                            </g>
                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Servicios de
                            emergencia</span>
                    </swiper-slide>
                    <swiper-slide
                        class="bg-red-100 rounded-xl relative  h-[3rem] text-center flex justify-center border-red-300 border-[1px]">
                        <svg width="40px" height="40px" viewBox="0 0 70.866 70.866"
                            enable-background="new 0 0 70.866 70.866" xml:space="preserve"
                            class=" self-center text-red-400">

                            <g>

                                <path
                                    d="   M58.501,54.815h6.939V19.521c0-1.917-1.554-3.47-3.47-3.47l0,0c-1.916,0-3.47,1.553-3.47,3.47V54.815z"
                                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-miterlimit="10" stroke-width="3" />

                                <path
                                    d="   M5.426,54.815V27.774c0-1.917,1.554-3.47,3.471-3.47c1.916,0,3.469,1.553,3.469,3.47v27.041H5.426z"
                                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-miterlimit="10" stroke-width="3" />

                                <rect fill="none" height="13.596" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" width="46.136"
                                    x="12.365" y="36.756" />

                                <circle cx="50.371" cy="28.913" fill="none" r="4.053" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="3" />

                                <polygon fill="none" points="   12.365,42.9 42.078,42.9 42.078,23.802 12.365,27.736  "
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-miterlimit="10" stroke-width="3" />

                            </g>

                        </svg>
                        <span class="top-full text-[10px] text-center absolute w-full font-bold "> Alojamiento</span>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="w-11/12 mx-auto ">
                <swiper :loop="true" :centeredSlides="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }"
                    :modules="modules2" :pagination="{ clickable: false, }" class=" h-[10rem]  rounded-xl">
                    <swiper-slide
                        class="h-auto bg-cover bg-origin-content brightness-100 bg-center bg-[url('https://picsum.photos/600/500?random=1')] "></swiper-slide>
                    <swiper-slide
                        class="h-auto bg-cover bg-origin-content brightness-100 bg-center bg-[url('https://picsum.photos/600/500?random=2')] "></swiper-slide>
                    <swiper-slide
                        class="h-auto bg-cover bg-origin-content brightness-100 bg-center bg-[url('https://picsum.photos/600/500?random=3')] "></swiper-slide>
                </swiper>
            </div>
            <div class="w-11/12 mx-4 my-2">
                <div class=" flex justify-between">
                    <span class="text-[24px] font-bold font-sans">Recomendados</span>
                    <button @click="() => router.push('/tabs/tab1')"
                        class="text-blue-400 hover:text-blue-800 self-center">Ver mas</button>
                </div>
                <div>
                    <swiper :slidesPerView="2" :spaceBetween="15" :loop="true" :modules="modules3"
                        :autoplay="{ delay: 2500, disableOnInteraction: false, }" :pagination="{ clickable: false, }"
                        :navigation="true" class=" h-[15rem] p-1 ">
                        <swiper-slide class="bg-red-300 rounded-xl mb-14 relative h-[10rem]" v-for="n in 10" :key="n">
                            <div
                                :class="`h-full rounded-xl bg-cover bg-origin-content brightness-100 bg-center bg-[url('https://picsum.photos/600/500?random=${n}')]`">
                            </div>
                            <div class="absolute -bottom-18">
                                <div class="flex flex-col  w-[95%] mx-1 leading-4">
                                    <span class="text-[16px] font-bold font-sans line-clamp-1 ">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Doloribus cupiditate rerum quis reprehenderit iusto
                                        sint minus
                                        sunt adipisci similique, voluptas impedit tempora ea exercitationem veniam itaque
                                        aperiam,
                                        incidunt dolore sapiente. </span>
                                    <span class="text-[12px] text-[#cecece] font-bold font-sans">Lorem ipsum dolor sit
                                        amet,</span>
                                    <span class="text-[20px]   font-sans mt-2 line-clamp-1 text-end">$99.999,99 </span>
                                </div>
                            </div>
                            <div
                                class="w-10 h-20 bg-red-600 clip-flag transform absolute top-0 left-1 rounded-tr-xl rounded-tl-xl  shadow-xl rotate-0 flex flex-col justify-center leading-3">
                                <span class="text-white text-center font-bold -mb-4 text-[10px]">
                                    oferta
                                </span>
                                <span class="text-white font-bold mt-4 text-center text-[12px]">
                                    -99%
                                </span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="w-11/12 mx-4">
                <div class=" flex justify-between">
                    <span class="text-[24px] font-bold font-sans">Populares</span>
                    <button @click="() => router.push('/tabs/tab1')"
                        class="text-blue-400 hover:text-blue-800 self-center">Ver mas</button>
                </div>
                <div class="">
                    <swiper :slidesPerView="2" :spaceBetween="15" :loop="true"
                        :autoplay="{ delay: 2500, disableOnInteraction: false, }" :pagination="{ clickable: false, }"
                        :navigation="true" class=" h-[21rem] p-1 ">
                        <swiper-slide class="bg-red-300 rounded-xl  relative h-[20rem]" v-for="n in 10" :key="n">
                            <div
                                :class="`h-full rounded-xl backdrop-saturate-200 bg-cover bg-origin-content brightness-100 bg-center bg-[url('https://picsum.photos/600/500?random=${n}')]`">
                                <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold right-1 absolute">
                                    <ion-avatar class="w-4 h-4">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="currentcolor"
                                            class="text-white">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                                                fill="currentColor" />
                                        </svg>
                                    </ion-avatar>
                                </ion-chip>
                            </div>
                            <div class="absolute bottom-2">
                                <div class="flex flex-col  w-[95%] mx-1 leading-4">
                                    <span class="text-[16px] font-bold font-sans line-clamp-1 text-white ">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus cupiditate rerum
                                        quis reprehenderit iusto sint minus sunt adipisci similique, voluptas impedit
                                        tempora ea exercitationem veniam itaque aperiam, incidunt dolore sapiente.
                                    </span>
                                    <span class="text-[12px] text-[#f6f3f3] font-bold font-sans">Lorem ipsum dolor sit
                                        amet,</span>
                                    <span
                                        class="text-[20px]   font-sans mt-2 line-clamp-1 text-end font-bold bg-transparent w-fit self-end text-white  ">$99.999,99
                                    </span>
                                </div>
                            </div>
                            <div
                                class="w-10 h-20 bg-red-600 clip-flag transform absolute top-0 left-1 rounded-tr-xl rounded-tl-xl  shadow-xl rotate-0 flex flex-col justify-center leading-3">
                                <span class="text-white text-center font-bold -mb-4 text-[10px]">
                                    oferta
                                </span>
                                <span class="text-white font-bold mt-4 text-center text-[12px]">
                                    -99%
                                </span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="w-11/12 mx-4 my-2">
                <div class=" flex justify-between">
                    <span class="text-[24px] font-bold font-sans">Nuevos lanzamientos</span>
                    <button @click="() => router.push('/tabs/tab1')"
                        class="text-blue-400 hover:text-blue-800 self-center">Ver mas</button>
                </div>
                <div class="">
                    <swiper :loop="true" :centeredSlides="true" :autoplay="{ delay: 5000, disableOnInteraction: false, }"
                        :modules="modules3" :pagination="{ clickable: false, }" class=" h-[12rem]  rounded-xl">
                        <swiper-slide
                            :class="` h-full rounded-xl backdrop-saturate-200 bg-cover bg-origin-content brightness-100 bg-center bg-[url('https://picsum.photos/600/500?random=${n}')] shadow-xl `"
                            v-for="n in 4" :key="n">

                            <div class="z-[1] h-full">
                                <div class="flex  h-full w-10/12  ">
                                    <button
                                        class="bg-gray-700 p-2 absolute  top-6 left-4 rounded-lg self-center text-[9px] text-white font-semibold">
                                        Articulo nuevo
                                    </button>
                                    <span
                                        class="line-clamp-2 absolute  left-2 font-bold text-[18px] text-white leading-5 top-14 w-2/3  ">Lorem,
                                        ipsum dolor sit amet consectetur adipisicing elit.
                                        Assumenda, maxime dolorum, saepe est consequatur dolore provident, ex omnis sed eius
                                        labore! Molestias vitae odit expedita quod cumque voluptas ratione
                                        asperiores!
                                    </span>
                                    <span
                                        class="line-clamp-1 absolute  left-2 font-bold text-[18px] text-red-800 leading-5 top-[99px] w-2/3  ">
                                        $ 99.999.99,99
                                    </span>
                                    <button
                                        class="bg-red-300 p-2 absolute  top-[140px] left-4 rounded-lg self-center  font-bold shadow-xl flex gap-2">
                                        Comprar
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                            class=" self-center ">
                                            <path
                                                d="M19.5 8.25H16.5V7.75C16.5 6.55653 16.0259 5.41193 15.182 4.56802C14.3381 3.72411 13.1935 3.25 12 3.25C10.8065 3.25 9.66193 3.72411 8.81802 4.56802C7.97411 5.41193 7.5 6.55653 7.5 7.75V8.25H4.5C4.16848 8.25 3.85054 8.3817 3.61612 8.61612C3.3817 8.85054 3.25 9.16848 3.25 9.5V18C3.25 18.7293 3.53973 19.4288 4.05546 19.9445C4.57118 20.4603 5.27065 20.75 6 20.75H18C18.7293 20.75 19.4288 20.4603 19.9445 19.9445C20.4603 19.4288 20.75 18.7293 20.75 18V9.5C20.75 9.16848 20.6183 8.85054 20.3839 8.61612C20.1495 8.3817 19.8315 8.25 19.5 8.25ZM9 7.75C9 6.95435 9.31607 6.19129 9.87868 5.62868C10.4413 5.06607 11.2044 4.75 12 4.75C12.7956 4.75 13.5587 5.06607 14.1213 5.62868C14.6839 6.19129 15 6.95435 15 7.75V8.25H9V7.75ZM19.25 18C19.25 18.3315 19.1183 18.6495 18.8839 18.8839C18.6495 19.1183 18.3315 19.25 18 19.25H6C5.66848 19.25 5.35054 19.1183 5.11612 18.8839C4.8817 18.6495 4.75 18.3315 4.75 18V9.75H7.5V12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303C7.86032 12.671 8.05109 12.75 8.25 12.75C8.44891 12.75 8.63968 12.671 8.78033 12.5303C8.92098 12.3897 9 12.1989 9 12V9.75H15V12C15 12.1989 15.079 12.3897 15.2197 12.5303C15.3603 12.671 15.5511 12.75 15.75 12.75C15.9489 12.75 16.1397 12.671 16.2803 12.5303C16.421 12.3897 16.5 12.1989 16.5 12V9.75H19.25V18Z"
                                                fill="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>


                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts" setup >
import { IonPage, IonMenu, IonContent, IonMenuButton, IonButton, IonBadge, IonChip, IonAvatar, IonLabel, IonIcon, IonItem, IonListHeader } from '@ionic/vue';
import logo from '@/assets/Icons/logo.png'
import logoname from '@/assets/Icons/logo-name.png'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRouter } from 'vue-router';
import {
    archiveOutline,
    archiveSharp,
    bookmarkOutline,
    bookmarkSharp,
    heartOutline,
    heartSharp,
    mailOutline,
    mailSharp,
    paperPlaneOutline,
    paperPlaneSharp,
    trashOutline,
    trashSharp,
    warningOutline,
    warningSharp,
    home,
    speedometer,
    cash,
    lockOpen,
    locate,
    car
} from 'ionicons/icons';
const modules: any = [Pagination];
const modules2: any = [Pagination, Autoplay];
const modules3: any = [Autoplay];
const router = useRouter()


</script>
<style scoped lang="less" >
ion-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(255, 47, 0, 0.18);
}

.clip-flag {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%);
}

.toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
}

.toggle-checkbox:checked+.toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
}
</style>

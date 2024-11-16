<template>
    <ion-page>
        <ion-content>
            <div class="bg-gray-400  h-2/6 w-full flex justify-between gap-6 p-10">
                <div class=" w-full h-full flex flex-col justify-center ">
                    <div class="flex flex-col ">
                        <div class="text-base  break-words font-bold flex gap-3">
                            <p class="truncate">Lorem ipsum dolor sit</p>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class="text-gray-500"
                                @click="openModal">
                                <path
                                    d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="self-start text-gray-500   text-[14px] flex gap-2 ">
                            <p class="text-gray-600">por: Juliot nuñez</p>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class="text-blue-400">
                                <path
                                    d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="flex">
                            <p class="self-end text-[20px] font-bold font-sans">
                                $99.00
                            </p>
                            <p class="self-end text-gray-500">
                                /hora
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-2 bg-white w-fit p-1 rounded-lg shadow-lg mt-4" @click="openModal2">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                            class="   text-amber-400   self-center ">
                            <path
                                d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                fill="currentColor" />
                        </svg>
                        <p class="self-center text-[14px] text-[#b7b5b5] truncate">
                            9.9 (999.999.99 Reseñas)
                        </p>
                    </div>
                </div>
                <div class=" w-full h-full">
                    <div class="bg-cover bg-center w-full h-full border-solid border-[5px] rounded-lg shadow-lg "
                        :style="`background-image: url(${url});`" />
                </div>
            </div>
            <div class="h-fit">
                <div class="p-4 shadow-lg border-solid border-[1px] m-2">
                    <div class="font-bold text-[20px] border-b-2 border-[#cecece] flex justify-between">
                        <p>Espesificaciones</p>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class="text-red-500"
                            @click="openModal3">
                            <path d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class=" w-full h-fit mt-1">
                        <div class="flex  flex-wrap">
                            <div v-for="n in handymanServices" :key="n"
                                class="px-3 py-1 bg-gray-300 rounded-full text-sm min-w-fit m-1">
                                {{ n }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 shadow-lg border-solid border-[1px] m-2">
                    <div class="font-bold text-[20px] border-b-2 border-[#cecece] flex justify-between">
                        <p>Algo sobre mi</p>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class="text-red-500"
                            @click="openModal4">
                            <path d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class=" w-full h-fit mt-1">
                        <div class="flex justify-between">
                            <p class=" mx-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque corporis accusamus
                                reiciendis nam consequuntur, maxime cumque pariatur ea non commodi dolorem illo
                                veritatis. Recusandae consectetur reiciendis unde molestiae aliquam tempore.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="p-4 shadow-lg border-solid border-[1px] m-2">
                    <div class="font-bold text-[20px] border-b-2 border-[#cecece] flex justify-between">
                        <p>Contacto</p>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class="text-red-500"
                            @click="openModal5">
                            <path d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="w-full h-fit mt-1">
                        <div class="flex justify-between">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>
                                nunezjuliot@gmail.com
                            </p>
                        </div>
                        <div class="flex justify-between">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                                    fill="#1C274C" />
                            </svg>
                            <p>
                                (+57) 3184610297
                            </p>
                        </div>
                    </div>
                </div>
                <div class="p-4 shadow-lg border-solid border-[1px] m-2">
                    <div class="font-bold text-[20px] border-b-2 border-[#cecece] flex justify-between">
                        <p>Dirección</p>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class="text-red-500"
                            @click="openModal6">
                            <path d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class=" w-full h-fit mt-1">
                        <div class="flex justify-between">
                            <svg width="25px" height="25px" viewBox="0 0 8.4666669 8.4666669" id="svg8">
                                <defs id="defs2" />
                                <g id="layer1" transform="translate(0,-288.53332)">
                                    <path
                                        d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                                        id="path929"
                                        style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                                        transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)" />

                                </g>

                            </svg>
                            <p class="truncate mx-2">
                                Av. 109 #109-57, Maracaibo, Zulia, venezuela
                            </p>
                        </div>
                    </div>
                </div>
                <div class="p-4 shadow-lg border-solid border-[1px] m-2">
                    <div class="font-bold text-[20px] border-b-2 border-[#cecece] flex justify-between">
                        <p>Disponibilidad</p>
                        <div class="flex gap-2">
                            <svg width="25px" height="25px" viewBox="0 0 32 32" @click="openModal7">
                                <g stroke="none" stroke-width="1" fill="none" class="text-blue-500">
                                    <g id="Icon-Set" sketch:type="MSLayerGroup"
                                        transform="translate(-464.000000, -1087.000000)" fill="currentColor">
                                        <path
                                            d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                                            id="plus-circle" sketch:type="MSShapeGroup">

                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class=" w-full h-fit mt-1">
                        <div class="flex justify-between" v-for="n in handymanCalendar" :key="n">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                                <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                                <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                            </svg>
                            <div class="flex gap-2 ">
                                <p class="truncate mx-2">
                                    {{ n }}
                                </p>
                                <p class="truncate mx-2">
                                    12:00 am a 12:00 pm
                                </p>
                            </div>
                            <div class="self-center w-fit h-fit">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                    class="text-orange-500 ">
                                    <path
                                        d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 shadow-lg border-solid border-[1px] m-2">
                    <div class="font-bold text-[20px] border-b-2 border-[#cecece] flex justify-between">
                        <p>Ofertas</p>
                        <div class="flex gap-2">
                            <svg width="25px" height="25px" viewBox="0 0 32 32" @click="openModal8">
                                <g stroke="none" stroke-width="1" fill="none" class="text-blue-500">
                                    <g id="Icon-Set" sketch:type="MSLayerGroup"
                                        transform="translate(-464.000000, -1087.000000)" fill="currentColor">
                                        <path
                                            d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                                            id="plus-circle" sketch:type="MSShapeGroup">

                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class=" w-full h-fit mt-1">
                        <div v-for="n in 4" :key="n"
                            class="bg-gray-200 h-10 w-full flex gap-2 px-2 justify-between border-solid border-[1px] border-black rounded-xl my-2">
                            <p class="truncate self-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Libero molestias sunt porro aliquam! Nemo praesentium delectus fuga saepe amet expedita
                                nobis accusantium nihil illum neque, assumenda ab eligendi, veniam odit!</p>
                            <div class="flex items-center">
                                <input type="checkbox" class="sr-only" id="asd" @click="toggleSwitchRevision" />
                                <label for="asd" class="flex items-center cursor-pointer">
                                    <div
                                        :class="['relative w-14 h-7 rounded-full transition-colors duration-200 ease-in-out', checkboxSwitch ? 'bg-green-500' : 'bg-gray-300']">
                                        <div :class="[
                                            'absolute left-0.5 top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-200 ease-in-out transform flex items-center justify-center',
                                            checkboxSwitch ? 'translate-x-7' : 'translate-x-0'
                                        ]">
                                            <svg v-show="showSpinSwitch" class="animate-spin h-5 w-5 text-gray-900"
                                                fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div class="self-center w-fit h-fit">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                    class="text-orange-500 ">
                                    <path
                                        d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ion-modal :is-open="isModalOpen" @didDismiss="closeModal" trigger="open-modal" :initial-breakpoint="0.3"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                        <svg @click="closeModal" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                            class="text-green-400">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                    <div class=" h-fit w-full p-2">
                        <input class="border-solid border-[1px] w-full p-2 rounded-lg" placeholder="Titulo">
                    </div>
                </ion-content>
            </ion-modal>
            <ion-modal :is-open="isModalOpen2" @didDismiss="closeModal2" trigger="open-modal" :initial-breakpoint="0.8"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal2" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class=" h-fit w-full p-2">
                        <div v-for="n in 10" :key="n"
                            class="w-full h-40  border-black border-[.1px] shadow-lg rounded-lg flex gap-2 p-2 my-2">
                            <div class="flex flex-col justify-center text-center">
                                <p class="font-bold text-orange-400 uppercase">miercoles</p>
                                <p class="font-bold -my-2 text-[20px]">28</p>
                                <p class="text-[#cecece] font-bold uppercase">Noviembre</p>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                    class=" self-center mt-10">
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="#323232" stroke-width="2" />
                                    <path
                                        d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z"
                                        stroke="#323232" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="h-full w-1 bg-[#cecece]"></div>
                            <div class="  overflow-hidden w-full h-full p-1">
                                <p class="font-bold my-1">Lorem ipsum dolor sit amet</p>
                                <p class="text-lg line-clamp-2 ">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus maxime recusandae
                                    consequatur cupiditate enim itaque fugit voluptatibus ad labore asperiores,
                                    molestiae porro earum eveniet est iure accusamus ipsum. Doloremque, ab!
                                </p>
                                <div class="flex  justify-between mt-4">
                                    <div class="flex gap-2 justify-around">
                                        <ion-avatar class=" w-7 h-7 self-center shadow-md">
                                            <img alt="avatar"
                                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                        </ion-avatar>
                                        <div class="flex gap-2 bg-white w-fit  ">
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                                class="   text-amber-400   self-center ">
                                                <path
                                                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                                    fill="currentColor" />
                                            </svg>
                                            <p class="self-center text-[14px] text-[#b7b5b5] ">
                                                9.9
                                            </p>
                                        </div>
                                    </div>

                                    <div class=" rounded-lg bg-gray-300 w-fit h-fit self-center px-3 shadow-lg">
                                        pendiente
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </ion-content>
            </ion-modal>
            <ion-modal :is-open="isModalOpen3" @didDismiss="closeModal3" trigger="open-modal" :initial-breakpoint="0.4"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal3" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class=" h-fit w-full p-2">
                        <div class=" h-fit w-full p-2">
                            <input class="border-solid border-[1px] w-full p-2 rounded-lg"
                                placeholder="Busca Espcialidades">
                        </div>
                        <div class="w-full border-solid border-[1px] my-2" />
                        <div class=" w-full h-fit mt-1">
                            <div class="flex  flex-wrap">
                                <div v-for="n in handymanServices" :key="n"
                                    class="px-3 py-1 bg-gray-300 rounded-full text-sm min-w-fit m-1">
                                    {{ n }}
                                </div>
                            </div>
                        </div>
                    </div>
                </ion-content>
            </ion-modal>
            <ion-modal :is-open="isModalOpen4" @didDismiss="closeModal4" trigger="open-modal" :initial-breakpoint="0.4"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal4" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class=" h-fit w-full p-2">
                        <div class=" h-fit w-full p-2">
                            <textarea class="border-solid border-[1px] w-full p-2 rounded-lg"
                                rows="5">Ingrese texto</textarea>
                        </div>
                    </div>
                </ion-content>
            </ion-modal>
            <ion-modal :is-open="isModalOpen5" @didDismiss="closeModal5" trigger="open-modal" :initial-breakpoint="0.4"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal5" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class=" h-fit w-full p-2">
                        <div class="flex justify-between gap-2 my-1">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                                <path
                                    d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input placeholder="Ingrese correo electronico" type="email"
                                class="border-solid border-[1px] w-full p-2 rounded-lg" rows="5">
                        </div>
                        <div class="flex justify-between gap-2 my-1">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                                <path
                                    d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                                    fill="#1C274C" />
                            </svg>
                            <input placeholder="Ingrese numero de contacto celular" type="phone"
                                class="border-solid border-[1px] w-full p-2 rounded-lg">
                        </div>
                    </div>
                </ion-content>
            </ion-modal>
            <ion-modal :is-open="isModalOpen6" @didDismiss="closeModal6" trigger="open-modal" :initial-breakpoint="0.4"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal6" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                        <svg @click="closeModal6" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                            class="text-green-400">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                    <div class="h-fit w-full p-2">

                    </div>
                </ion-content>
            </ion-modal>
            <ion-modal :is-open="isModalOpen7" @didDismiss="closeModal7" trigger="open-modal" :initial-breakpoint="0.4"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal7" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                        <svg @click="closeModal7" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                            class="text-green-400">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                    <div class="h-fit w-full p-2">
                        <div class=" w-full h-fit mt-1">
                            <div class="flex  flex-wrap">
                                <div v-for="n in handymanCalendar" :key="n"
                                    class="px-3 py-1 bg-gray-300 rounded-full text-sm min-w-fit m-1">
                                    {{ n }}
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2 justify-start ">
                            <p class=" self-center ">Desde</p>
                            <timePicker v-model="selectedTime"
                                @timeChange="(time) => console.log('Nueva hora:', time)" />
                        </div>
                        <div class="flex gap-2 justify-start ">
                            <p class=" self-center ">Hasta</p>
                            <timePicker v-model="selectedTime"
                                @timeChange="(time) => console.log('Nueva hora:', time)" />
                        </div>
                    </div>
                </ion-content>
            </ion-modal>
            <ion-modal :is-open="isModalOpen8" @didDismiss="closeModal8" trigger="open-modal" :initial-breakpoint="1"
                :breakpoints="[0, 1]">
                <ion-content class="ion-padding">
                    <div class="ion-margin-top flex gap-3 justify-between my-4">
                        <svg @click="closeModal8" fill="currentColor" version="1.1" width="25px" height="25px"
                            viewBox="0 0 471.851 471.851" class="text-red-400">
                            <g>
                                <g>
                                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                                </g>
                            </g>
                        </svg>
                        <svg @click="closeModal8" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                            class="text-green-400">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                    <div class="h-fit w-full p-2">
                        <div
                            class=" w-full h-fit border-solid border-[#cecece] border-[1px] shadow-lg rounded-lg p-2 flex gap-2 flex-col">
                            <div class=" w-full h-10 p-1 shadow-md">
                                <input v-model="seccion.oferta.titulo" type="text"
                                    placeholder="Ingrese titulo de la oferta" class="h-full w-full rounded-md p-2">
                            </div>
                            <div class=" h-60 rounded-md shadow-md p-2 relative  border-[1px] ">
                                <div class="w-full  h-fit">
                                    <p class=" font-bold capitalize ">Portada</p>
                                </div>
                                <div class="bg-cover bg-center w-full h-48 border-solid border-[5px] rounded-lg shadow-lg "
                                    :style="`background-image: url(${seccion.oferta.portadaTemp ?? skeletonImg});`" />
                                <label class="bg-white rounded-full p-2 absolute -bottom-2 right-0"
                                    for="portadaServicioImg">
                                    <input type="file" class="hidden" id="portadaServicioImg" ref="portadaServicioImg"
                                        @change="handlePortadaServicioImg">
                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                        class="text-red-500">
                                        <path
                                            d="M5 15L4 16V20H8L14 14M18 10L21 7L17 3L14 6M18 10L17 11M18 10L14 6M14 6L7.5 12.5"
                                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </label>
                            </div>
                            <div class="h-40 rounded-md shadow-md p-2 relative  border-[1px]">
                                <textarea class=" w-full h-full" v-model="seccion.oferta.descripcion"></textarea>
                            </div>
                            <div class="h-fit rounded-md shadow-md p-2 relative  border-[1px]">
                                <div class=" h-fit w-full p-2">
                                    <p>Selecciona categorias </p>
                                </div>
                                <div class="flex flex-wrap">
                                    <div v-for="(servicio, index) in tiposServicios" :key="index"
                                        class="px-3 py-1 rounded-full text-sm min-w-fit m-1 cursor-pointer"
                                        :class="servicio.selected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'"
                                        @click="toggleSelection(index)">
                                        {{ servicio.nombre }}
                                    </div>
                                </div>
                            </div>
                            <div class="h-fit rounded-md shadow-md p-2 relative  border-[1px]">
                                <div class=" h-fit w-full p-2 flex gap-4 ">
                                    <label for="inputFolio" class="border-solid border-[1px] w-10/12 p-2 rounded-lg">
                                        <p class="truncate"> {{ nameTempInputHandlerFolio ?? 'Seleccionar imagen' }}
                                        </p>
                                        <input class="hidden" type="file" id="inputFolio" @change="handleInputFolio">
                                    </label>
                                    <button @click="addFolio">
                                        <svg fill="#000000" width="25px" height="25px" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM22.386 10.146l-9.388 9.446-4.228-4.227c-0.39-0.39-1.024-0.39-1.415 0s-0.391 1.023 0 1.414l4.95 4.95c0.39 0.39 1.024 0.39 1.415 0 0.045-0.045 0.084-0.094 0.119-0.145l9.962-10.024c0.39-0.39 0.39-1.024 0-1.415s-1.024-0.39-1.415 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <swiper :loop="true" :centeredSlides="true"
                                    :autoplay="{ delay: 2500, disableOnInteraction: false, }" :modules="modules2"
                                    :pagination="{ clickable: false, }" class=" h-[10rem]  rounded-xl">
                                    <swiper-slide v-for="(urlT, r) in seccion.oferta.tempPortafolio" :key="r"
                                        class="h-auto bg-cover bg-origin-content brightness-100 bg-center "
                                        :style="`background-image: url(${urlT});`"></swiper-slide>
                                </swiper>
                            </div>
                            <div class="h-fit rounded-md shadow-md p-2 relative  border-[1px]">
                                <div class="flex gap-1 justify-center">
                                    <p class=" self-center font-semibold text-[#cecece]">$</p>
                                    <input type="numer" v-model="seccion.oferta.valorHora"
                                        class=" text-right pr-2  w-50 h-10 border-solid border-[1px] border-[#cecece]"
                                        placeholder="99.00">
                                    <p class=" self-center  font-semibold text-[#cecece]">/ Hora</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ion-content>
            </ion-modal>
        </ion-content>
    </ion-page>
</template>
<script setup>
import {
    toastController,
    IonModal,
    IonContent,
    IonButton,
    IonAvatar,
    menuController
} from '@ionic/vue';
import { onMounted, ref } from 'vue';
import timePicker from '../components/timePickerComponente.vue'
import skeletonImg from '../assets/img/skeleton.webp'
const selectedTime = ref('12:00 AM');
const url = ref('https://picsum.photos/200/300/')
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import { useConfigEspecialista } from '@/stores/registerEspecialista/configEspecialista'
import { useTopRegisterEspecialista } from '@/stores/registerEspecialista/RegisterEspecialistaStore'

import { storeToRefs } from 'pinia';
const configEspecialistaStore = useConfigEspecialista()
const EspecialistaStore = useTopRegisterEspecialista()

const { seccion } = storeToRefs(configEspecialistaStore)
const { tiposServicios } = storeToRefs(EspecialistaStore)
const { getTipoServicios } = EspecialistaStore

// ofertas
const nameTempInputHandlerFolio = ref(null);
const inputFolioTemp = ref(null);
const handlePortadaServicioImg = (e) => {
    seccion.value.oferta.portada = e.target.files[0]
    seccion.value.oferta.portadaTemp = URL.createObjectURL(e.target.files[0])
}
const handleInputFolio = (e) => {
    nameTempInputHandlerFolio.value = e.target.files[0].name
    inputFolioTemp.value = e.target.files[0]
}

const addFolio = () => {

    let urlTemp = URL.createObjectURL(inputFolioTemp.value)
    seccion.value.oferta.tempPortafolio.push(urlTemp)
    inputFolioTemp.value = null;
    nameTempInputHandlerFolio.value = null


}

const toggleSelection = (index) => {
    tiposServicios.value[index].selected = !tiposServicios.value[index].selected;
    seccion.value.oferta.categria = tiposServicios.value
};




onMounted(async () => {
    await getTipoServicios()
    for (const element of tiposServicios.value) {
        element.selected
    }
})


const modules2 = ref([Pagination, Autoplay]);
const handymanServices = ref([
    'Plumbing',
    'Electrical Work',
    'Painting',
    'Carpentry',
    'Landscaping',
    'Appliance Repair',
    'Flooring Installation',
    'Roof Repair',
    'Furniture Assembly',
    'Home Cleaning'
]);
const checkboxSwitch = ref(false)
const showSpinSwitch = ref(false)
const handymanCalendar = ref([
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
]);

const isModalOpen = ref(false)
const isModalOpen2 = ref(false)
const isModalOpen3 = ref(false)
const isModalOpen4 = ref(false)
const isModalOpen5 = ref(false)
const isModalOpen6 = ref(false)
const isModalOpen7 = ref(false)
const isModalOpen8 = ref(false)

const openModal = () => {
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
}

const openModal2 = () => {
    isModalOpen2.value = true
}

const closeModal2 = () => {
    isModalOpen2.value = false
}

const openModal3 = () => {
    isModalOpen3.value = true
}

const closeModal3 = () => {
    isModalOpen3.value = false
}
const openModal4 = () => {
    isModalOpen4.value = true
}

const closeModal4 = () => {
    isModalOpen4.value = false
}

const openModal5 = () => {
    isModalOpen5.value = true
}

const closeModal5 = () => {
    isModalOpen5.value = false
}

const openModal6 = () => {
    isModalOpen6.value = true
}

const closeModal6 = () => {
    isModalOpen6.value = false
}
const openModal7 = () => {
    isModalOpen7.value = true
}

const closeModal7 = () => {
    isModalOpen7.value = false
}
const openModal8 = () => {
    isModalOpen8.value = true
}

const closeModal8 = () => {
    isModalOpen8.value = false
}

const toggleSwitchRevision = () => {
    checkboxSwitch.value = !checkboxSwitch.value
    showSpinSwitch.value = !showSpinSwitch.value
}
</script>
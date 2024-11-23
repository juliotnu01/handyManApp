<template>
  <ion-page>
    <menuSideBarRight />
    <ion-router-outlet id="main-content-especialista" />
    <!-- top menu -->
    <div class="w-full z-[1] h-28 absolute top-0 " v-show="route.path !== '/tabs/tab2'">
      <div class=" bg-transparent ">
        <div class="w-full p-4 pt-2 flex justify-between ">
          <button @click="openFirstMenu">
            <svg width="35px" height="35px" viewBox="0 0 32 32" class="">
              <path d="M3.205 6.937v4.265h25.59v-4.265h-25.59zM27.729 10.136h-23.457v-2.133h23.457v2.133z"
                fill="#000" />
              <path d="M3.205 18.133h25.59v-4.265h-25.59v4.265zM4.271 14.934h23.457v2.133h-23.457v-2.133z"
                fill="#000" />
              <path d="M3.205 25.063h25.59v-4.265h-25.59v4.265zM4.271 21.864h23.457v2.133h-23.457v-2.133z"
                fill="#000" />
            </svg>
          </button>
          <button @click="openFirstMenu" class="relative  flex">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.5835 7.41667C4.5835 3.32056 7.90405 0 12.0002 0C16.0963 0 19.4168 3.32056 19.4168 7.41667V8.33334C19.4168 10.5339 19.7156 12.4847 20.171 13.8507C20.4004 14.539 20.6515 15.0238 20.8818 15.316C21.0523 15.5324 21.1541 15.5761 21.1774 15.5834C21.7248 15.5891 22.1668 16.0346 22.1668 16.5833V16.7917C22.1668 17.344 21.7191 17.7917 21.1668 17.7917H2.8335C2.28121 17.7917 1.8335 17.344 1.8335 16.7917V16.5833C1.8335 16.0346 2.27551 15.5891 2.82292 15.5834C2.84626 15.5761 2.948 15.5324 3.11851 15.316C3.34881 15.0238 3.59994 14.539 3.82936 13.8507C4.2847 12.4847 4.5835 10.5339 4.5835 8.33334V7.41667ZM2.81774 15.5847C2.81773 15.5846 2.81863 15.5844 2.82044 15.5841L2.81886 15.5845C2.81812 15.5847 2.81774 15.5847 2.81774 15.5847Z"
                fill="#000000" />
              <path
                d="M9.25013 19.5C8.87258 19.5 8.52722 19.7126 8.35723 20.0497C8.18723 20.3869 8.2216 20.791 8.44606 21.0945C9.27818 22.2199 10.5352 23 12.0001 23C13.465 23 14.7221 22.2199 15.5542 21.0945C15.7787 20.791 15.813 20.3869 15.643 20.0497C15.473 19.7126 15.1277 19.5 14.7501 19.5H9.25013Z"
                fill="#000000" />
            </svg>

            <span class=" inline-flex rounded-full h-3 w-3 bg-sky-500 absolute -right-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            </span>
          </button>
        </div>
      </div>
      <div
        :class="{ 'w-full  px-5 py-3 z-[2] transition ease-in-out delay-150 block ': toggleFilter, 'w-full  px-5 py-3 z-[2] hidden ': !toggleFilter }">
        <label for="filter"
          class="flex relative h-8 w-full px-2   border-[#c6495e] shadow-lg rounded-xl border-[2px] bg-white">
          <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" @click="toggleFilter = !toggleFilter"
            class="self-center mr-2">
            <path d="M0 2.5H15M3 7.5H12M5 12.5H10" stroke="#cecece" />
          </svg>
          <input type="text" id="filter"
            class="focus:outline-none focus:border-transparent w-full rounded-tr-xl rounded-br-xl"
            placeholder="Filtrar...">
        </label>
      </div>
    </div>

    <!-- cards filters -->
    <div class=" z-[1] h-[42rem] relative top-40 w-11/12 mx-auto overflow-y-scroll p-2 grid grid-col-1 gap-2 "
      v-if="toggleFilter">
      <div class="bg-white w-full h-auto py-1 rounded-lg shadow-xl flex " v-for="n in 10" :key="n">
        <div class="w-2/5 h-full p-2">
          <div
            class="bg-cover rounded-xl bg-center h-full w-full bg-[url('https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')] ">
          </div>
        </div>
        <div class=" h-full w-full">
          <div class="flex justify-between ">
            <ion-chip class="-ml-1" style="background: none !important;">
              <ion-avatar>
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>
              <ion-label>Chip Avatar</ion-label>
            </ion-chip>
            <ion-label class=" self-center text-[12px] text-[#a5a4a4] mr-2">$999.999.99</ion-label>
          </div>
          <div class="px-3 pl-0 font-bold text-[12px] line-clamp-1 text-justify -mt-1">
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div class="px-3 pl-0 font-bold text-[#cecece] text-[10px] line-clamp-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum exercitationem libero possimus ipsa id,
            laudantium vel? Fuga facere culpa enim, itaque asperiores molestias fugiat, error voluptatem nulla nihil
            autem.
          </div>
          <div class="flex gap-3">
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="currentcolor" class="text-red-400">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                    fill="#000" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                    fill="#1C274C" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z"
                    fill="#1C274C" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.11413 8.35688C4.75894 8.56999 4.64377 9.03069 4.85688 9.38587C5.06999 9.74106 5.53069 9.85623 5.88587 9.64312L5.11413 8.35688ZM10.5 6L10.95 5.4C10.7061 5.21704 10.3756 5.19999 10.1141 5.35688L10.5 6ZM14.5 9L14.05 9.6C14.3236 9.80522 14.7014 9.79932 14.9685 9.58565L14.5 9ZM19.9685 5.58565C20.292 5.32689 20.3444 4.85493 20.0857 4.53148C19.8269 4.20803 19.3549 4.15559 19.0315 4.41435L19.9685 5.58565ZM17.75 19C17.75 19.4142 18.0858 19.75 18.5 19.75C18.9142 19.75 19.25 19.4142 19.25 19H17.75ZM19.25 11C19.25 10.5858 18.9142 10.25 18.5 10.25C18.0858 10.25 17.75 10.5858 17.75 11H19.25ZM9.75 19C9.75 19.4142 10.0858 19.75 10.5 19.75C10.9142 19.75 11.25 19.4142 11.25 19H9.75ZM11.25 11C11.25 10.5858 10.9142 10.25 10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11H11.25ZM13.75 19C13.75 19.4142 14.0858 19.75 14.5 19.75C14.9142 19.75 15.25 19.4142 15.25 19H13.75ZM15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25C14.0858 13.25 13.75 13.5858 13.75 14H15.25ZM5.75 19C5.75 19.4142 6.08579 19.75 6.5 19.75C6.91421 19.75 7.25 19.4142 7.25 19H5.75ZM7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14H7.25ZM5.88587 9.64312L10.8859 6.64312L10.1141 5.35688L5.11413 8.35688L5.88587 9.64312ZM10.05 6.6L14.05 9.6L14.95 8.4L10.95 5.4L10.05 6.6ZM14.9685 9.58565L19.9685 5.58565L19.0315 4.41435L14.0315 8.41435L14.9685 9.58565ZM19.25 19V11H17.75V19H19.25ZM11.25 19V11H9.75V19H11.25ZM15.25 19V14H13.75V19H15.25ZM7.25 19V14H5.75V19H7.25Z"
                    fill="#000000" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
          </div>
          <div class="flex  h-[2rem] w-full  justify-end gap-2 px-2">
            <button class="bg-[#cecece] w-8 h-8 flex justify-center rounded-full">
              <svg width="15px" height="15px" viewBox="0 0 32 32" fill="none" class=" self-center ">
                <path
                  d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button class="bg-[#cecece] w-8 h-8 flex justify-center rounded-full">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                <g clip-path="url(#clip0_15_529)">
                  <rect width="24" height="24" fill="none" />
                  <path
                    d="M2.01394 6.87134C1.34749 10.0618 3.85967 13.8597 7.01471 17.0147C10.1698 20.1698 13.9676 22.682 17.1581 22.0155C19.782 21.4674 21.1215 20.0697 21.8754 18.8788C22.1355 18.4678 22.0042 17.9344 21.6143 17.6436L17.9224 14.8897C17.5243 14.5928 16.9685 14.633 16.6174 14.9842L14.6577 16.9438C14.6577 16.9438 12.7529 16.3246 10.2288 13.8006C7.70482 11.2766 7.08564 9.37175 7.08564 9.37175L9.04529 7.4121C9.39648 7.06091 9.43671 6.5052 9.13975 6.10709L6.38585 2.4151C6.09505 2.02525 5.56163 1.89395 5.15068 2.15407C3.9597 2.90794 2.56203 4.24747 2.01394 6.87134Z"
                    stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_15_529">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- sub boton menu -->
    <div class="relative top-[85%] h-fit w-[90%] mx-auto flex gap-2">
      <div class=" bg-white w-10/12 mx-auto h-12 shadow-2xl rounded-md p-2 ">
        <button @click="setOpen(true)"
          class=" bg-[#cecece]  p-1 border-solid border-[#cecece] border-[.9px] text-[#fff]  w-full  rounded-lg flex justify-between">
          <p class="text-left w-full capitalize font-bold  "> Buscar especialista </p>
          <!-- <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button> -->
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            class=" self-center  ">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5C10.7763 14.5 11.5046 14.3041 12.1403 13.9596C12.5244 13.7514 12.8751 13.4888 13.182 13.182C13.4888 12.8751 13.7514 12.5244 13.9596 12.1403C14.3041 11.5046 14.5 10.7763 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 11.032 15.7388 12.0052 15.2784 12.855C15.1212 13.145 14.9409 13.4206 14.7399 13.6792L20.003 18.9423L18.9423 20.003L13.6792 14.7399C13.4206 14.9408 13.1451 15.1212 12.855 15.2784C12.0052 15.7388 11.032 16 10 16C6.68629 16 4 13.3137 4 10Z"
              fill="#1F2328" />
          </svg>
        </button>
      </div>
      <button @click="setOpenFiltro(true)" class="bg-white rounded-md h-fit p-1 self-center ">
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="text-red-600 align-middle  ">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.90693 3.9999C9.93791 3.99996 9.96894 4.00001 10 4.00001C10.0311 4.00001 10.0621 3.99996 10.0931 3.9999C10.4618 3.99929 10.8242 3.99869 11.147 4.08519C12.0098 4.31636 12.6836 4.99023 12.9148 5.85296C13.0013 6.1758 13.0007 6.53821 13.0001 6.90693C13.0001 6.93792 13 6.96895 13 7.00001H21C21.5523 7.00001 22 7.44772 22 8.00001C22 8.55229 21.5523 9.00001 21 9.00001H13C13 9.03107 13.0001 9.0621 13.0001 9.09309C13.0007 9.46181 13.0013 9.82422 12.9148 10.1471C12.6836 11.0098 12.0098 11.6837 11.147 11.9148C10.8242 12.0013 10.4618 12.0007 10.0931 12.0001C10.0621 12.0001 10.0311 12 10 12C9.96894 12 9.93791 12.0001 9.90692 12.0001C9.5382 12.0007 9.17579 12.0013 8.85295 11.9148C7.99022 11.6837 7.31635 11.0098 7.08519 10.1471C6.99868 9.82421 6.99928 9.46181 6.9999 9.09308C6.99995 9.0621 7 9.03106 7 9.00001H5C4.44772 9.00001 4 8.55229 4 8.00001C4 7.44772 4.44772 7.00001 5 7.00001H7C7 6.96895 6.99995 6.93792 6.9999 6.90693C6.99928 6.53821 6.99868 6.1758 7.08519 5.85296C7.31635 4.99023 7.99022 4.31636 8.85295 4.08519C9.17579 3.99869 9.5382 3.99929 9.90693 3.9999ZM9.49861 6.00536C9.39195 6.01022 9.36685 6.01805 9.37059 6.01704C9.19804 6.06328 9.06327 6.19805 9.01704 6.3706C9.0162 6.37411 9.00963 6.40483 9.00535 6.49861C9.00024 6.61064 9 6.75845 9 7.00001V9.00001C9 9.24156 9.00024 9.38937 9.00535 9.5014C9.01021 9.60806 9.01804 9.63315 9.01704 9.62942C9.06327 9.80196 9.19804 9.93674 9.37059 9.98297C9.36685 9.98197 9.39195 9.98979 9.49861 9.99466C9.61063 9.99977 9.75844 10 10 10C10.2416 10 10.3894 9.99977 10.5014 9.99466C10.608 9.98979 10.6331 9.98197 10.6294 9.98297C10.802 9.93674 10.9367 9.80196 10.983 9.62942C10.982 9.63315 10.9898 9.60806 10.9946 9.5014C10.9998 9.38937 11 9.24156 11 9.00001V7.00001C11 6.75845 10.9998 6.61064 10.9946 6.49861C10.9898 6.39196 10.982 6.36686 10.983 6.3706M9.49861 6.00536C9.61063 6.00025 9.75844 6.00001 10 6.00001L9.49861 6.00536ZM10 6.00001C10.2416 6.00001 10.3894 6.00025 10.5014 6.00536L10 6.00001ZM10.5014 6.00536C10.5952 6.00963 10.6259 6.0162 10.6294 6.01704L10.5014 6.00536ZM10.6298 6.01713C10.6298 6.01713 10.6296 6.0171 10.6294 6.01704L10.6298 6.01713ZM15.9069 11.9999C15.9379 12 15.9689 12 16 12C16.0311 12 16.0621 12 16.0931 11.9999C16.4618 11.9993 16.8242 11.9987 17.147 12.0852C18.0098 12.3164 18.6836 12.9902 18.9148 13.853C19.0013 14.1758 19.0007 14.5382 19.0001 14.9069C19.0001 14.9379 19 14.9689 19 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H19C19 17.0311 19.0001 17.0621 19.0001 17.0931C19.0007 17.4618 19.0013 17.8242 18.9148 18.1471C18.6836 19.0098 18.0098 19.6837 17.147 19.9148C16.8242 20.0013 16.4618 20.0007 16.0931 20.0001C16.0621 20.0001 16.0311 20 16 20C15.9689 20 15.9379 20.0001 15.9069 20.0001C15.5382 20.0007 15.1758 20.0013 14.853 19.9148C13.9902 19.6837 13.3164 19.0098 13.0852 18.1471C12.9987 17.8242 12.9993 17.4618 12.9999 17.0931C12.9999 17.0621 13 17.0311 13 17H5C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15H13C13 14.969 12.9999 14.9379 12.9999 14.9069C12.9993 14.5382 12.9987 14.1758 13.0852 13.853C13.3164 12.9902 13.9902 12.3164 14.853 12.0852C15.1758 11.9987 15.5382 11.9993 15.9069 11.9999ZM15.4986 14.0054C15.392 14.0102 15.3669 14.018 15.3706 14.017C15.198 14.0633 15.0633 14.1981 15.017 14.3706C15.018 14.3669 15.0102 14.392 15.0054 14.4986C15.0002 14.6106 15 14.7585 15 15V17C15 17.2416 15.0002 17.3894 15.0054 17.5014C15.0102 17.6081 15.018 17.6332 15.017 17.6294C15.0633 17.802 15.198 17.9367 15.3706 17.983C15.3669 17.982 15.392 17.9898 15.4986 17.9947C15.6106 17.9998 15.7584 18 16 18C16.2416 18 16.3894 17.9998 16.5014 17.9947C16.608 17.9898 16.6331 17.982 16.6294 17.983C16.802 17.9367 16.9367 17.802 16.983 17.6294C16.982 17.6332 16.9898 17.6081 16.9946 17.5014C16.9998 17.3894 17 17.2416 17 17V15C17 14.7585 16.9998 14.6106 16.9946 14.4986C16.9898 14.392 16.982 14.3669 16.983 14.3706C16.9367 14.1981 16.802 14.0633 16.6294 14.017C16.6331 14.018 16.608 14.0102 16.5014 14.0054C16.3894 14.0002 16.2416 14 16 14C15.7584 14 15.6106 14.0002 15.4986 14.0054Z"
            fill="currentColor" />
        </svg>
      </button>
      <button class="bg-white rounded-md h-fit p-1 self-center ">
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="text-red-600 align-middle  ">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM13.5 3.75L12.75 4.5V10.5L13.5 11.25H19.5L20.25 10.5V4.5L19.5 3.75H13.5ZM14.25 9.75V5.25H18.75V9.75H14.25ZM17.25 20.25H15.75V17.25H12.75V15.75H15.75V12.75H17.25V15.75H20.25V17.25H17.25V20.25ZM4.5 12.75L3.75 13.5V19.5L4.5 20.25H10.5L11.25 19.5V13.5L10.5 12.75H4.5ZM5.25 18.75V14.25H9.75V18.75H5.25Z"
            fill="currentColor" />
        </svg>
      </button>
    </div>

    <!-- botom menu -->
    <div class="bg-white w-[90%] ml-6 z-[1] h-16 absolute bottom-4 rounded-2xl shadow-lg  ">
      <div class="flex justify-around w-[99%] h-[95%]  my-auto mx-auto mt-[3px]">
        <button @click="() => router.push('/tabs/tab1')" class=" w-fit h-fit self-center ">
          <svg fill="#000000" width="35px" height="35px" viewBox="-4.5 0 32 32" version="1.1"
            xmlns="http://www.w3.org/2000/svg" class="mx-auto -mb-2">
            <path
              d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z">
            </path>
          </svg>
          <p class="  font-bold text-center text-[12px] dark:text-black "> Inicio</p>
        </button>
        <button @click="() => router.push('/tabs/tab1')" class=" w-fit h-fit self-center ">
          <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" class="mx-auto" width="25px" height="25px" viewBox="0 0 32 32"
            xml:space="preserve">
            <path class="stone_een" d="M27.857,27.864C27.935,29.572,26.571,31,24.861,31H7.139c-1.71,0-3.075-1.428-2.997-3.136L4.957,9.955
            C4.981,9.42,5.421,9,5.956,9h20.089c0.535,0,0.975,0.42,0.999,0.955L27.857,27.864z M16.185,1.003C12.787,0.901,10,3.625,10,7v1h2V7
            c0-2.209,1.791-4,4-4s4,1.791,4,4v1h2V7.252C22,3.966,19.468,1.101,16.185,1.003z" />
          </svg>
          <p class="  font-bold text-center text-[12px] dark:text-black "> Compras</p>
        </button>
        <button @click="() => router.push('/tabs/tab1')" class=" w-fit h-fit self-center ">
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
            <rect x="5" y="4" width="14" height="17" rx="2" stroke="#33363F" stroke-width="2" />
            <path d="M9 9H15" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
            <path d="M9 13H15" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
            <path d="M9 17H13" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
          </svg>
          <p class="  font-bold text-center text-[12px] dark:text-black "> Ordenes</p>
        </button>
        <button @click="() => router.push('/tabs/tab1')" class=" w-fit h-fit self-center  ">
          <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" class="mx-auto" width="25px" height="25px"
            viewBox="0 0 503.379 503.379" xml:space="preserve">
            <g>
              <path d="M458.091,128.116v326.842c0,26.698-21.723,48.421-48.422,48.421h-220.92c-26.699,0-48.421-21.723-48.421-48.421V242.439
                c6.907,1.149,13.953,1.894,21.184,1.894c5.128,0,10.161-0.381,15.132-0.969v211.594c0,6.673,5.429,12.104,12.105,12.104h220.92
                c6.674,0,12.105-5.432,12.105-12.104V128.116c0-6.676-5.432-12.105-12.105-12.105H289.835c0-12.625-1.897-24.793-5.297-36.315
                h125.131C436.368,79.695,458.091,101.417,458.091,128.116z M159.49,228.401c-62.973,0-114.202-51.229-114.202-114.199
                C45.289,51.229,96.517,0,159.49,0c62.971,0,114.202,51.229,114.202,114.202C273.692,177.172,222.461,228.401,159.49,228.401z
                M159.49,204.19c49.618,0,89.989-40.364,89.989-89.988c0-49.627-40.365-89.991-89.989-89.991
                c-49.626,0-89.991,40.364-89.991,89.991C69.499,163.826,109.87,204.19,159.49,204.19z M227.981,126.308
                c6.682,0,12.105-5.423,12.105-12.105s-5.423-12.105-12.105-12.105h-56.386v-47.52c0-6.682-5.423-12.105-12.105-12.105
                s-12.105,5.423-12.105,12.105v59.625c0,6.682,5.423,12.105,12.105,12.105H227.981z M367.697,224.456h-131.14
                c-6.682,0-12.105,5.423-12.105,12.105c0,6.683,5.423,12.105,12.105,12.105h131.14c6.685,0,12.105-5.423,12.105-12.105
                C379.803,229.879,374.382,224.456,367.697,224.456z M367.91,297.885h-131.14c-6.682,0-12.105,5.42-12.105,12.105
                s5.423,12.105,12.105,12.105h131.14c6.685,0,12.104-5.42,12.104-12.105S374.601,297.885,367.91,297.885z M367.91,374.353h-131.14
                c-6.682,0-12.105,5.426-12.105,12.105c0,6.685,5.423,12.104,12.105,12.104h131.14c6.685,0,12.104-5.42,12.104-12.104
                C380.015,379.778,374.601,374.353,367.91,374.353z" />
            </g>
          </svg>
          <p class="  font-bold text-center text-[12px] dark:text-black "> Historial</p>
        </button>
        <ion-item class=" self-center  ">
          <ion-avatar #="start">
            <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
          </ion-avatar>
        </ion-item>
      </div>
    </div>

    <ion-modal :is-open="isOpenBuscarEspesialista" :initial-breakpoint="0.75" :breakpoints="[0, 0.25, 0.5, 0.75]"
      handle-behavior="cycle">
      <ion-header>
        <ion-toolbar>
          <ion-title>Buscar especialista</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpen(false)">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="#000000" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
          reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
          dicta.
        </p>
      </ion-content>
    </ion-modal>

    <ion-modal :is-open="isOpenFiltrar" :initial-breakpoint="0.75" :breakpoints="[0, 0.25, 0.5, 0.75]"
      handle-behavior="cycle">
      <ion-header>
        <ion-toolbar>
          <ion-title>Filtros</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpenFiltro(false)">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="#000000" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
          reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
          dicta.
        </p>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonRouterOutlet,
  IonAvatar,
  IonChip,
  IonItem,
  IonLabel,
  IonMenuButton,
  menuController,
  IonModal,
  IonContent,
  IonButton,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonImg,
  IonButtons
} from '@ionic/vue';

import iconMap from '@/assets/Icons/customer-info-svgrepo-com.svg'
import IconRepair from '@/assets/Icons/repair-hammer-svgrepo-com.svg'
import menuSideBarRight from '@/components/menuSideRightBarComponent.vue'
import { useTopMenuStore } from '@/stores/storeTopMenu/storeTopMenu.js'
import { useRouter, useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

const router = useRouter()
const route = useRoute()
const StoreTopMenu = useTopMenuStore()
const { toggleBuscar, mode } = storeToRefs(StoreTopMenu)
const { getterToggleView } = useTopMenuStore()

const toggleFilter = computed({
  get() { return toggleBuscar.value },
  set(val) { toggleBuscar.value = val }
})
const modeCliente = computed({
  get() { return mode.value },
  set(val) { mode.value = val }
})
const openFirstMenu = async () => {
  await menuController.open('first-menu');
};


const isOpenBuscarEspesialista = ref(false);

const setOpen = (open: boolean) => (isOpenBuscarEspesialista.value = open);

const isOpenFiltrar = ref(false);

const setOpenFiltro = (open: boolean) => (isOpenFiltrar.value = open);


</script>

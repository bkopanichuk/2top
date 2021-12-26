<template>
  <v-app dark>
    <v-main style="background-color: #191919; font-family: 'Darker Grotesque'">
      <!-- Preloader -->
      <div id="preloader">
        <div id="preloader_logo" class="d-flex align-center">
          <v-img width="100%" :src="require('~/assets/logo.svg')" alt="logo" />
        </div>
      </div>
      <div class="grain" style="z-index: 1">
        <v-img :src="require('~/assets/grain.svg')" />
      </div>
      <v-container style="max-width: 1366px; z-index: 2">
        <!-- Menu -->
        <div class="d-flex menu align-center justify-center">
          <div
            class="d-flex justify-space-between"
            style="width: 100%; max-width: 1238px !important"
          >
            <div class="d-flex align-center">
              <img
                class="menu_logo"
                :src="require('~/assets/logo.svg')"
                alt="logo"
              />
            </div>
            <div class="d-flex menu_items align-center justify-space-between">
              <div>Home</div>
              <div>Partners</div>
              <div>Blog</div>
              <div class="contact_us_button">Contact Us</div>
            </div>
          </div>
        </div>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isloaded: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.showPage()
    })
  },
  methods: {
    showPage() {
      //Preloader Logo
      this.$gsap.to('#preloader_logo', {
        opacity: 1,
        duration: 0.4,
        ease: 'expo.out',
      })
      this.$gsap.to('#preloader_logo', {
        scale: 2,
        duration: 1,
        ease: 'expoScale(1, 1.5, expo.out)',
      })
      this.$gsap.to('#preloader_logo', {
        delay: 1,
        scale: 100,
        duration: 0.4,
        ease: 'expoScale(1.5, 100, expo.in)',
        webkitFilter: 'blur(1024px)',
        filter: 'blur(1024px)',
      })
      this.$gsap.to('#preloader_logo', {
        delay: 1.3,
        opacity: 0,
        duration: 0,
      })

      // Preloader
      this.$gsap
        .timeline()
        .to('#preloader', {
          backgroundColor: '#F9D073',
          delay: 1.2,
          duration: 0.2,
        })
        .to('#preloader', {
          display: 'none',
          opacity: 0,
          duration: 1.6,
        })
    },
  },
}
</script>

<style>
#preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #191919;
  z-index: 9999;
}
#preloader_logo {
  opacity: 0;
  width: 20vw;
}
.grain {
  position: fixed;
  mix-blend-mode: normal;
  top: 0;
  left: 0;
  right: 0;
}
.menu {
  position: absolute;
  padding-left: 4.685vw;
  padding-right: 4.685vw;
  height: 6.442vw;
  top: 0;
  left: 0;
  right: 0;
}
.menu_items {
  width: 26.135vw;
  font-weight: 700;
  font-size: 1.171vw;
  line-height: 1.611vw;
}
.menu_logo {
  width: 11.713vw;
}
.contact_us_button {
  border: 1px solid #f9d073;
  padding: 0.512vw 1.464vw 0.805vw 1.464vw;
  border-radius: 0.586vw;
  color: #f9d073;
}

@media only screen and (min-width: 1365px) {
  .menu {
    height: 88px;
    padding-left: 64px;
    padding-right: 64px;
  }
  .menu_items {
    width: 357px;
    font-size: 16px;
    line-height: 22px;
  }
  .menu_logo {
    width: 160px;
  }
  .contact_us_button {
    padding: 7px 20px 11px 20px;
    border-radius: 8px;
  }
}
</style>

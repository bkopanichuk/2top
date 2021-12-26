<template>
  <div>
    <!-- First block -->
    <v-row class="header">
      <v-col
        cols="6"
        style="z-index: 2; animation: 3s linear 1s slidein"
        class="pa-0"
      >
        <div>
          Hello, we’re
          <span class="gradient_text">Double Top</span>
          - <br />
          a community of investors,<br />
          enthusiasts and tech-savvy <br />
          members in the crypto space
        </div>
      </v-col>
      <v-col class="d-flex justify-center align-center" style="z-index: 1">
        <div class="header_grain t3d-layer" data-speed="2">
          <img :src="require('~/assets/index/HeaderGrains.png')" />
        </div>
        <div class="big_logo_background t3d-layer" data-speed="-4">
          <img :src="require('~/assets/index/BigLogoBackground.svg')" />
        </div>
        <div class="big_logo t3d-layer" data-speed="2">
          <img :src="require('~/assets/index/BigLogo.svg')" />
        </div>
      </v-col>
    </v-row>
    <v-row class="partners">
      <v-col class="pa-0">
        <Partners />
      </v-col>
    </v-row>
    <v-row class="stats">
      <v-col class="stat_text">
        We connect crypto startups at the initial stage with a Russian-speaking
        audience. We’re exploring their tech and investment attractiveness and
        promoting them.
        <br /><br />
        Our mission is to create the strongest community of blockchain investors
        and traders in the CIS. We believe in the active implementation of
        blockchain technologies.
      </v-col>
      <v-col class="stat_numbers d-flex justify-end">
        <div class="first_stat">
          <div class="number">249+</div>
          <div class="number_description">Projects</div>
        </div>
        <div>
          <div class="number">$1.5m</div>
          <div class="number_description">Under management</div>
        </div>
      </v-col>
    </v-row>
    <v-row class="nodes">
      <v-col class="pa-0">
        <div>Nodes</div>
        Decentralization, safety and security are important qualities of
        distributed systems.
        <br /><br />
        The unfolding of the nodes of the networks of promising projects shows
        our long-term vision of the market.
      </v-col>
      <v-col> </v-col>
    </v-row>
  </div>
</template>

<script>
import Partners from '@/components/Partners.vue'
export default {
  name: 'IndexPage',
  components: {
    Partners,
  },
  methods: {
    animateBigLogo() {
      // let mouseOverContainer = document.getElementById('t3d')
      window.addEventListener('mousemove', (e) => {
        let xy = [e.clientX, e.clientY]

        // #3D transform
        let constrain = 600 //Rotation scale
        this.$gsap.utils.toArray('.t3d-layer').forEach((layer) => {
          let position = xy.concat([layer])
          let box = layer.getBoundingClientRect()
          let speed = layer.getAttribute('data-speed')

          // For rotation
          let calcX = -(position[1] - box.y - box.height / 2) / constrain
          let calcY = (position[0] - box.x - box.width / 2) / constrain
          calcX = Math.abs(calcX) >= 2 ? Math.sign(calcX) * 2 : calcX
          calcY = Math.abs(calcY) >= 2 ? Math.sign(calcY) * 2 : calcY

          // Position move
          let x = ((position[0] - box.x - box.width / 2) / box.width) * speed
          let y = ((position[1] - box.y - box.height / 2) / box.height) * speed
          x = Math.abs(x) >= 7 ? Math.sign(x) * 7 : x
          y = Math.abs(y) >= 7 ? Math.sign(y) * 7 : y

          this.$gsap.to(layer, {
            duration: 0.2,
            transform: `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg) translateX(${x}px) translateY(${y}px)`,
          })
        })
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.animateBigLogo()
    })
  },
}
</script>

<style>
.header {
  font-style: normal;
  font-weight: 700;
  font-size: 4.1vw;
  line-height: 5.564vw;
  color: #ffffff;
  padding-top: 20.278vw;
  padding-left: 4.685vw;
}
.header_grain {
  z-index: 4;
  position: absolute;
  top: 0;
}
.header_grain img {
  transform: translateX(-15.373vw);
  width: 122.987vw;
}
.big_logo {
  z-index: 3;
  position: absolute;
  top: 21.669vw;
}
.big_logo img {
  width: 20.498vw;
}
.big_logo_background {
  z-index: 2;
  position: absolute;
  top: 4.392vw;
}
.big_logo_background img {
  width: 59.297vw;
}
.gradient_text {
  background: -webkit-linear-gradient(70deg, #f5cd6f, #fce2a4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.partners {
  margin-top: 23.426vw !important;
  padding-left: 2.928vw;
  padding-right: 2.928vw;
}
.stats {
  margin-top: 14.641vw !important;
  padding-left: 4.685vw;
  padding-right: 4.685vw;
  font-weight: normal;
  font-size: 1.464vw;
  line-height: 160%;
}
.stats .number {
  font-family: Inter;
  font-weight: 600;
  font-size: 4.685vw;
  line-height: 5.637vw;

  color: #ffffff;
}
.stats .number_description {
  font-weight: normal;
  font-size: 1.318vw;
  line-height: 1.757vw;
  color: #f5cd6f;
}
.first_stat {
  margin-right: 7.321vw;
}
.stat_text {
  padding: 0;
  padding-right: 2.489vw;
}
.stat_numbers {
  padding: 0;
  padding-top: 1.757vw;
}
@media only screen and (min-width: 1365px) {
  .header {
    font-size: 56px;
    line-height: 76px;

    padding-top: 277px;
    padding-left: 64px;
  }
  .big_logo {
    top: 296px;
  }
  .big_logo img {
    width: 280px;
  }
  .big_logo_background {
    top: 60px;
  }
  .big_logo_background img {
    width: 810px;
  }
  .header_grain img {
    width: 1680px;
    transform: translateX(-210px);
  }
  .partners {
    margin-top: 320px !important;
    padding-left: 40px;
    padding-right: 40px;
  }
  .stats {
    margin-top: 200px !important;
    padding-left: 64px;
    padding-right: 64px;
    font-size: 20px;
  }
  .stats .number {
    font-family: Inter;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;

    color: #ffffff;
  }
  .stats .number_description {
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #f5cd6f;
  }
  .first_stat {
    margin-right: 100px;
  }
  .stat_numbers {
    padding-top: 34px;
  }
  .stat_text {
    padding-right: 24px;
  }
}
</style>

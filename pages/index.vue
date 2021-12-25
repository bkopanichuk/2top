<template>
  <div>
    <!-- First block -->
    <v-row id="ex1" class="header">
      <v-col
        cols="6"
        style="z-index: 2; animation: 3s linear 1s slidein"
        class="px-0"
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
      <v-col class="d-flex justify-center" style="z-index: 1">
        <div class="big_logo_background" id="ex3-layer">
          <img
            :src="require('~/assets/index/BigLogoBackground.svg')"
            data-speed="5"
            class="layer"
          />
        </div>
        <div class="big_logo" id="ex1-layer">
          <img
            :src="require('~/assets/index/BigLogo.svg')"
            data-speed="3"
            class="layer"
          />
        </div>
        <div class="header_grain" id="ex2-layer">
          <img
            data-speed="3"
            class="layer"
            :src="require('~/assets/index/HeaderGrains.png')"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="partners">
      <v-col class="px-0">
        <img :src="require('~/assets/partners/temp.svg')" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    let constrain = 800
    let mouseOverContainer = document.getElementById('ex1')
    let ex1Layer = document.getElementById('ex1-layer')
    let ex2Layer = document.getElementById('ex2-layer')
    let ex3Layer = document.getElementById('ex3-layer')

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect()
      let calcX = -(y - box.y - box.height / 2) / constrain
      let calcY = (x - box.x - box.width / 2) / constrain

      return (
        'perspective(100px) ' +
        '   rotateX(' +
        calcX +
        'deg) ' +
        '   rotateY(' +
        calcY +
        'deg) '
      )
    }

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl)
    }

    mouseOverContainer.onmousemove = function (e) {
      let xy = [e.clientX, e.clientY]
      let position = xy.concat([ex1Layer])
      let position2 = xy.concat([ex2Layer])
      let position3 = xy.concat([ex3Layer])

      this.querySelectorAll('.layer').forEach((layer) => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.clientX * speed) / 100
        const y = (window.innerHeight - e.clientY * speed) / 100

        window.requestAnimationFrame(function () {
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
      })

      window.requestAnimationFrame(function () {
        transformElement(ex1Layer, position)
        transformElement(ex2Layer, position2)
        transformElement(ex3Layer, position3)
      })
    }
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

  padding-top: 21.278vw;
  padding-left: 4.685vw;
}

.header_grain {
  position: absolute;
  mix-blend-mode: normal;
  top: 0;
  margin-right: 30.747vw;
}

.header_grain img {
  width: 122.987vw !important;
}

.big_logo {
  position: absolute;
  top: 21.23vw;
}

.big_logo img {
  width: 22.255vw;
}

.big_logo_background {
  position: absolute;
  top: 2.928vw;
  margin-left: -3.367vw;
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
  margin-top: 25.622vw !important;
  padding-left: 4.685vw;
}

@media only screen and (min-width: 1365px) {
  .header {
    font-size: 56px;
    line-height: 76px;

    padding-top: 277px;
    padding-left: 64px;
  }
  .big_logo {
    top: 290px;
  }
  .big_logo img {
    width: 304px;
  }
  .big_logo_background {
    width: 810px;
    top: 40px;
    margin-left: -46px;
  }
  .big_logo_background img {
    width: 810px;
  }
  .header_grain {
    margin-right: 420px;
  }
  .header_grain img {
    width: 1680px !important;
  }
  .partners {
    margin-top: 350px !important;
    padding-left: 64px;
  }
}
</style>

<template>
  <div>
    <!-- Header block -->
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
          <img :src="require('~/assets/index/HeaderGrains.svg')" />
        </div>
        <div class="big_logo_background t3d-layer" data-speed="-4">
          <img :src="require('~/assets/index/BigLogoBackground.svg')" />
        </div>
        <div class="big_logo t3d-layer" data-speed="2">
          <img :src="require('~/assets/index/BigLogo.svg')" />
        </div>
      </v-col>
    </v-row>

    <!-- Partners block -->
    <v-row class="partners">
      <v-col class="pa-0">
        <Partners />
      </v-col>
    </v-row>

    <!-- Stats block -->
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

    <!-- Nodes block -->
    <v-row class="nodes">
      <v-col class="d-flex nodes_text justify-center flex-column">
        <div class="nodes_title">Nodes</div>
        Decentralization, safety and security are important qualities of
        distributed systems.
        <br /><br />
        The unfolding of the nodes of the networks of promising projects shows
        our long-term vision of the market.
      </v-col>
      <v-col class="d-flex justify-end pa-0">
        <img class="nodes_img" :src="require('~/assets/nodes/NodeList.svg')" />
        <div class="d-flex align-center justify-center nodes_grain">
          <img :src="require('~/assets/nodes/NodesGrain.svg')" />
        </div>
      </v-col>
    </v-row>

    <!-- Squad block -->
    <v-row class="squad">
      <v-col class="pa-0">
        <div class="squad_title">Squad</div>
        <div class="squad_text">
          SQUAD is a strong community of like-minded people, a symbiosis of
          useful information and expert judgment.
        </div>
        <div>
          <div class="d-flex squad_row align-center justify-space-between">
            <div class="d-flex flex-column squad_card justify-space-between">
              <div class="squad_card_icon">
                <img :src="require('~/assets/squad/fundamental.svg')" />
              </div>
              <div>Fundamental analysis</div>
            </div>
            <div class="d-flex flex-column squad_card justify-space-between">
              <div class="squad_card_icon">
                <img :src="require('~/assets/squad/Technical.svg')" />
              </div>
              <div>Technical analysis</div>
            </div>
            <div class="d-flex flex-column squad_card justify-space-between">
              <div class="squad_card_icon">
                <img :src="require('~/assets/squad/defi.svg')" />
              </div>
              <div>DEFI</div>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex flex-column squad_card justify-space-between">
              <div class="squad_card_icon">
                <img :src="require('~/assets/squad/nft.svg')" />
              </div>
              <div>NFT</div>
            </div>
            <div class="d-flex flex-column squad_card justify-space-between">
              <div class="squad_card_icon">
                <img :src="require('~/assets/squad/nodes.svg')" />
              </div>
              <div>Nodes</div>
            </div>
            <div class="d-flex flex-column squad_card justify-space-between">
              <div class="squad_card_icon">
                <img :src="require('~/assets/squad/ico.svg')" />
              </div>
              <div>ICO | IDO | IEO</div>
            </div>
          </div>
        </div>
        <div class="d-flex align-center">
          <img class="squad_grain" :src="require('~/assets/squad/Grain.svg')" />
        </div>
      </v-col>
    </v-row>

    <!-- Comments block -->
    <v-row class="comments">
      <v-col class="d-flex comments_text justify-center flex-column">
        <div class="comments_title">
          We are only as good, <br />
          as our clients say we are
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </v-col>
      <v-col class="d-flex comments_cards">
        <div class="d-flex comment_card">
          <div class="comment_card_avatar">
            <img :src="require('~/assets/comments/avatar1.png')" />
          </div>
          <div class="comment_card_content">
            <div class="d-flex">
              <div class="comment_card_content_name">Kautilya Reddy</div>
              <div class="comment_card_content_tag">@reddyzzz</div>
            </div>
            <div class="comment_card_content_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Team block -->
    <v-row class="team">
      <v-col class="pa-0">
        <div class="team_title">Team</div>
        <div class="team_text">Young and beautiful (c) Lana Del Ray</div>
        <div class="team_img">
          <img :src="require('~/assets/team/FakeTeam.svg')" />
        </div>
      </v-col>
    </v-row>

    <!-- Join Us block -->
    <v-row class="d-flex joinus justify-center">
      <v-col
        class="joinus_text pa-0 d-flex align-center justify-center flex-column"
      >
        Do you want to be a part <br />
        of our team?
        <div class="joinus_btn">Join us!</div>
        <div class="joinus_logo">
          <img :src="require('~/assets/joinus/logo.svg')" />
        </div>
        <div class="d-flex align-center justify-center joinus_grain">
          <img :src="require('~/assets/joinus/grain.svg')" />
        </div>
      </v-col>
    </v-row>

    <!-- Footer block -->
    <v-row class="d-flex footer align-center justify-center">
      <v-col
        class="footer_content d-flex align-center justify-space-between"
        style="max-width: 1366px"
      >
        <div class="d-flex align-center">
          <img class="footer_logo" :src="require('~/assets/logo.svg')" />
        </div>
        <div class="d-flex footer_social align-center justify-space-between">
          <div>instagram</div>
          <div>twitter</div>
          <div>youtube</div>
        </div>
        <div class="footer_contact_us">Contact Us</div>
      </v-col>
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
/* Header block */
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
  transform: translateX(-15.373vw) translateY(-8.785vw);
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

/* Partners block */
.partners {
  margin-top: 23.426vw !important;
  padding-left: 2.928vw;
  padding-right: 2.928vw;
}

/* Stats block */
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

/* Nodes block */
.nodes {
  margin-top: 14.641vw !important;
  padding-left: 4.685vw;
  padding-right: 4.466vw;
  font-size: 1.464vw;
  line-height: 160%;
  color: #d9d7d2;
}
.nodes_title {
  color: #f8f9fc;
  font-weight: bold;
  font-size: 4.1vw;
  line-height: 5.564vw;
  margin-bottom: 1.757vw;
  z-index: 2;
}
.nodes_text {
  padding: 0;
  padding-right: 15.373vw;
  z-index: 2;
}
.nodes_img {
  width: 35.725vw;
  z-index: 2;
}
.nodes_grain img {
  position: absolute;
  width: 197.657vw;
  transform: translateX(29.283vw) translateY(-7.321vw);
}

/* Squad block */
.squad {
  margin-top: 14.641vw !important;
  padding-left: 4.685vw;
  padding-right: 4.685vw;
  font-size: 1.464vw;
  line-height: 160%;
  color: #d9d7d2;
}
.squad_grain {
  position: absolute;
  width: 2700px;
  transform: translateX(-1200px) translateY(100px);
  z-index: 1;
}
.squad_title {
  color: #f8f9fc;
  font-weight: bold;
  font-size: 4.1vw;
  line-height: 5.564vw;
  margin-bottom: 1.318vw;
  z-index: 2;
}
.squad_text {
  max-width: 31.113vw;
  margin-bottom: 4.1vw;
  z-index: 2;
}
.squad_card {
  z-index: 2;
  width: 31.5%;
  padding: 2.928vw;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.171vw;
  font-weight: bold;
  font-size: 1.757vw;
  line-height: 2.928vw;
  color: #ffffff;
}
.squad_card_icon {
  margin-bottom: 1.757vw;
}
.squad_card_icon img {
  width: 4.685vw;
}
.squad_row {
  margin-bottom: 1.757vw;
}

/* Comments block */
.comments {
  margin-top: 14.641vw !important;
  padding-left: 4.685vw;
  padding-right: 4.685vw;
  font-size: 1.464vw;
  line-height: 160%;
  color: #d9d7d2;
}
.comments_text {
  padding: 0;
  max-width: 38.799vw;
}
.comments_title {
  color: #f8f9fc;
  font-weight: bold;
  font-size: 4.1vw;
  line-height: 5.564vw;
  margin-bottom: 1.757vw;
}
.comments_cards {
  padding: 0;
  padding-top: 2.05vw;
  padding-left: 6.223vw;
  height: min-content;
}
.comment_card {
  padding: 2.928vw;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.171vw;
  max-width: 28.111vw;
  margin-right: 2.343vw;
}
.comment_card_avatar img {
  width: 2.782vw;
}
.comment_card_content {
  padding-left: 1.318vw;
}
.comment_card_content_name {
  font-weight: 600;
  font-size: 1.464vw;
  line-height: 1.977vw;
  color: #ffffff;
}
.comment_card_content_tag {
  font-weight: normal;
  font-size: 1.464vw;
  line-height: 1.977vw;
  color: #f5cd6f;
  padding-left: 0.586vw;
}
.comment_card_content_text {
  padding-top: 0.586vw;
  font-weight: normal;
  font-size: 1.318vw;
  line-height: 160%;
  color: #d9d7d2;
}

/* Team block */
.team {
  margin-top: 14.641vw !important;
  padding-left: 4.685vw;
  padding-right: 4.685vw;
  font-size: 1.464vw;
  line-height: 160%;
  color: #d9d7d2;
}
.team_title {
  font-size: 4.1vw;
  line-height: 5.564vw;
  margin-bottom: 1.318vw;
  color: #f8f9fc;
  font-weight: bold;
}
.team_text {
  max-width: 31.113vw;
  margin-bottom: 4.1vw;
}
.team_img img {
  width: 90.776vw;
}

/* Join Us block */
.joinus {
  margin-top: 19.034vw !important;
  margin-bottom: 13.909vw !important;
  padding-left: 4.685vw;
  padding-right: 4.685vw;
  font-weight: bold;
  font-size: 4.1vw;
  line-height: 5.564vw;
}
.joinus_text {
  width: fit-content;
  text-align: center;
}
.joinus_btn {
  background: linear-gradient(92.16deg, #b28736 8.45%, #f8cf72 100.74%);
  border-radius: 0.586vw;
  font-weight: bold;
  font-size: 1.464vw;
  line-height: 1.977vw;
  color: #ffffff;
  width: fit-content;
  margin-top: 2.928vw;
  padding-left: 2.562vw;
  padding-right: 2.562vw;
  padding-top: 0.586vw;
  padding-bottom: 0.952vw;
}
.joinus_logo {
  position: absolute;
  transform: translateX(24.597vw) translateY(1.464vw);
}
.joinus_logo img {
  width: 43.924vw;
}

/* Footer block */
.footer {
  margin-top: 0 !important;
  z-index: 20;
  position: absolute;
  left: 0;
  right: 0;
  background-color: #191919;
  height: 6.442vw;
}
.footer_content {
  padding-left: 4.685vw;
  padding-right: 4.685vw;
}
.footer_logo {
  width: 11.713vw;
}
.footer_social {
  width: 23.426vw;
  font-weight: 500;
  font-size: 1.318vw;
  line-height: 1.757vw;
  color: #d9d7d2;
  text-shadow: 0 0.146vw 0.439vw rgba(34, 34, 34, 0.5);
}
.footer_contact_us {
  border: 1px solid #f9d073;
  padding: 0.512vw 1.464vw 0.805vw 1.464vw;
  border-radius: 0.586vw;
  color: #f9d073;
  font-weight: bold;
  font-size: 1.171vw;
  line-height: 1.611vw;
}

@media only screen and (min-width: 1365px) {
  /* Header block */
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
    transform: translateX(-210px) translateY(-120px);
  }

  /* Partners block */
  .partners {
    margin-top: 320px !important;
    padding-left: 40px;
    padding-right: 40px;
  }

  /* Stats block */
  .stats {
    margin-top: 200px !important;
    padding-left: 64px;
    padding-right: 64px;
    font-size: 20px;
    color: #d9d7d2;
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

  /* Nodes block */
  .nodes {
    margin-top: 200px !important;
    padding-left: 64px;
    padding-right: 61px;
    font-size: 20px;
    line-height: 160%;
    color: #d9d7d2;
  }
  .nodes_title {
    color: #f8f9fc;
    font-weight: bold;
    font-size: 56px;
    line-height: 76px;
    margin-bottom: 24px;
    z-index: 2;
  }
  .nodes_text {
    padding: 0;
    padding-right: 210px;
    z-index: 2;
  }
  .nodes_img {
    width: 488px;
    z-index: 2;
  }
  .nodes_grain img {
    z-index: 1;
    width: 2700px;
    transform: translateX(-900px) translateY(-800px);
  }

  /* Squad block */
  .squad {
    margin-top: 200px !important;
    padding-left: 64px;
    padding-right: 64px;
    font-size: 20px;
  }
  .squad_title {
    font-size: 56px;
    line-height: 76px;
    margin-bottom: 18px;
  }
  .squad_text {
    max-width: 425px;
    margin-bottom: 56px;
  }
  .squad_card {
    padding: 40px;
    border-radius: 16px;
    font-size: 24px;
    line-height: 40px;
  }
  .squad_card_icon {
    margin-bottom: 24px;
  }
  .squad_card_icon img {
    width: 64px;
  }
  .squad_row {
    margin-bottom: 24px;
  }

  /* Comments block */
  .comments {
    margin-top: 200px !important;
    padding-left: 64px;
    padding-right: 64px;
    font-size: 20px;
  }
  .comments_text {
    padding: 0;
    max-width: 530px;
  }
  .comments_title {
    font-size: 56px;
    line-height: 76px;
    margin-bottom: 24px;
  }
  .comments_cards {
    padding-top: 28px;
    padding-left: 85px;
  }
  .comment_card {
    padding: 40px;
    border-radius: 16px;
    max-width: 384px;
    margin-right: 32px;
  }
  .comment_card_avatar img {
    width: 38px;
  }
  .comment_card_content {
    padding-left: 18px;
  }
  .comment_card_content_name {
    font-size: 20px;
    line-height: 27px;
  }
  .comment_card_content_tag {
    font-size: 20px;
    line-height: 27px;
    padding-left: 8px;
  }
  .comment_card_content_text {
    padding-top: 8px;
    font-size: 18px;
  }

  /* Team block */
  .team {
    margin-top: 200px !important;
    padding-left: 64px;
    padding-right: 64px;
    font-size: 20px;
  }
  .team_title {
    font-size: 56px;
    line-height: 76px;
    margin-bottom: 18px;
  }
  .team_text {
    max-width: 425px;
    margin-bottom: 56px;
  }
  .team_img img {
    width: 1240px;
  }

  /* Join Us block */
  .joinus {
    margin-top: 260px !important;
    margin-bottom: 190px !important;
    padding-left: 64px;
    padding-right: 64px;
    font-size: 56px;
    line-height: 76px;
  }
  .joinus_btn {
    border-radius: 8px;
    font-size: 20px;
    line-height: 27px;
    margin-top: 40px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 8px;
    padding-bottom: 13px;
  }
  .joinus_logo {
    transform: translateX(336px) translateY(20px);
  }
  .joinus_logo img {
    width: 600px;
  }
  .joinus_grain {
    position: absolute;
  }
  .joinus_grain img {
    width: 1000px;
    transform: translateX(450px) translateY(320px);
    z-index: 1;
  }

  /* Footer block */
  .footer {
    height: 88px;
  }
  .footer_content {
    padding-left: 64px;
    padding-right: 64px;
  }
  .footer_logo {
    width: 160px;
  }
  .footer_social {
    width: 320px;
    font-size: 18px;
    line-height: 24px;
    text-shadow: 0px 2px 6px rgba(34, 34, 34, 0.5);
  }
  .footer_contact_us {
    padding: 7px 20px 11px 20px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 22px;
  }
}
</style>

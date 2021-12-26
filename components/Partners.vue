<template>
  <div class="d-flex align-center justify-space-between flex-wrap">
    <div v-for="partner in partners" :key="partner.name" style="z-index: 2">
      <a
        @mouseover="changeSrc(partner, true)"
        @mouseleave="changeSrc(partner, false)"
        :href="partner.url"
        target="_blank"
      >
        <img
          :class="'partner_logo ' + partner.name"
          :src="partner.src_gray"
          :alt="partner.name"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeSrc(partner, hover) {
      this.$gsap
        .timeline()
        .to('.' + partner.name, {
          opacity: 0.4,
          duration: 0.2,
        })
        .set('.' + partner.name, {
          attr: { src: hover ? partner.src : partner.src_gray },
        })
        .to('.' + partner.name, {
          opacity: 1,
          duration: 0.3,
        })
    },
  },
  data() {
    return {
      partners: [
        {
          name: 'binance',
          url: '',
          src: require('~/assets/partners/binance.svg'),
          src_gray: require('~/assets/partners/binance-gray.svg'),
        },
        {
          name: 'ftx',
          url: '',
          src: require('~/assets/partners/ftx.svg'),
          src_gray: require('~/assets/partners/ftx-gray.svg'),
        },
        {
          name: 'daomaker',
          url: '',
          src: require('~/assets/partners/daomaker.svg'),
          src_gray: require('~/assets/partners/daomaker-gray.svg'),
        },
        {
          name: 'coldstack',
          url: '',
          src: require('~/assets/partners/coldstack.svg'),
          src_gray: require('~/assets/partners/coldstack-gray.svg'),
        },
        {
          name: 'deltatheta',
          url: '',
          src: require('~/assets/partners/deltatheta.svg'),
          src_gray: require('~/assets/partners/deltatheta-gray.svg'),
        },
        {
          name: 'lossless',
          url: '',
          src: require('~/assets/partners/lossless.svg'),
          src_gray: require('~/assets/partners/lossless-gray.svg'),
        },
        {
          name: 'minima',
          url: '',
          src: require('~/assets/partners/minima.svg'),
          src_gray: require('~/assets/partners/minima-gray.svg'),
        },
        {
          name: 'kattana',
          url: '',
          src: require('~/assets/partners/kattana.svg'),
          src_gray: require('~/assets/partners/kattana-gray.svg'),
        },
        {
          name: 'prosper',
          url: '',
          src: require('~/assets/partners/prosper.svg'),
          src_gray: require('~/assets/partners/prosper-gray.svg'),
        },
        {
          name: 'aluna',
          url: '',
          src: require('~/assets/partners/aluna.svg'),
          src_gray: require('~/assets/partners/aluna-gray.svg'),
        },
        {
          name: 'dydx',
          url: '',
          src: require('~/assets/partners/dydx.svg'),
          src_gray: require('~/assets/partners/dydx-gray.svg'),
        },
        {
          name: 'crowny',
          url: '',
          src: require('~/assets/partners/crowny.svg'),
          src_gray: require('~/assets/partners/crowny-gray.svg'),
        },
        {
          name: 'orao',
          url: '',
          src: require('~/assets/partners/orao.svg'),
          src_gray: require('~/assets/partners/orao-gray.svg'),
        },
        {
          name: 'coinburp',
          url: '',
          src: require('~/assets/partners/coinburp.svg'),
          src_gray: require('~/assets/partners/coinburp-gray.svg'),
        },
        {
          name: 'derbit',
          url: '',
          src: require('~/assets/partners/derbit.svg'),
          src_gray: require('~/assets/partners/derbit-gray.svg'),
        },
      ],
    }
  },
}
</script>

<style>
.partner_logo {
  height: 4.1vw;
  padding-top: 1.171vw;
  padding-bottom: 1.171vw;
  padding-left: 1.757vw;
  padding-right: 1.757vw;
}
@media only screen and (min-width: 1365px) {
  .partner_logo {
    height: 56px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>

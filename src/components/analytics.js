import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'jerry-chong-website',
  debug: true,
  plugins: [
    googleAnalytics({
      trackingId: 'UA-140876731-2',
    }),
  ]
})

export default analytics
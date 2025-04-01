import { useCallback } from '@lynx-js/react'

import '../App.css'
import lynxLogo from '../assets/lynx-logo.png'

export function Welcome({ onGetStarted }: { onGetStarted: () => void }) {
  const handleGetStarted = useCallback(() => {
    onGetStarted()
  }, [onGetStarted])

  return (
    <view className="WelcomeScreen">
      <view className="Background" />
      <view className="Welcome">
        <view className="WelcomeBanner">
          <image src={lynxLogo} className="WelcomeLogo" />
          <text className="WelcomeTitle">Welcome to Lynx</text>
          <text className="WelcomeSubtitle">Your next-gen mobile experience</text>
        </view>
        <view className="WelcomeContent">
          <text className="WelcomeDescription">
            Get started with this amazing React-powered mobile app
          </text>
          <view className="GetStartedButton" bindtap={handleGetStarted}>
            <text>Get Started</text>
          </view>
        </view>
      </view>
    </view>
  )
}

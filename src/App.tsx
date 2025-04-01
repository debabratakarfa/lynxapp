import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { Welcome } from './screens/Welcome'

export function App() {
  const [alterLogo, setAlterLogo] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(!alterLogo)
  }, [alterLogo])

  const onButtonClick = useCallback(() => {
    console.info('Button clicked!')
  }, [])

  const handleGetStarted = useCallback(() => {
    setShowWelcome(false)
  }, [])

  if (showWelcome) {
    return <Welcome onGetStarted={handleGetStarted} />
  }

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo' bindtap={onTap}>
            {alterLogo
              ? <image src={reactLynxLogo} className='Logo--react' />
              : <image src={lynxLogo} className='Logo--lynx' />}
          </view>
          <text className='Title'>React</text>
          <text className='Subtitle'>on Lynx</text>
        </view>
        <view className='Content'>
          <image src={arrow} className='Arrow' />
          <text className='Description'>Tap the logo and have fun!</text>
          <text className='Hint'>
            Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
            to see updates here.
          </text>
          <view className='MyButton' bindtap={onButtonClick}>
            <text>Click Me</text>
          </view>
        </view>
        <view className='Footer'>
          <text className='FooterText'>Powered by Avancerv</text>
          <image src={lynxLogo} className='FooterLogo' /> 
        </view>
      </view>
    </view>
  )
}

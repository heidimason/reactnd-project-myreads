import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import { black } from 'material-ui/styles/colors'

const styles = {
  circularProgress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '80px'
  }
}

const LoadingAnimation = () => (
	<div style={styles.circularProgress}>
  	<CircularProgress
    		size={80}
    		thickness={5}
    		color={black}
  	/>
	</div>
)

export default LoadingAnimation
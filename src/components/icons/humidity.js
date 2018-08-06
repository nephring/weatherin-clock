import React from 'react'

class HumidityIcon extends React.Component {
  
  render () {
    return (
      <div style={{display: 'flex'}}>
      <svg 
        version="1.1" 
        x="0px" 
        y="0px"
        viewBox="0 0 190.391 190.391"
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}>
        <path d="M178.203,113.471c0-21.885-34.001-71.735-37.878-77.348c-1.4-2.027-3.707-3.237-6.172-3.237
          c-2.464,0-4.771,1.21-6.171,3.238c-1.309,1.896-6.056,8.843-11.768,18.052C100.844,27.223,84.504,3.507,84.318,3.237
          C82.917,1.21,80.61,0,78.146,0c-2.464,0-4.771,1.21-6.171,3.238c-6.12,8.861-59.788,87.547-59.788,121.197
          c0,36.368,29.589,65.955,65.959,65.955c23.491,0,45.391-12.771,57.101-32.914C159.032,156.893,178.203,137.385,178.203,113.471z
          M78.147,175.391c-28.099,0-50.959-22.858-50.959-50.955c0-21.806,32.533-75.605,50.942-103.49
          c6.985,10.608,18.768,29.062,29.245,48.145c-8.899,15.801-17.258,33.528-17.258,44.38c0,18.974,12.063,35.183,28.923,41.362
          C109.516,167.551,94.321,175.391,78.147,175.391z M134.154,142.505c-16.011,0-29.037-13.025-29.037-29.034
          c0-7.837,7.869-24.102,17.101-40.102c0.168-0.252,0.316-0.515,0.452-0.784c3.767-6.495,7.74-12.923,11.486-18.701
          c13.122,20.228,29.047,48.429,29.047,59.587C163.203,129.48,150.172,142.505,134.154,142.505z"/>
      </svg>
    </div>
    )
  }
}

HumidityIcon.defaultProps = {
  size: "40px",
  height: "40px",
  fill: "#f8f8f8"
}

export default HumidityIcon
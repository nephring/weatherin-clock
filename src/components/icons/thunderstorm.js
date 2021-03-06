import React from "react"
import PropTypes from "prop-types"

class ThunderstormIcon extends React.Component {
  render() {
    const { fill, size } = this.props
    return (
      <div style={{ display: "flex" }}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 190.391 190.391"
          fill={fill}
          width={size}
          height={size}
        >
          <path
            d="M171.354,70.433c-1.233-2.638-3.882-4.324-6.794-4.324h-49.832l31.245-54.899c1.321-2.322,1.308-5.171-0.035-7.48
          C144.595,1.421,142.125,0,139.454,0h-51.43c-2.696,0-5.185,1.447-6.518,3.79L19.313,113.07c-1.321,2.321-1.308,5.17,0.035,7.479
          c1.343,2.309,3.812,3.73,6.483,3.73h53.687l-13.597,56.867c-0.81,3.386,0.817,6.884,3.928,8.446
          c1.072,0.538,2.223,0.798,3.363,0.798c2.168,0,4.295-0.94,5.758-2.69l91.344-109.281C172.182,76.185,172.587,73.071,171.354,70.433z
          M87.933,153.589l8.384-35.065c0.533-2.233,0.015-4.588-1.407-6.39c-1.422-1.802-3.592-2.854-5.888-2.854H38.729L92.386,15h34.17
          L95.311,69.899c-1.321,2.322-1.308,5.171,0.035,7.48c1.343,2.309,3.813,3.73,6.483,3.73h46.687L87.933,153.589z"
          />
        </svg>
      </div>
    )
  }
}

ThunderstormIcon.defaultProps = {
  size: "40px",
  fill: "#f8f8f8"
}

ThunderstormIcon.propTypes = {
  size: PropTypes.string,
  fill: PropTypes.string
}

export default ThunderstormIcon

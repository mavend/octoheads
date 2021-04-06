import React from 'react'
import { colors } from '../theme'
import { useTheme } from '../themeContext'
import { Noop } from '../utils/Noop'
import { FacialHairProps } from './facialHair/types'
import { HairProps } from './hair/types'
import { ClothingProps } from './clothing/types'
import { Mask } from './Mask'
import { BgCircle } from './BgCircle'
import { MouthProps } from './mouths/types'
import { BodyProps } from './bodies/types'
import { HatProps } from './hats/types'
import { EyeProps } from './eyes/types'
import { DressShirt } from './clothing/DressShirt'
import { FaceMask } from './FaceMask'

interface BaseProps {
  eyes: React.ComponentType<EyeProps>
  eyebrows: React.ComponentType
  mouth: React.ComponentType<MouthProps>
  hair?: {
    Front: React.ComponentType<HairProps>
    Back: React.ComponentType<HairProps>
    hatScale?: number
  }
  facialHair: React.ComponentType<FacialHairProps>
  accessory: React.ComponentType
  graphic: React.ComponentType
  hat: {
    Front: React.ComponentType<ClothingProps & HatProps>
    Back: React.ComponentType<ClothingProps & HatProps>
  }
  body: {
    Front: React.ComponentType<BodyProps>
    Back: React.ComponentType<BodyProps>
  }
  clothing: {
    Front: React.ComponentType<ClothingProps>
    Back: React.ComponentType<ClothingProps>
    braStraps?: boolean
  }

  clothingColor: keyof typeof colors.clothing
  hairColor: keyof typeof colors.hair
  circleColor: keyof typeof colors.bgColors
  lipColor: keyof typeof colors.lipColors
  hatColor: keyof typeof colors.clothing
  faceMaskColor: keyof typeof colors.clothing

  mask: boolean
  faceMask: boolean
  lashes: boolean
}

export const Base = ({
  eyes: Eyes,
  eyebrows: Eyebrows,
  mouth: Mouth,
  hair = { Front: Noop, Back: Noop },
  facialHair: FacialHair,
  clothing = { Front: Noop, Back: Noop },
  accessory: Accessory,
  graphic: Graphic,
  hat = { Front: Noop, Back: Noop },
  body,

  hairColor,
  clothingColor,
  circleColor,
  lipColor,
  hatColor,
  faceMaskColor,

  mask,
  faceMask,
  lashes,

  ...rest
}: BaseProps) => {
  const { skin } = useTheme()

  const { Front: FrontHair, Back: BackHair, hatScale } = hair
  const { Front: FrontHat, Back: BackHat } = hat
  const { Front: FrontBody, Back: BackBody } = body
  const {
    Front: ClothingFront,
    Back: ClothingBack,
    braStraps = true,
  } = clothing

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 0 1060 1120" {...rest}>
      {mask && <Mask id="mask" />}
      <g mask={mask ? `url(#mask)` : undefined}>
        {mask && <BgCircle circleColor={circleColor} />}
        <BackHat color={hatColor} scale={hatScale} />
        <BackHair hairColor={hairColor} hasHat={FrontHat !== Noop} />
        <path
          d="M232.25,500c0,-147.32 119.43,-266.75 266.75,-266.75c147.32,0 266.75,119.43 266.75,266.75c0.005,4.853 -0.123,9.69 -0.382,14.508c-3.041,56.58 -7.899,222.14 -4.807,268.71c6.901,103.938 150.908,128.446 198.917,126.383c24.474,-1.054 43.193,20.134 45.666,41.317c2.511,21.533 -11.761,43.063 -53.837,41.246c-186.785,-8.063 -239.36,-112.554 -250.461,-105.813c-25.357,15.38 55.852,89.355 108.255,107.55c61.731,21.442 -4.794,85.705 -76.819,63.517c-102.257,-31.487 -161.812,-161.983 -191.608,-126.771c-18.501,21.863 48.276,96.254 72.334,112.888c46.664,32.275 -6.851,86.604 -70.462,48.1c-97.698,-59.129 -100.951,-151.759 -125.326,-144.979c-23.687,6.579 -15.207,28.345 -94.264,83.958c-79.053,55.612 -177.188,68.2 -195.945,37.583c-18.756,-30.621 26.498,-54.771 65.062,-69.021c38.56,-14.254 105.044,-38.404 104.327,-69.979c-0.721,-31.575 -34.866,-6.891 -34.866,-6.891c-81.345,75.379 -310.26,79.274 -286.099,8.916c12.161,-35.408 37.022,-33.933 71.678,-32.458c34.195,1.454 77.928,2.912 128.389,-31.075c82.137,-55.312 58.196,-297.406 56.809,-361.637c-0.043,-2.012 -0.064,-4.031 -0.061,-6.052Z"
          fill={skin.base}
        />
        <path
          d="M233.25,500c0-147.32,119.43-266.75,266.75-266.75S766.75,352.68,766.75,500A266.22,266.22,0,0,1,668.1,707.12q-8.21,6.68-16.94,12.69C591,758,515,758,446.39,751.89c-6.66-1-13.3-2.26-19.89-3.71-26.33-5.8-51.82-14.75-75.37-27.8Q342.4,715,334.2,708.76a199.59,199.59,0,0,1-15.8-13.38q-7.14-6.63-13.79-13.78A265.86,265.86,0,0,1,233.25,500Z"
          fill={skin.base}
        />
        <path
          d="M141.242,886.17c11.032,-4.526 22.462,-10.535 34.26,-18.481c82.137,-55.312 58.196,-297.406 56.809,-361.637c-0.043,-2.012 -0.064,-4.031 -0.061,-6.052c0,-147.32 119.43,-266.75 266.75,-266.75c65.366,-0 125.241,23.512 171.614,62.528c-3.638,1.106 -8.077,1.331 -13.428,0.502c-62.739,-9.723 -134.621,-26.374 -250.406,47.17c-115.785,73.544 -71.105,250.765 -110.038,396.772c-38.934,146.007 -155.542,152.756 -155.542,152.756l0.042,-6.808Z"
          fill={skin.shadow}
        />

        <g fill={skin.shadow}>
          <path d="M195.985,959.764C194.683,949.693 200.359,938.306 211.077,931.447C216.869,927.739 223.213,925.943 229.157,925.943C236.396,925.943 243.041,928.61 247.353,933.73C232.703,944.085 215.105,952.764 195.985,959.764Z" />
          <path d="M148.274,956.968C138.723,956.968 130.837,952.118 129.79,945.039C128.59,936.914 136.864,928.922 148.274,927.201C149.746,926.981 151.201,926.872 152.623,926.872C162.174,926.872 170.056,931.726 171.103,938.806C172.303,946.935 164.029,954.918 152.619,956.639C151.147,956.86 149.692,956.968 148.274,956.968Z" />
          <path d="M76.501,981.468C76.489,981.393 76.476,981.318 76.468,981.243C75.264,973.114 83.542,965.131 94.948,963.406C96.42,963.185 97.875,963.076 99.293,963.076C108.849,963.076 116.73,967.931 117.777,975.006C117.947,976.147 117.93,977.285 117.74,978.401C103.692,980.206 89.808,981.231 76.501,981.468Z" />
          <path d="M37.376,963.893C35.69,963.893 33.967,963.751 32.228,963.464C18.364,961.147 8.624,950.139 10.466,938.876C12.074,929.031 22.009,922.247 33.745,922.247C35.431,922.247 37.154,922.389 38.898,922.681C52.757,924.993 62.502,936.006 60.659,947.264C59.047,957.11 49.113,963.893 37.376,963.893Z" />
          <path d="M172.558,1084.48C172.336,1083.9 172.142,1083.31 171.977,1082.7C169.034,1071.68 177.641,1059.74 191.204,1056.04C193.941,1055.3 196.67,1054.94 199.308,1054.94C209.741,1054.94 218.74,1060.5 221.094,1069.29C221.845,1072.1 221.845,1074.96 221.206,1077.74C203.455,1082.23 186.855,1084.47 172.558,1084.48Z" />
          <path d="M464.581,1015.21C454.04,998.76 446.661,983.472 440.577,971.493C440.903,971.214 441.241,970.939 441.595,970.68C444.642,968.426 448.249,967.356 452.008,967.356C459.498,967.356 467.594,971.605 473.118,979.235C481.404,990.697 480.736,1005.45 471.622,1012.19C469.503,1013.76 467.108,1014.75 464.581,1015.21Z" />
          <path d="M536.976,1054.38C531.35,1054.38 525.278,1052.41 519.943,1048.43C508.64,1040 504.913,1025.71 511.62,1016.53C515.161,1011.69 520.9,1009.23 527.194,1009.23C532.825,1009.23 538.897,1011.19 544.232,1015.18C555.535,1023.61 559.258,1037.89 552.551,1047.07C549.009,1051.92 543.271,1054.38 536.976,1054.38Z" />
          <path d="M579.634,1104.61C568.215,1103.53 555.593,1099.53 542.546,1091.63C539.536,1089.81 536.605,1087.96 533.769,1086.07C534.227,1085.11 534.775,1084.18 535.418,1083.29C538.959,1078.45 544.702,1075.99 550.992,1075.99C556.623,1075.99 562.691,1077.95 568.03,1081.94C575.978,1087.87 580.174,1096.69 579.634,1104.61Z" />
          <path d="M614.661,974.493C602.117,961.726 590.945,949.935 581.048,941.03C581.559,939.806 582.21,938.635 583.014,937.535C586.551,932.689 592.293,930.231 598.584,930.231C604.215,930.231 610.283,932.197 615.621,936.18C626.925,944.614 630.647,958.893 623.94,968.076C621.632,971.239 618.383,973.385 614.661,974.493Z" />
          <path d="M676.409,990.985C671.062,990.985 664.594,988.705 658.695,984.301C648.27,976.522 643.583,965.068 648.225,958.714C650.24,955.955 653.682,954.61 657.784,954.61C663.135,954.61 669.603,956.893 675.502,961.293C685.931,969.072 690.614,980.531 685.972,986.885C683.957,989.643 680.514,990.985 676.409,990.985Z" />
          <path d="M707.474,1047.58C693.17,1040.63 679.814,1031.96 667.348,1022.44C667.715,1021.63 668.164,1020.85 668.704,1020.11C671.536,1016.24 676.219,1014.3 681.504,1014.3C686.838,1014.3 692.791,1016.27 698.08,1020.22C708.175,1027.75 712.186,1039.73 707.474,1047.58Z" />
          <path d="M760.396,1047.68C757.036,1047.68 753.475,1047.07 749.938,1045.77C737.633,1041.27 730.307,1030.24 733.572,1021.12C735.897,1014.63 742.975,1010.86 751.302,1010.86C754.662,1010.86 758.224,1011.47 761.761,1012.77C774.061,1017.27 781.391,1028.31 778.126,1037.42C775.797,1043.91 768.723,1047.68 760.396,1047.68Z" />
          <path d="M779.676,930.235C775.686,930.235 771.419,929.497 767.173,927.943C752.988,922.755 744.406,910.422 747.996,900.397C750.511,893.372 758.335,889.347 767.668,889.347C771.658,889.347 775.925,890.081 780.175,891.635C794.351,896.822 802.934,909.156 799.343,919.185C796.829,926.205 789.009,930.235 779.676,930.235Z" />
          <path d="M856.251,977.876C839.824,973.356 825.058,968.051 811.772,962.297C811.912,961.901 812.069,961.51 812.246,961.122C814.847,955.46 821.121,952.364 828.426,952.364C832.466,952.364 836.819,953.31 841.044,955.297C851.42,960.168 857.571,969.685 856.251,977.876Z" />
          <path d="M908.122,953.364C907.314,953.364 906.498,953.331 905.673,953.268C892.627,952.276 882.634,943.635 883.355,933.964C884.031,924.914 893.867,918.168 905.834,918.168C906.642,918.168 907.458,918.201 908.283,918.264C921.33,919.255 931.322,927.897 930.605,937.564C929.929,946.618 920.089,953.364 908.122,953.364Z" />
          <path d="M956.188,992.272C954.605,992.272 952.977,992.239 951.307,992.164C944.345,991.864 937.547,991.426 930.951,990.868C930.675,989.614 930.576,988.322 930.675,987.014C931.347,977.96 941.183,971.218 953.15,971.218C953.958,971.218 954.774,971.247 955.599,971.31C968.134,972.264 977.851,980.28 977.954,989.476C971.857,991.268 964.635,992.272 956.188,992.272Z" />
          <path d="M264.498,1039.8C258.966,1039.8 254.147,1037.74 251.463,1033.65C246.331,1025.85 250.948,1013.63 261.777,1006.35C266.946,1002.88 272.598,1001.16 277.648,1001.16C283.18,1001.16 287.995,1003.22 290.678,1007.3C295.811,1015.1 291.194,1027.33 280.364,1034.61C275.199,1038.08 269.548,1039.8 264.498,1039.8Z" />
          <path d="M330.458,1025.25C325.755,1017.44 330.397,1005.51 341.036,998.364C346.201,994.889 351.849,993.168 356.903,993.168C360.613,993.168 364.006,994.097 366.644,995.943C357.509,1004.37 345.806,1014.09 330.458,1025.25Z" />
          <path d="M366.578,974.689C364.245,974.689 362.01,974.122 360.015,972.926C352.043,968.151 350.959,955.11 357.595,943.805C362.571,935.326 370.473,930.231 377.477,930.231C379.815,930.231 382.049,930.797 384.04,931.993C392.012,936.768 393.096,949.81 386.464,961.114C381.488,969.593 373.582,974.689 366.578,974.689Z" />
        </g>

        <path
          d="M233.25,495C239.168,329.068 351.68,233.25 499,233.25C646.32,233.25 766.75,346.746 766.75,494.066C767.063,672.05 757.469,736.648 760.561,783.218C767.462,887.156 911.469,911.664 959.478,909.601C983.952,908.547 1002.67,929.735 1005.14,950.918C1007.65,972.451 993.383,993.981 951.307,992.164C764.522,984.101 711.947,879.61 700.846,886.351C675.489,901.731 756.698,975.706 809.101,993.901C870.832,1015.34 804.307,1079.61 732.282,1057.42C630.025,1025.93 570.47,895.435 540.674,930.647C522.173,952.51 588.95,1026.9 613.008,1043.54C659.672,1075.81 606.157,1130.14 542.546,1091.63C444.848,1032.51 441.595,939.876 417.22,946.656C393.533,953.235 402.013,975.001 322.956,1030.61C243.903,1086.23 145.768,1098.81 127.011,1068.2C108.255,1037.58 153.509,1013.43 192.073,999.176C230.633,984.922 297.117,960.772 296.4,929.197C295.679,897.622 261.534,922.306 261.534,922.306C180.189,997.685 -48.726,1001.58 -24.565,931.222C-12.404,895.814 12.457,897.289 47.113,898.764C81.308,900.218 125.041,901.676 175.502,867.689C214.699,841.293 229.738,772.362 234.6,700.523C239.926,621.822 230.808,563.466 233.25,495Z"
          fill="none"
          stroke={colors.outline}
          strokeMiterlimit={10}
          strokeWidth="12px"
        />

        {/* <BackBody clothingColor={clothingColor} braStraps={braStraps} /> */}
        <ClothingBack color={clothingColor} graphic={Graphic} />
        {!(ClothingFront === Noop && ClothingBack === Noop) && (
          <FrontBody
            clothingColor={
              ClothingBack === DressShirt ? 'white' : clothingColor
            }
            braStraps={braStraps}
          />
        )}
        <ClothingFront color={clothingColor} graphic={Graphic} />
        {!faceMask && <FacialHair color={hairColor} />}
        <Eyes withLashes={lashes} />
        <Mouth lipColor={lipColor} />
        {faceMask && <FaceMask color={faceMaskColor} />}
        <FrontHair hairColor={hairColor} hasHat={FrontHat !== Noop} />
        <Eyebrows />
        <FrontHat color={hatColor} scale={hatScale} />
        <Accessory />
      </g>
    </svg>
  )
}

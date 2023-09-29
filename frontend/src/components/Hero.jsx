import React from 'react'
import './Hero.css'
import { arrow, wavehand ,insta,twitter,facebook,linkedin } from '../assets/Assets'
import { animate, motion } from 'framer-motion'



const Hero = () => {
  return (
    <div className='hero_container' id='home'>
        <div className='hero_image'>

         
        </div>
        <div className="hero_text">
            <div className='wavehandsvg'>
            <motion.svg width="54" height="53" viewBox="0 0 54 53" fill="none"  xmlns="http://www.w3.org/2000/svg" animate={{rotate :[-38,38,-38,38,-4]}} transition={{duration : 1, repeatDelay:3,repeat:Infinity}}   >
              <g id="wavehand">
              <path id="Vector" d="M25.1148 44.4868C23.4484 43.1742 7.97403 28.4046 7.80107 28.2431C7.11763 27.5723 6.68732 26.8767 6.56919 26.239C6.44685 25.5765 6.65357 24.9968 7.202 24.4586C7.71247 23.9575 8.33685 23.6925 9.00763 23.6925C9.82607 23.6925 10.6656 24.0735 11.3659 24.765L18.3817 31.3817C18.504 31.4976 18.6643 31.5556 18.8204 31.5556C18.9447 31.5559 19.0662 31.5201 19.1698 31.4527C19.2734 31.3854 19.3544 31.2895 19.4027 31.1771C19.4509 31.0647 19.4642 30.9409 19.4409 30.8211C19.4177 30.7013 19.3588 30.5909 19.2718 30.5039L8.07107 19.1503C6.94888 18.0489 6.42153 16.3636 7.75466 15.0552C8.26513 14.5542 8.8895 14.2892 9.56028 14.2892C10.3787 14.2892 11.2183 14.6701 11.9186 15.3616L23.3767 26.326C23.499 26.4419 23.6593 26.504 23.8197 26.504C23.98 26.504 24.1445 26.4419 24.2668 26.3218C24.5115 26.0817 24.5158 25.6925 24.2711 25.4482L10.5095 11.6019C9.87247 10.9767 9.48857 10.2272 9.42107 9.49848C9.35778 8.7573 9.62357 8.06996 10.1931 7.51098C10.7036 7.00996 11.3279 6.74496 11.9987 6.74496C12.8172 6.74496 13.6567 7.1259 14.357 7.81324L28.3928 21.2454C28.5151 21.3614 28.6754 21.4235 28.8358 21.4235C28.9961 21.4235 29.1606 21.3614 29.2829 21.2413C29.5276 21.0011 29.5318 20.6119 29.2872 20.3676L19.0947 10.0864C18.4534 9.45707 18.0695 8.71176 18.0062 7.98301C17.9429 7.24184 18.2087 6.55449 18.7783 5.99551C19.2887 5.49449 19.9131 5.22949 20.5839 5.22949C21.4023 5.22949 22.2418 5.61043 22.9422 6.30191C26.68 9.90426 36.4379 19.3242 36.767 19.672C38.02 20.5208 38.2731 19.2372 38.3364 18.405C38.4081 17.4361 37.2775 14.0532 37.9356 11.0098C39.0409 6.96441 42.2261 7.62691 42.2978 7.66004C44.0443 8.46332 43.7111 9.6641 43.0909 12.0781L43.0276 12.5543C42.3779 15.7094 46.8414 25.0589 47.1704 25.7587C48.9212 29.5184 50.9378 37.1413 44.2595 43.6959C36.94 50.8799 27.8781 47.1989 25.1148 44.4868Z" fill="url(#paint0_radial_60_2)"/>
              <path id="Vector_2" d="M34.5055 48.5197C30.0167 48.5197 26.1988 46.4121 24.6927 44.9505C23.3384 43.8657 14.7913 35.7666 7.83032 29.1375C7.54767 28.8683 7.38314 28.7151 7.36626 28.6944C6.57735 27.9201 6.08798 27.1127 5.94876 26.3508C5.78845 25.4854 6.06267 24.7028 6.75454 24.0196C7.38736 23.3986 8.16361 23.0714 9.00736 23.0714C9.99876 23.0714 10.9944 23.5186 11.8128 24.3261L18.8202 30.9345L7.61517 19.5809C6.32423 18.3139 5.67454 16.2146 7.3072 14.6163C7.94001 13.9952 8.71626 13.6681 9.56001 13.6681C10.5514 13.6681 11.547 14.1153 12.3655 14.9227L23.8152 25.8788L10.0578 12.0367C9.32376 11.3162 8.87236 10.4343 8.7922 9.55644C8.71204 8.62066 9.04111 7.76355 9.74564 7.07207C10.3784 6.45098 11.1547 6.12387 11.9984 6.12387C12.9856 6.12387 13.9813 6.56691 14.8039 7.37434L28.8355 20.8024L18.643 10.5212C17.9047 9.7966 17.4533 8.91465 17.3774 8.03684C17.2972 7.1052 17.6263 6.24809 18.3308 5.5566C18.9636 4.93551 19.7399 4.6084 20.5836 4.6084C21.575 4.6084 22.5706 5.05559 23.3891 5.86301L26.4308 8.79043C31.8519 14.0076 36.3828 18.376 36.868 18.8646C37.1042 19.0509 37.4122 19.1213 37.543 19.0592C37.6274 19.0178 37.7202 18.8273 37.7033 18.4257C37.678 17.7218 37.5767 16.8481 37.4713 15.9247C37.2603 14.0697 37.0409 12.1485 37.3152 10.8814C37.9142 8.68277 39.0913 7.75113 39.9688 7.34949C41.1753 6.80293 42.3439 6.9934 42.5675 7.09691C44.7613 8.10723 44.3267 9.7966 43.7277 12.1402L43.715 12.1982L43.6475 12.6826C43.2088 14.8026 45.4616 20.6616 47.7144 25.4357L47.7481 25.502C49.2542 28.7317 51.9669 37.0171 44.7106 44.1389C41.3736 47.4059 37.7624 48.5197 34.5055 48.5197ZM9.00736 24.3136C8.50954 24.3136 8.03704 24.5165 7.64892 24.8975C7.24814 25.2908 7.10892 25.6718 7.19329 26.1272C7.28611 26.6282 7.66157 27.2245 8.24798 27.8042C8.2522 27.8083 8.42095 27.9698 8.71204 28.2431C18.5924 37.6547 24.5577 43.2487 25.5111 44.0023L25.5617 44.0478C27.8905 46.3335 36.5431 50.3913 43.812 43.257C50.5072 36.6858 47.9886 29.0132 46.5922 26.0154L46.5627 25.9533C45.1114 22.881 41.8124 15.4279 42.3988 12.4549L42.4958 11.8338C43.1455 9.29973 43.1834 8.76973 42.0824 8.24801C41.7575 8.19004 39.4288 7.91262 38.5386 11.1713C38.315 12.2106 38.5302 14.1111 38.72 15.7881C38.8297 16.7363 38.9309 17.6348 38.9563 18.3843C38.9984 19.5643 38.4289 20.0157 38.083 20.1813C37.3784 20.5167 36.5389 20.231 36.0158 19.8004L35.9609 19.7507C35.7036 19.4774 29.5822 13.5853 25.5322 9.6848L22.4863 6.7491C21.4484 5.72637 20.1111 5.5566 19.2125 6.43855C18.7738 6.86918 18.5755 7.37434 18.6219 7.93332C18.6725 8.51715 18.9931 9.12582 19.5289 9.65168L29.7425 19.9328C29.9746 20.1671 30.1038 20.4814 30.1022 20.8082C30.1006 21.135 29.9684 21.4481 29.7341 21.6802C29.2658 22.1398 28.4389 22.1481 27.958 21.6926L13.9138 8.25629C12.8759 7.2377 11.5344 7.06793 10.64 7.94988C10.2013 8.38051 10.003 8.88566 10.0494 9.44465C10.1042 10.0285 10.4249 10.6413 10.9564 11.1589L24.7222 25.0134C25.2074 25.4937 25.2031 26.2804 24.7138 26.7607C24.2455 27.2203 23.4186 27.2286 22.9377 26.7732L11.4753 15.8046C10.4375 14.7778 9.09595 14.6121 8.20157 15.4941C7.10892 16.5665 7.69111 17.8957 8.51798 18.7114L19.7272 30.0732C19.9586 30.3064 20.0871 30.6198 20.0847 30.9453C20.0823 31.2709 19.9493 31.5824 19.7145 31.8123C19.242 32.2761 18.4236 32.2802 17.9427 31.8289L10.9269 25.2121C10.3363 24.6283 9.65704 24.3136 9.00736 24.3136Z" fill="#EDA600"/>
              <path id="Vector_3" d="M35.7582 19.2705C33.4422 23.9121 33.7417 30.4088 37.2179 35.6218C37.6103 36.3257 38.2811 35.9821 37.9393 35.2575C33.7417 26.4421 38.1418 20.0904 38.1418 20.0904L35.7582 19.2705Z" fill="#EDA600"/>
               <g id="Group">
               <path id="Vector_4" d="M26.6504 1.86326C27.9245 1.53615 29.2829 1.56513 30.6034 1.8674C31.9154 2.17795 33.2274 2.83217 34.202 3.90045C35.1554 4.96045 35.7418 6.24818 35.9401 7.59802C36.1257 8.93545 35.9527 10.3143 35.3073 11.4571C35.2313 10.1735 35.0035 8.99342 34.6196 7.90443C34.4213 7.36201 34.1893 6.84443 33.9066 6.35584C33.6282 5.87138 33.2991 5.39107 32.949 4.99771C32.236 4.19029 31.2699 3.56092 30.1857 3.07232C29.0973 2.56717 27.9118 2.19451 26.6504 1.86326Z" fill="#B0BEC5"/>
              <path id="Vector_5" d="M27 5.78849C27.7045 5.34959 28.5863 5.25849 29.4173 5.40341C30.2569 5.54834 31.0584 5.95826 31.6913 6.52552C32.3198 7.10107 32.767 7.82568 33.0455 8.57927C33.1805 8.95607 33.248 9.35357 33.3113 9.73865C33.3323 10.1361 33.3323 10.5336 33.2691 10.9311C32.978 10.6289 32.7502 10.3266 32.535 10.0326C32.2861 9.75521 32.092 9.46123 31.8684 9.19209C31.4297 8.65795 31.0036 8.17349 30.5438 7.74287C30.0713 7.32466 29.5734 6.95615 28.9955 6.63732C28.4217 6.31021 27.7763 6.03693 27 5.78849Z" fill="#90A4AE"/>
              </g>
              <g id="Group_2">
              <path id="Vector_6" d="M2.88111 32.0234C3.47595 33.1662 4.09611 34.2263 4.81752 35.162C5.5347 36.0978 6.35736 36.8928 7.31502 37.4104C7.77908 37.663 8.33174 37.8824 8.87174 38.048C9.41595 38.2178 9.98127 38.3338 10.5635 38.4124C11.7278 38.5532 12.9513 38.5284 14.2464 38.3338C13.2424 39.1909 11.9008 39.6463 10.5339 39.7457C9.15017 39.8368 7.74533 39.5428 6.48814 38.8472C5.22252 38.1391 4.29439 37.0129 3.7122 35.8163C3.13002 34.6113 2.81783 33.3153 2.88111 32.0234Z" fill="#B0BEC5"/>
              <path id="Vector_7" d="M6.86857 31.5391C7.27779 32.2347 7.68279 32.7937 8.12576 33.2823C8.56451 33.7709 9.03701 34.1725 9.5517 34.5369C10.0748 34.8888 10.6486 35.1994 11.2729 35.5099C11.5851 35.6673 11.9184 35.7915 12.2475 35.9737C12.5892 36.1186 12.9351 36.2718 13.2979 36.4913C12.914 36.632 12.5217 36.7148 12.1209 36.777C11.7244 36.7935 11.3151 36.8142 10.9101 36.7604C10.1001 36.6527 9.29014 36.3753 8.58139 35.8909C7.88529 35.3981 7.30732 34.7149 6.99092 33.9406C6.67029 33.1705 6.57748 32.3092 6.86857 31.5391Z" fill="#90A4AE"/>
              </g>
              </g>
              <defs>
              <radialGradient id="paint0_radial_60_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.5827 15.7345) rotate(-44.4645) scale(38.0402 38.0335)">
              <stop offset="0.353" stop-color="#FFCA28"/>
              <stop offset="0.872" stop-color="#FFB300"/>
              </radialGradient>
              </defs>
             </motion.svg>

            </div>
            <div className='hero__text'>

            <div className="box">
              <div className="hero-text">
                <motion.div className="text-wrapper"  whileInView={{x :[190,0],opacity : [0,0.5,1],scale:[0.8,1]}} transition={{duration : 0.5}} >Hello I’m Sharad</motion.div>
                <motion.div className="professional-web" whileInView={{x :[190,0],opacity : [0,0.5,1]}} transition={{duration : 0.7}}  >
                 Professional
                 <br />
                Web developer
            </motion.div>
         </div>
         </div>
            </div>
            <div className='resume_section'>
            <div className="resume_button">
            <motion.button className='resume__button' whileHover={{scale : 1.06}}   whileTap={{ scale: 0.9 }}  whileInView={{opacity : [0,0.5,1],scale : [0.6,1]}} transition={{duration : 0.3}}>Resume</motion.button>
          </div > 
            <div className='arrow'>
            <img src={arrow} alt="arrow"  />
            </div>
            </div>
            <motion.div className="social-icons" whileInView={{y :[70,0],opacity : [0,0.5,1]}} transition={{duration : 0.9}}>
         <img className="insta" alt="Line svg" src={insta}/>
         <img className="twitter" alt="Line svg" src={twitter}/>
        <img className="linkedin" alt="Line svg" src={linkedin}/>
        <img className="linkedin" alt="Line svg" src={facebook}/>
        </motion.div> 
        </div>
        
    </div>
  )
}

export default Hero
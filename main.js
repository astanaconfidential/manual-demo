let videoPlayer = document.querySelectorAll('video')

videoPlayer.forEach((v) => {
   v.playbackRate = 1.6
})


// fullscreen
const mediaElements = document.querySelectorAll('img')

mediaElements.forEach((el) => {
   el.addEventListener('click', () => {
      if (!document.fullscreenElement) {

         el.requestFullscreen().catch(err => {
            console.warn(`Ошибка при входе в fullscreen: ${err.message}`)
         })
      } else {

         document.exitFullscreen()
      }
   })
})



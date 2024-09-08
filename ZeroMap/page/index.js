Page({
  build() {




    const img = hmUI.createWidget(hmUI.widget.IMG, {
      x: -100, y: 0,
      src: 'map1.png'
    })


    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 200,
      y: 400,
      w: 70,
      h: 70,
      radius: 40,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: '向下',
      click_func: (button_widget) => {
        img.setProperty(hmUI.prop.MORE, {
          y: -250
        })
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 240,
      y: 0,
      w: 70,
      h: 70,
      radius: 40,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: '向上',
      click_func: (button_widget) => {
        img.setProperty(hmUI.prop.MORE, {
          y: +100
        })
      }
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 170,
      y: 0,
      w: 70,
      h: 70,
      radius: 40,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: '复原',
      click_func: (button_widget) => {
        img.setProperty(hmUI.prop.MORE, {
          x: -100, y: 0,
        })
      }
    })



    hmUI.setLayerScrolling(false)

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 230,
      w: 70,
      h: 70,
      radius: 40,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: '向左',
      click_func: (button_widget) => {
        img.setProperty(hmUI.prop.MORE, {
          x: +100
        })
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 410,
      y: 230,
      w: 70,
      h: 70,
      radius: 40,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: '向右',
      click_func: (button_widget) => {
        img.setProperty(hmUI.prop.MORE, {
          x: -280
        })
      }
    })

  }


});

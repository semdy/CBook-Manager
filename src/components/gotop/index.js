import { getCurrentPage } from '../../utils/util'

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    showOffset: {
      type: Number,
      value: 600
    },
    duration: {
      type: Number,
      value: 300
    },
    icon: {
      type: String,
      value: 'rocket'
    },
    useSlot: Boolean,
    disabled: Boolean
  },
  data: {
    visible: false
  },
  attached () {
    if (!this.data.disabled) {
      this.handlePage()
    }
  },
  methods: {
    handlePage () {
      let self = this
      let page = getCurrentPage()
      let origScroll = page.onPageScroll || function () {}

      page.onPageScroll = function (e) {
        origScroll.call(page, e)

        let visible = false
        if (e.scrollTop > self.data.showOffset) {
          visible = true
        }

        if (visible !== self.data.visible) {
          self.setData({
            visible
          })
        }
      }
    },
    onClick () {
      if (!this.data.disabled) {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: this.data.duration
        })
      }
    }
  }
})

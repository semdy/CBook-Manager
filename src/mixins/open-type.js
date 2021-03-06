export const openType = Behavior({
  properties: {
    openType: String
  },

  methods: {
    bindGetUserInfo(event) {
      this.triggerEvent('getuserinfo', event.detail)
    },

    bindContact(event) {
      this.triggerEvent('contact', event.detail)
    },

    bindGetPhoneNumber(event) {
      this.triggerEvent('getphonenumber', event.detail)
    },

    bindOpenSetting(event) {
      this.triggerEvent('opensetting', event.detail)
    },

    bindError(event) {
      this.triggerEvent('error', event.detail)
    }
  }
})

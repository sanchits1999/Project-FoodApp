import axios from "axios"

export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers : {
        Authorization : "Bearer MFrao-Ig6EdiL6fmrxQRtO6tWSVte7pHWYb6oAXbC_mIntjCgY7aqlTP5259MABdHrKnU_sMbd06U6LrTjBI6UnEZnnwEa6WA6eUcfD_fzd-hMqFA1ltoZm84TOHXnYx"
    }
})
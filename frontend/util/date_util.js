
const pluralize = (value, word) => {
    if (value == 1) {
        return word
    }
    return word + "s"
}

export const getTimeElapsed = (createDate) => {
    let date = new Date(createDate)
    let today = new Date()
    let dateMs = today - date.getTime()
    let dif

    //years
    if ( dateMs / 31536000000 >= 1){
        dif = Math.floor(dateMs / 31536000000)
        return `${dif} ${pluralize(dif,"year")}`
    }
    //months
    if (dateMs / 2592000000 >= 1){
        dif = Math.floor(dateMs / 2592000000)
        return `${dif} ${pluralize(dif,"month")}`
    }
    //weeks
    if (dateMs / 604800000 >= 1){
        dif = Math.floor(dateMs / 604800000)
        return `${dif} ${pluralize(dif,"week")}`
    }
    //days
    if (dateMs / 86400000 >= 1){
        dif = Math.floor(dateMs / 86400000)
        return `${dif} ${pluralize(dif,"day")}`
    }
    //hours
    if ( dateMs / 3600000 >= 1){
        dif = Math.floor(dateMs / 3600000)
        return `${dif} ${pluralize(dif,"hour")}`
    }
    //minutes
    if (dateMs / 60000 >= 1){
        dif = Math.floor(dateMs / 60000)
        return `${dif} ${pluralize(dif,"minute")}`
    }
    //minutes
    if (dateMs / 60000 < 1){
        return `less than one minute`
    }
}
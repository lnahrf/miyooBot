module.exports = {
    getCurrentDateTime: () => {
        const now = new Date()

        const yyyy = now.getFullYear()
        let mm = now.getMonth() + 1
        let dd = now.getDate()

        const hour = now.getHours()
        let minute = now.getMinutes()
        let millis = now.getMilliseconds()

        if (dd < 10) dd = '0' + dd
        if (mm < 10) mm = '0' + mm
        if (minute < 10) minute = '0' + minute
        if (millis < 10) millis = '0' + millis

        return `${dd}/${mm}/${yyyy}@${hour}:${minute}:${millis}`
    }
}

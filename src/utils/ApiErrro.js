class ApiError extends Error {
    constructor(
        statusCode,
        massage = "Something went Wrong",
        errors = [],
        statck = ""
    ){
        supper(massage),
        this.statusCode = statusCode,
        this.data = null
        this.massage = this.massage
        this.success = false
        this.errors = errors
        if (statck) {
            this.statck = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }


    }
}

export {ApiError}
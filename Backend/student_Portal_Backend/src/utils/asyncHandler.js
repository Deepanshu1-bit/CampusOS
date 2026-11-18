const asyncHandler = (requsetHandler) => async (req, res, next) => {
    try {
        await requsetHandler(req, res, next)
    } catch (error) {
        next(error)
    }
}

export { asyncHandler }
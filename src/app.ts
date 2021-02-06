import ex, { Application, Request, Response } from 'express'

const app: Application = ex()

app.get('/', (req: Request, res: Response ) => {
    req.id = 1234
    req.user = "username"
    res.json({
        reqID: req.id,
        reqUser: req.user,
        info: "Declaration Merge example"
    })
})

app.listen(process.env.PORT || 3000)
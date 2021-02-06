declare global {
    declare module "express" {
        export interface Request {
            id?: number
            user?: string
        }
    }
}

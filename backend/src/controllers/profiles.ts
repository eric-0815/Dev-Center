import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { addOrCreateProfile } from "../services/profiles";



// export const getProfile = async (req: Request, res: Response) => {
//     try {
//         const userId = req.body.user.id
//         const result = await findProfileByUserId(userId)
//         return res.send(result)
//     } catch (err: any) {
//         console.error(err.message)
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
//     }
// }

export const postProfile = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const result = await addOrCreateProfile(body)
        res.send(result)
    } catch (err: any) {
        console.error(err.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error")
    }

}
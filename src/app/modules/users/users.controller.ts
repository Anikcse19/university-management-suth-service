import { Request, Response } from 'express'
import usersService from './users.service'

const createUserController = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      status: true,
      message: 'Created user successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Failed to create user',
    })
  }
}

export default {
  createUserController,
}

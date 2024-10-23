import { hash } from 'bcryptjs'
import { prisma } from '../../utils/prisma'
import type { userTypes } from './createUserServiceDTO'

export class CreateUserService {
  async execute({ name, password, username }: userTypes) {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        username,
      },
    })
    if (userAlreadyExists) {
      throw new Error('User already exists!')
    }

    const passwordHash = await hash(password, 8)

    const user = await prisma.user.create({
      data: {
        name,
        password: passwordHash,
        username,
      },
    })
    return { user }
  }
}

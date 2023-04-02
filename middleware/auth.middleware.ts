import { NextApiRequest, NextApiResponse } from "next"
import {
  createMiddlewareDecorator,
  NextFunction,
  NotFoundException,
  UnauthorizedException,
} from "next-api-decorators"
import Auth from "../Models/Auth"
import dbConnect from "../utils/db"

export const getApiKeys = async (collectionName) => {
  await dbConnect()
  const result = Auth.findOne({ collectionName }).lean()
  return result
}
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction,
  collectionName: string,
) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new NotFoundException("Authorization header not found")
  }
  const [, token] = authorization.split(" ")
  const apiKeys = await getApiKeys(collectionName)
  if (token !== apiKeys.apiKey) {
    throw new UnauthorizedException("Invalid token")
  }
  next()
}

export const AllowListAuthGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    handler(req, res, next, "AllowList")
  },
)

export const ParticipantsAuthGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) =>
    handler(req, res, next, "Participants"),
)

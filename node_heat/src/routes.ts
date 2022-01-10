import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensuredAutenticated } from "./middleware/ensuredAutenticated";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { Get3LastMessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensuredAutenticated, new CreateMessageController().handle)

router.get("/messages/last3", new Get3LastMessagesController().handle)

router.get("/profile", ensuredAutenticated, new ProfileUserController().handle)

export { router }
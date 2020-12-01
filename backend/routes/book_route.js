const express = require("express")
const router = express.Router()
const bookControllr = require("../controllers/book_controller")

router.get("/", bookControllr.findAll)
router.post("/", bookControllr.create)
router.get("/:id", bookControllr.findOne)
router.put("/:id", bookControllr.UpdateBook)
router.delete("/:id", bookControllr.delete)
module.exports = router

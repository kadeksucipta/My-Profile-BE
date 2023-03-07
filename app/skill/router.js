const router = require("express").Router();
// const { police_check } = require("../../middlewares");
const tagController = require("./controller");

router.get("/skill", tagController.index)
router.post("/skill",
    // police_check("create", "Tag"),
    tagController.store
);
router.put("/skill/:id",
    // police_check("update", "Tag"),
    tagController.update)
;
router.delete("/skill/:id",
    // police_check("delete", "Tag"),
    tagController.destroy
);

module.exports = router
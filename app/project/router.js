const router = require("express").Router();
const multer = require("multer");
const os = require("os");
// const { police_check } = require("../../middlewares");

const projectController = require("./controller");

router.get("/project", 
    projectController.index
);
router.post("/project",
    multer({dest: os.tmpdir()}).single("image"),
    // police_check("create", "Product"),
    projectController.store
);
router.put("/project/:id",
    multer({dest: os.tmpdir()}).single("image"),
    // police_check("update", "Product"),
    projectController.update
);
router.delete("/project/:id",
// police_check("delete", "Product"),
    projectController.destroy
);

module.exports = router;
const router = require("express").Router();
const multer = require("multer");
const os = require("os");
// const { police_check } = require("../../middlewares");

const projectDuaController = require("./controller");

router.get("/projectdua", 
    projectDuaController.index
);
router.post("/projectdua",
    multer({dest: os.tmpdir()}).single("image"),
    // police_check("create", "Product"),
    projectDuaController.store
);
router.put("/projectdua/:id",
    multer({dest: os.tmpdir()}).single("image"),
    // police_check("update", "Product"),
    projectDuaController.update
);
router.delete("/projectdua/:id",
// police_check("delete", "Product"),
    projectDuaController.destroy
);

module.exports = router;
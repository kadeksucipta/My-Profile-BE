const router = require("express").Router();
const multer = require("multer");
const os = require("os");
// const { police_check } = require("../../middlewares");

const projectTigaController = require("./controller");

router.get("/projecttiga", 
    projectTigaController.index
);
router.post("/projecttiga",
    multer({dest: os.tmpdir()}).single("image"),
    // police_check("create", "Product"),
    projectTigaController.store
);
router.put("/projecttiga/:id",
    multer({dest: os.tmpdir()}).single("image"),
    // police_check("update", "Product"),
    projectTigaController.update
);
router.delete("/projecttiga/:id",
// police_check("delete", "Product"),
projectTigaController.destroy
);

module.exports = router;